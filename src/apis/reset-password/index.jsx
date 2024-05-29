import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const resetPasswordReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/reset-password", payload);

      setData(res?.data?.data);
      navigate("/login");
      toast.success(res?.data?.message || res?.data?.status || "Successfull");
      console.log("reset password res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.email ||
          "Failed"
      );
      console.log("reset password error", error?.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, resetPasswordReq };
};

export default useResetPassword;
