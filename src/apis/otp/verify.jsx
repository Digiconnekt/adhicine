import { useState } from "react";
import { useDispatch } from "react-redux";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";
import { logout } from "../../stores/authTokenSlice";

const useVerifyOtp = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const verifyOtpReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/verify/otp", payload, headers);

      setData(res?.data);
      toast.success(res?.data?.msg || "otp verified successfully");
      console.log("verify otp success res", res);
      dispatch(logout());
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data || "Failed to verify otp");
      console.log("verify otp error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, verifyOtpReq };
};

export default useVerifyOtp;
