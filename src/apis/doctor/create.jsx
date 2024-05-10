import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreateDoctor = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createDoctorReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/doctor`, payload, headers);

      console.log("create doctor res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "doctor created successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create doctor"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to create doctor");
      console.log("create doctor error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createDoctorReq };
};

export default useCreateDoctor;
