import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useProfileShow = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const profileShowReq = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/profile", headers);

      setData(res?.data?.data);
      console.log("show profile res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error?.response?.data?.message || "Failed to show Your Profile"
      );
      console.log("show profile error", error?.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, profileShowReq };
};

export default useProfileShow;
