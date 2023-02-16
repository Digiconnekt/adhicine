import { createContext } from "react";

const AppContext = createContext();

const user = {
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  phone: localStorage.getItem("phone"),
  accessToken: localStorage.getItem("accessToken"),
  profilePhotoUrl: localStorage.getItem("profilePhotoUrl"),
};

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
