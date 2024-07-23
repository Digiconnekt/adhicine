import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";
import { useNavigate } from "react-router-dom";

const useCreatePatient = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createPatientReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/invite/patient", payload, headers);

      setData(res?.data?.data);
      navigate("/doctor");
      toast.success("Patient created Successfully");
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
