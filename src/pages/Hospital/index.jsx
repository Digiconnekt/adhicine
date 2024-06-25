import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import HospitalDashboard from "../../dashboards/Hospital";
import DoctorList from "../../components/Doctor/DoctorList";
import PatientList from "../../components/Patient/PatientList";
import HospitalList from "../../components/Hospital/HospitalList";
import { useParams } from "react-router-dom";
import useTopCards from "../../apis/topCards";

const index = () => {
  const { hospitalId } = useParams();
  const {
    data: dataTopCards,
    error: errorTopCards,
    isLoading: isLoadingTopCards,
    reFetch: reFetchTopCards,
    topCardsReq,
  } = useTopCards();

  const [cardType, setCardType] = useState("hospital");
  const [hospitalCount, setHospitalCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  const cardsData = [
    {
      title: "Hospitals",
      img: "../../../images/hospital-icon.png",
      cardType: "hospital",
      count: hospitalCount,
    },
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
    topCardsReq();
  }, []);

  useEffect(() => {
    if (dataTopCards) {
      setHospitalCount(dataTopCards?.hospitals ?? 0);
      setDoctorCount(dataTopCards?.doctors ?? 0);
      setPatientCount(dataTopCards?.patients ?? 0);
    }
  }, [dataTopCards]);

  return (
    <HospitalDashboard hospitalId={hospitalId}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-8">
              <div className="grid grid-cols-12 gap-6 mt-5">
                {errorTopCards ? (
                  <p className="col-span-12 box p-3 text-danger text-sm text-center">
                    failed to load total Hospitals, doctors and patients
                  </p>
                ) : (
                  <Card
                    cards={cardsData}
                    cardType={cardType}
                    setCardType={setCardType}
                    isLoading={isLoadingTopCards}
                  />
                )}
              </div>
            </div>
            {/* END: Cards */}

            {/* BEGIN: Hospitals Table */}
            {cardType === "hospital" && <HospitalList />}
            {/* END: Hospitals Table */}

            {/* BEGIN: Doctors Table */}
            {cardType === "doctor" && (
              <DoctorList reFetchTopCards={reFetchTopCards} />
            )}
            {/* END: Doctors Table */}

            {/* BEGIN: Patients Table */}
            {cardType === "patient" && <PatientList />}
            {/* END: Patients Table */}
          </div>
        </div>
      </div>
    </HospitalDashboard>
  );
};

export default index;
