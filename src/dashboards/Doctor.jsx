import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorDashboard = ({ children, doctorId }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "admin") {
    if (!doctorId) {
      return <Navigate to={`/`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "hospital") {
    if (!doctorId) {
      return <Navigate to={`/hospital`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "doctor") {
    if (doctorId) {
      return <Navigate to={`/doctor`} />;
    } else {
      return <>{children}</>;
    }
  }
};

export const OnlyDoctor = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "doctor") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default DoctorDashboard;
