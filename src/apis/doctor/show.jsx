import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useShowDoctor = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const showDoctorReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/doctors/${id}`, headers);

      console.log("show doctors res", res);

      setData(res?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to show doctors");
      console.log("show doctors error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, showDoctorReq };
};

export default useShowDoctor;
