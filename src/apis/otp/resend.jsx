import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useResendOtp = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const resendOtpReq = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/resend/otp", {}, headers);

      setData(res?.data);
      toast.success(res?.data?.msg || "otp resend successfully");
      console.log("resend otp success res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Failed to resend otp");
      console.log("resend otp error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, resendOtpReq };
};

export default useResendOtp;
