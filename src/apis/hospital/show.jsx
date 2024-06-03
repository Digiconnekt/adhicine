import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useShowHospital = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const showHospitalReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/hospitals/${id}`, headers);

      console.log("show hospital res", res);

      setData(res?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to show hospital");
      console.log("show hospital error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, showHospitalReq };
};

export default useShowHospital;
