import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useUpdateDoctor = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateDoctorReq = async (id, payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.patch(`/doctors/${id}`, payload, headers);
      console.log("update doctor res", res);
      toast.success(res?.data?.msg || "doctor updated successfully");
      setData(res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to update doctor");
      console.log("update doctor error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateDoctorReq };
};

export default useUpdateDoctor;
