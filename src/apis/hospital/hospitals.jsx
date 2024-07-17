import { useState, useCallback } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllHospitals = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allHospitalsReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/hospitals?device_name=web${query ? query : ""}`,
          headers
        );
        setData(res?.data?.data);
        // console.log("all hospitals res", res);
      } catch (error) {
        setError(error?.response?.data);
        console.log("all hospitals error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await allHospitalsReq(query);
    },
    [allHospitalsReq]
  );

  return { isLoading, data, error, allHospitalsReq, reFetch };
};

export default useAllHospitals;
