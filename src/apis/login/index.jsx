import useAxios from "..";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const loginReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/login", payload);
      setData(res?.data);
      dispatch(
        login({
          userId: res?.data?.data?.id,
          name: res?.data?.data?.name,
          email: res?.data?.data?.email,
          phone: res?.data?.data?.phone,
          // role: res?.data?.data?.role,
          role: "admin",
          token: res?.data?.data?.accessToken,
          profileImg: res?.data?.data?.profilePhotoUrl,
        })
      );
      toast.success("Logged in successfully");
      console.log("login res", res);

      navigate(`/`);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        typeof error.response.data.msg === "string"
          ? error.response.data.msg
          : "Failed to login"
      );
      console.log("login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, loginReq };
};

export default useLogin;
