import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreateHospital = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createHospitalReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/hospital`, payload, headers);

      console.log("create hospital res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "hospital created successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create hospital"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to create hospital");
      console.log("create hospital error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createHospitalReq };
};

export default useCreateHospital;
