import { useState, useCallback } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllMedicines = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allMedicinesReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/medicines?device_name=web${query ? `${query}` : ""}`,
          headers
        );
        setData(res?.data);
        console.log("all medicines res", res);
      } catch (error) {
        setError(error?.response?.data);
        toast.error(
          error.response.data.message || "Failed to fetch all medicines"
        );
        console.log("all medicines error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await allMedicinesReq(query);
    },
    [allMedicinesReq]
  );

  return { isLoading, data, error, allMedicinesReq, reFetch };
};

export default useAllMedicines;
