import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import AdminDashboard from "../../dashboards/Admin";
import HospitalList from "../../components/Hospital/HospitalList";
import DoctorList from "../../components/Doctor/DoctorList";
import PatientList from "../../components/Patient/PatientList";

const index = () => {
  const [cardType, setCardType] = useState("hospital");

  const cardsData = [
    {
      title: "Hospitals",
      img: "../../../images/hospital-icon.png",
      cardType: "hospital",
      // count: companyCount,
    },
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
    <AdminDashboard>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Cards */}
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

            {/* BEGIN: Hospitals Table */}
            {cardType === "hospital" && <HospitalList reFetchCard={""} />}
            {/* END: Hospitals Table */}

            {/* BEGIN: Doctors Table */}
            {cardType === "doctor" && <DoctorList reFetchCard={""} />}
            {/* END: Doctors Table */}

            {/* BEGIN: Patients Table */}
            {cardType === "patient" && <PatientList reFetchCard={""} />}
            {/* END: Patients Table */}
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default index;
