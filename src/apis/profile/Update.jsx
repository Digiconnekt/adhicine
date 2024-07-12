import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import useAuthHeader from "../authHeader";
import { addUser } from "../../stores/authUserSlice";

const useProfileUpdate = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const profileUpdateReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/users", payload, headers);

      setData(res?.data?.data);
      dispatch(
        addUser({
          userId: res?.data?.data?.id,
          name: res?.data?.data?.name,
          email: res?.data?.data?.email,
          phone: res?.data?.data?.phone,
          role: res?.data?.data?.role,
          profileImg: res?.data?.data?.profilePhotoUrl,
          otpVerifiedAt: res?.data?.data?.otpVerifiedAt,
        })
      );
      toast.success(res?.data?.message || "Successfully Updated Your Profile");
      console.log("update profile res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error?.response?.data?.message || "Failed to Update Your Profile"
      );
      console.log("update profile error", error?.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, profileUpdateReq };
};

export default useProfileUpdate;
