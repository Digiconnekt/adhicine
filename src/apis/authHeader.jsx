import { useSelector } from "react-redux";

const useAuthHeader = (contentType = "application/json") => {
  const token = useSelector((state) => state?.authToken?.token?.token);

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
    },
  };

  return headers;
};

export default useAuthHeader;
