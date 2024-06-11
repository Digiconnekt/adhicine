import { useState, useCallback } from "react";
import useAxios from ".";
import toast from "react-hot-toast";
import useAuthHeader from "./authHeader";

const useTopCards = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const topCardsReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/cards${query ? query : ""}`,
          headers
        );
        setData(res?.data?.data);
        // console.log("top cards res", res);
      } catch (error) {
        setError(error?.response?.data);
        // console.log("top cards error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await topCardsReq(query);
    },
    [topCardsReq]
  );

  return { isLoading, data, error, topCardsReq, reFetch };
};

export default useTopCards;
