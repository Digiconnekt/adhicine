import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreatePatient = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createPatientReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/patient`, payload, headers);

      console.log("create patient res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "patient created successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create patient"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to create patient");
      console.log("create patient error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createPatientReq };
};

export default useCreatePatient;
