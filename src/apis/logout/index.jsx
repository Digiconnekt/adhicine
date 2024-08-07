import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/authTokenSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";
import { removeUser } from "../../stores/authUserSlice";

const useLogout = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const logoutReq = async () => {
    try {
      setIsLoading(true);
      // const res = await axiosInstance.get("/logout", headers);

      // setData(res?.data);
      // console.log("Logout success res", res);
      dispatch(logout());
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Failed to Logout");
      console.log("Logout error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, logoutReq };
};

export default useLogout;
