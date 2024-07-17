import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";
import { useNavigate } from "react-router-dom";

const useCreateDoctor = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createDoctorReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(
        "/invite/doctor?device_name=web",
        payload,
        headers
      );

      setData(res?.data?.data);
      toast.success("Successfully Created Doctor");

      navigate("/");

      console.log("register res", res?.data?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        typeof error.response.data.msg === "string"
          ? error.response.data.msg
          : "Failed to create Doctor"
      );
      console.log("register error", error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createDoctorReq };
};

export default useCreateDoctor;
