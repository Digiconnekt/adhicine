import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useUpdateHospital = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateHospitalReq = async (id, payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.patch(
        `/hospitals/${id}`,
        payload,
        headers
      );
      console.log("update hospital res", res);
      toast.success(res?.data?.msg || "hospital updated successfully");
      setData(res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to update hospital");
      console.log("update hospital error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateHospitalReq };
};

export default useUpdateHospital;
