import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HospitalDashboard = ({ children, hospitalId }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "admin") {
    if (!hospitalId) {
      return <Navigate to={`/`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "hospital-admin") {
    if (hospitalId) {
      return <Navigate to={`/hospital`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "doctor") {
    return <Navigate to={`/doctor`} />;
  }
};

export const OnlyHospital = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "hospital-admin") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default HospitalDashboard;
