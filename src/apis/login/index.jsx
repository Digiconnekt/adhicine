import useAxios from "..";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authTokenSlice";
import { addUser } from "../../stores/authUserSlice";
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

      if (
        res?.data?.data?.role !== "doctor" &&
        res?.data?.data?.role !== "hospital-admin"
      ) {
        return toast.error("Only hospital and doctor can login");
      }

      setData(res?.data);
      dispatch(
        login({
          token: res?.data?.data?.accessToken,
        })
      );
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
      toast.success("Logged in successfully");
      console.log("login res", res);

      switch (res?.data?.data?.role) {
        case "hospital-admin":
          navigate(`/hospital`);
          break;
        case "doctor":
          navigate(`/doctor`);
          break;

        default:
          navigate(`/login`);
          break;
      }
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
