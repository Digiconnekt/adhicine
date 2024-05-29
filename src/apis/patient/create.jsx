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
      const res = await axiosInstance.post("/invite/patient", payload, headers);

      // ?device_name=web

      setData(res?.data?.data);
      toast.success("Successfully Registered");
      console.log("register res", res?.data?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : "Failed to register"
      );
      console.log("register error", error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createPatientReq };
};

export default useCreatePatient;
