import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorsTable = ({ type }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/add/${type}`);
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5 capitalize">
            Doctor
          </h2>
        </div>

        {/* table start */}
        <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
          <table className="table table-report sm:mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">{type} Name</th>
                <th className="whitespace-nowrap">Email</th>
                <th className="text-center whitespace-nowrap">Contact</th>
                <th className="text-center whitespace-nowrap">Total Doctors</th>
                <th className="text-center whitespace-nowrap">
                  Total Patients
                </th>
                <th className="text-center whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="intro-x">
                <td className="w-40">
                  <a href="" className="font-medium whitespace-nowrap">
                    name
                  </a>
                  {/* <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                Sport &amp; Outdoor
                              </div> */}
                </td>
                <td className="w-40">
                  <a href="" className="font-medium whitespace-nowrap">
                    email
                  </a>
                </td>
                <td className="text-center">phone</td>
                <td className="w-40 text-center">401</td>
                <td className="w-40 text-center">5671</td>
                <td
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table end */}

        {/* pagination start */}

        {/* pagination end */}
      </div>
    </>
  );
};

export default DoctorsTable;
