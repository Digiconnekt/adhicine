import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import HospitalDashboard from "../../dashboards/Hospital";
import DoctorList from "../../components/Doctor/DoctorList";
import PatientList from "../../components/Patient/PatientList";
import { useParams } from "react-router-dom";
import useAllDoctors from "../../apis/doctor/doctors";
import useAllPatients from "../../apis/patient/patients";

const index = () => {
  const { hospitalId } = useParams();
  const {
    allDoctorsReq,
    data: dataAllDoctors,
    error: errorAllDoctors,
    isLoading: isLoadingAllDoctors,
  } = useAllDoctors();
  const {
    allPatientsReq,
    data: dataAllPatients,
    error: errorAllPatients,
    isLoading: isLoadingAllPatients,
  } = useAllPatients();

  const [cardType, setCardType] = useState("doctor");
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  const cardsData = [
    {
      title: "Doctors",
      img: "../../../images/doctor-icon.png",
      cardType: "doctor",
      count: doctorCount,
    },
    {
      title: "Patients",
      img: "../../../images/patient-icon.png",
      cardType: "patient",
      count: patientCount,
    },
  ];

  useEffect(() => {
    allDoctorsReq();
    allPatientsReq();
  }, []);

  useEffect(() => {
    if (dataAllDoctors) {
      setDoctorCount(dataAllDoctors?.length);
    }
  }, [dataAllDoctors]);

  useEffect(() => {
    if (dataAllPatients) {
      setPatientCount(dataAllPatients?.length);
    }
  }, [dataAllPatients]);

  return (
    <HospitalDashboard hospitalId={hospitalId}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-8">
              <div className="grid grid-cols-12 gap-6 mt-5">
                <Card
                  cards={cardsData}
                  cardType={cardType}
                  setCardType={setCardType}
                  isLoading={false}
                />
              </div>
            </div>
            {/* END: Cards */}

            {/* BEGIN: Doctors Table */}
            {cardType === "doctor" && (
              <DoctorList
                dataAllDoctors={dataAllDoctors}
                errorAllDoctors={errorAllDoctors}
                isLoadingAllDoctors={isLoadingAllDoctors}
              />
            )}
            {/* END: Doctors Table */}

            {/* BEGIN: Patients Table */}
            {cardType === "patient" && (
              <PatientList
                dataAllPatients={dataAllPatients}
                errorAllPatients={errorAllPatients}
                isLoadingAllPatients={isLoadingAllPatients}
              />
            )}
            {/* END: Patients Table */}
          </div>
        </div>
      </div>
    </HospitalDashboard>
  );
};

export default index;
