import { useState, useCallback } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllPatients = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allPatientsReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/patients?device_name=web${query ? `${query}` : ""}`,
          headers
        );
        setData(res?.data);
        console.log("all patients res", res);
      } catch (error) {
        setError(error?.response?.data);
        toast.error(
          error.response.data.message || "Failed to fetch all patients"
        );
        console.log("all patients error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await allPatientsReq(query);
    },
    [allPatientsReq]
  );

  return { isLoading, data, error, allPatientsReq, reFetch };
};

export default useAllPatients;
