import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import DoctorDashboard from "../../dashboards/Doctor";
import PatientList from "../../components/Patient/PatientList";
import { useParams } from "react-router-dom";
import useAllPatients from "../../apis/patient/patients";

const index = () => {
  const { doctorId } = useParams();

  const {
    allPatientsReq,
    data: dataAllPatients,
    error: errorAllPatients,
    isLoading: isLoadingAllPatients,
  } = useAllPatients();

  const [cardType, setCardType] = useState("patient");
  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    allPatientsReq();
  }, []);

  const cardsData = [
    {
      title: "Total Patients",
      img: "../../../images/patient-icon.png",
      cardType: "patient",
      count: patientCount,
    },
  ];

  useEffect(() => {
    if (dataAllPatients) {
      setPatientCount(dataAllPatients?.length);
    }
  }, [dataAllPatients]);

  return (
    <DoctorDashboard doctorId={doctorId}>
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
    </DoctorDashboard>
  );
};

export default index;
