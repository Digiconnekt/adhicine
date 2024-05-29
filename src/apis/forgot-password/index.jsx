import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";
import { useNavigate } from "react-router-dom";

const useForgotPassword = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const forgotPasswordReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/forgot-password", payload);

      setData(res?.data?.data);
      navigate("/login");
      toast.success(
        res?.data?.message || res?.data?.status || "Successfull send mail"
      );
      console.log("forgot password res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.email ||
          "Failed"
      );
      console.log("forgot password error", error?.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, forgotPasswordReq };
};

export default useForgotPassword;
