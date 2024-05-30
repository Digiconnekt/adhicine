import { useSelector } from "react-redux";

const useAuthHeader = (contentType = "application/json") => {
  const user = useSelector((state) => state.auth?.user);

  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
      "Content-Type": contentType,
    },
  };

  return headers;
};

export default useAuthHeader;
