import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useDeleteHospital = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteHospitalReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/hospitals/${id}`, headers);

      toast.success(res?.data?.msg || "hospital deleted successfully");
      console.log("delete hospital res", res);
      setData(res?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to delete hospital");
      console.log("delete hospital error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteHospitalReq };
};

export default useDeleteHospital;
