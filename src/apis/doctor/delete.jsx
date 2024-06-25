import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useDeleteDoctor = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteDoctorReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/doctors/${id}`, headers);

      toast.success(res?.data?.msg || "doctor deleted successfully");
      console.log("delete doctor res", res);
      setData(res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to delete doctor");
      console.log("delete doctor error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteDoctorReq };
};

export default useDeleteDoctor;
