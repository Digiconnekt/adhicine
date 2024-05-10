import _ from "lodash";
import Card from "../../components/Card";
import { useState } from "react";
import HospitalDashboard from "../../dashboards/Hospital";
import DoctorList from "../../components/Doctor/DoctorList";
import PatientList from "../../components/Patient/PatientList";
import { useParams } from "react-router-dom";

const index = () => {
  const { hospitalId } = useParams();
  const [cardType, setCardType] = useState("doctor");

  const cardsData = [
    {
      title: "Doctors",
      img: "../../../images/doctor-icon.png",
      cardType: "doctor",
      // count: storeCount,
    },
    {
      title: "Patients",
      img: "../../../images/patient-icon.png",
      cardType: "patient",
      // count: revenueCount,
    },
  ];

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
            {cardType === "doctor" && <DoctorList reFetchCard={""} />}
            {/* END: Doctors Table */}

            {/* BEGIN: Patients Table */}
            {cardType === "patient" && <PatientList reFetchCard={""} />}
            {/* END: Patients Table */}
          </div>
        </div>
      </div>
    </HospitalDashboard>
  );
};

export default index;
