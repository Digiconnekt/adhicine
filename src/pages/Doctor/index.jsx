import _ from "lodash";
import Card from "../../components/Card";
import { useState } from "react";
import DoctorDashboard from "../../dashboards/Doctor";
import PatientList from "../../components/Patient/PatientList";
import { useParams } from "react-router-dom";

const index = () => {
  const { doctorId } = useParams();
  const [cardType, setCardType] = useState("patient");

  const cardsData = [
    {
      title: "Patients",
      img: "../../../images/patient-icon.png",
      cardType: "patient",
      // count: revenueCount,
    },
  ];

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
            {cardType === "patient" && <PatientList reFetchCard={""} />}
            {/* END: Patients Table */}
          </div>
        </div>
      </div>
    </DoctorDashboard>
  );
};

export default index;
