import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosGet } from "../API";
import { AppContext } from "../provider";

const HospitalsTable = ({ type }) => {
  const user = useContext(AppContext);
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/add/${type}`);
  };

  const [hospitalsData, setHospitalsData] = useState([]);
  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  const getHospitalsData = async (url, headers) => {
    try {
      const { data } = await AxiosGet(url, headers);
      setHospitalsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHospitalsData(`hospitals`, header);
  }, []);

  // console.log("hospitalsData: ", hospitalsData);

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5 capitalize">
            Hospital
          </h2>
        </div>
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          {/* add buttun start */}
          <button
            className="btn btn-primary shadow-md mr-2 capitalize"
            onClick={redirect}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              style={{ marginRight: "8px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add {type}
          </button>
          {/* add buttun end */}
        </div>

        {/* table start */}
        <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
          <table className="table table-report sm:mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Hospital Name</th>
                <th className="whitespace-nowrap">Email</th>
                <th className="text-center whitespace-nowrap">Contact</th>
                {/* <th className="text-center whitespace-nowrap">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {hospitalsData.map((curElem) => (
                <tr className="intro-x" key={curElem.id}>
                  <td className="">
                    <a
                      href={`/hospital/${curElem.id}`}
                      className="font-medium whitespace-nowrap capitalize"
                    >
                      {!curElem.name ? "NA" : curElem.name}
                    </a>
                  </td>
                  <td className="">{!curElem.email ? "NA" : curElem.email}</td>
                  <td className="text-center">
                    {!curElem.phone ? "NA" : curElem.phone}
                  </td>
                  {/* <td
                    className="table-report__action w-56"
                    style={{ textAlign: "center" }}
                  >
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle btn px-2 box"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        <span className="w-5 h-5 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
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
                                icon-name="printer"
                                data-lucide="printer"
                                className="lucide lucide-printer w-4 h-4 mr-2"
                              >
                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
                                <rect x="6" y="14" width="12" height="8"></rect>
                              </svg>
                              Print
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
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
                                icon-name="file-text"
                                data-lucide="file-text"
                                className="lucide lucide-file-text w-4 h-4 mr-2"
                              >
                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <line x1="10" y1="9" x2="8" y2="9"></line>
                              </svg>
                              Export to Excel
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
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
                                icon-name="file-text"
                                data-lucide="file-text"
                                className="lucide lucide-file-text w-4 h-4 mr-2"
                              >
                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <line x1="10" y1="9" x2="8" y2="9"></line>
                              </svg>
                              Export to PDF
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table end */}

        {/* pagination start */}
        {/* <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
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
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
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
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
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
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
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
                  </svg>
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
        {/* pagination end */}
      </div>
    </>
  );
};

export default HospitalsTable;
