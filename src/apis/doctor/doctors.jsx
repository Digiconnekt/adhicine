import { useState, useCallback } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllDoctors = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allDoctorsReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/doctors?device_name=web${query ? `${query}` : ""}`,
          headers
        );
        setData(res?.data?.data);
        // console.log("all doctors res", res);
      } catch (error) {
        setError(error?.response?.data);
        console.log("all doctors error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await allDoctorsReq(query);
    },
    [allDoctorsReq]
  );

  return { isLoading, data, error, allDoctorsReq, reFetch };
};

export default useAllDoctors;
