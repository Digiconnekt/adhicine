import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = ({ children }) => {
  const user = useSelector((state) => state?.authUser?.user);

  if (user && user.role === "admin") {
    return <>{children}</>;
  }

  if (user && user.role === "hospital-admin") {
    return <Navigate to={`/hospital`} />;
  }

  if (user && user.role === "doctor") {
    return <Navigate to={`/doctor`} />;
  }
};

export const OnlyAdmin = ({ children }) => {
  const user = useSelector((state) => state?.authUser?.user);

  if (user && user.role === "admin") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default AdminDashboard;
