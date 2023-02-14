import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AxiosGet } from "../API";
import { AppContext } from "../provider";

const PatientRequests = () => {
  const user = useContext(AppContext);
  const [requestsData, setRequestsData] = useState([]);
  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  const getRequestsData = async (url, headers) => {
    try {
      const { data } = await AxiosGet(url, headers);
      setRequestsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const acceptRequestAPI = async (id) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "approve/patient",
        { patientId: id },
        header
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptRequest = (id) => {
    acceptRequestAPI(id);
  };

  useEffect(() => {
    getRequestsData(`patients/requests?device_name=web`, header);
  }, []);

  // console.log("requestsData: ", requestsData);

  return (
    <>
      <div className="content">
        <h2 className="intro-y text-lg font-medium mt-10">Patient Requests</h2>
        <div className="grid grid-cols-12 gap-6 mt-5">
          {requestsData.map((curElem) => (
            <div className="intro-y col-span-12 md:col-span-6" key={curElem.id}>
              <div className="box">
                <div className="flex flex-col lg:flex-row items-center p-5">
                  <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src={curElem.profilePhotoUrl}
                    />
                  </div>
                  <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                    <a href="" className="font-medium">
                      {curElem.name}
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {curElem.email}
                    </div>
                  </div>
                  <div className="flex mt-4 lg:mt-0">
                    <button
                      className="btn btn-primary py-1 px-2 mr-2"
                      onClick={() => acceptRequest(curElem.id)}
                    >
                      Accept
                    </button>
                    <button className="btn btn-outline-secondary py-1 px-2">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <nav className="w-full sm:w-auto sm:mr-auto">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      icon-name="chevrons-left"
                      className="lucide lucide-chevrons-left w-4 h-4"
                      data-lucide="chevrons-left"
                    >
                      <polyline points="11 17 6 12 11 7"></polyline>
                      <polyline points="18 17 13 12 18 7"></polyline>
                    </svg>{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      icon-name="chevron-left"
                      className="lucide lucide-chevron-left w-4 h-4"
                      data-lucide="chevron-left"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>{" "}
                  </a>
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    ...
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    1
                  </a>{" "}
                </li>
                <li className="page-item active">
                  {" "}
                  <a className="page-link" href="#">
                    2
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    3
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    ...
                  </a>{" "}
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      icon-name="chevron-right"
                      className="lucide lucide-chevron-right w-4 h-4"
                      data-lucide="chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      icon-name="chevrons-right"
                      className="lucide lucide-chevrons-right w-4 h-4"
                      data-lucide="chevrons-right"
                    >
                      <polyline points="13 17 18 12 13 7"></polyline>
                      <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <select className="w-20 form-select box mt-3 sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PatientRequests;
