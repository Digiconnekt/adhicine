import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosGet } from "../API";
import HospitalDoctorsTable from "../components/HospitalDoctorsTable";
import HospitalPatientsTable from "../components/HospitalPatientsTable";
import { AppContext } from "../provider";

const HospitalDetails = () => {
  const { id } = useParams();
  const user = useContext(AppContext);
  const [type, setType] = useState("doctor");

  const typeClick = (name) => {
    setType(name);
  };

  const borderBottomActive = {
    borderBottom: "4px solid rgb(22,78,99)",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const border = {
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  // doctor
  const [hospitalDoctorsData, setHospitalDoctorsData] = useState([]);

  const getHospitalDoctorsData = async (url, headers) => {
    try {
      const { data } = await AxiosGet(url, headers);
      setHospitalDoctorsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // patient
  const [hospitalPatientsData, setHospitalPatientsData] = useState([]);

  const getHospitalPatientsData = async (url, headers) => {
    try {
      const { data } = await AxiosGet(url, headers);
      setHospitalPatientsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHospitalDoctorsData(`doctors?device_name=web&hospital_id=${id}`, header);
    getHospitalPatientsData(
      `patients?device_name=web&hospital_id=${id}`,
      header
    );
  }, []);

  // console.log("hospitalDoctorsData: ", hospitalDoctorsData);

  // console.log("hospitalPatientsData: ", hospitalPatientsData);

  return (
    <>
      <div className="content">
        {/* greeting start */}
        <div className="intro-y box px-5 pt-5 mt-5 bg-primary">
          <div className=" border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div className="px-5 items-center justify-center lg:justify-start">
              <div
                className="ml-5"
                style={{ color: "rgb(255 255 255 / var(--tw-text-opacity))" }}
              >
                <div className="truncate sm:whitespace-normal font-medium text-3xl">
                  Good afternoon, {user.name}
                </div>
                <div className="text mt-2">
                  Here is what’s happening with your Dashboard today:
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* greeting end */}

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-6">
              {/* 2 blocks start */}
              <div className="col-span-12 mt-8">
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div
                    className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y"
                    onClick={() => {
                      typeClick("doctor");
                    }}
                  >
                    <div className="zoom-in">
                      <div
                        className="box p-5"
                        style={type === "doctor" ? borderBottomActive : border}
                      >
                        <div
                          className="flex"
                          style={{
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <div>
                            <div className="text-base text-slate-500">
                              Total Doctors
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-3">
                              {hospitalDoctorsData.length}
                            </div>
                          </div>
                          <img
                            src="../dist/images/dashboard/doctor.png"
                            alt="Doctors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y"
                    onClick={() => {
                      typeClick("patient");
                    }}
                  >
                    <div className="zoom-in">
                      <div
                        className="box p-5"
                        style={type === "patient" ? borderBottomActive : border}
                      >
                        <div
                          className="flex"
                          style={{
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <div>
                            <div className="text-base text-slate-500">
                              Total Patients
                            </div>
                            <div className="text-3xl font-medium leading-8  mt-3">
                              {hospitalPatientsData.length}
                            </div>
                          </div>
                          <img
                            src="../dist/images/dashboard/patient.png"
                            alt="Patients"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 blocks end */}

              {/* table start */}
              {type === "doctor" ? (
                <HospitalDoctorsTable type={type} />
              ) : (
                <HospitalPatientsTable type={type} />
              )}
              {/* table end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
