import React, { useContext, useEffect, useState } from "react";
import { AxiosGet } from "../API";
import ReportChart from "../components/ReportChart";
import { AppContext } from "../provider";

const Report = () => {
  const user = useContext(AppContext);
  const [reportData, setReportData] = useState([]);
  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  // dates start
  let today = new Date();
  let todayFormatted = today.toISOString().slice(0, 10);

  let thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  let thirtyDaysAgoFormatted = thirtyDaysAgo.toISOString().slice(0, 10);

  const [date, setDate] = useState({
    from: thirtyDaysAgoFormatted,
    to: todayFormatted,
  });

  const dateOnChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setDate(() => ({ ...date, [handlerName]: handlerValue }));
  };

  // const formattedFromDate = date.from.replace(/\//g, "-");
  // const formattedToDate = date.to.replace(/\//g, "-");

  // console.log(formattedFromDate, formattedToDate);

  // dates end

  const getReportData = async (url, headers) => {
    try {
      const { data } = await AxiosGet(url, headers);
      setReportData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReportData(`track?startDate=${date.from}&endDate=${date.to}`, header);
  }, [date.from, date.to]);

  console.log("reportData: ", reportData);

  //number of total medicines
  const totalMedicines = reportData.reduce((acc, obj) => acc + obj.dosage, 0);

  //number of medicines taken
  let takenMedicines = reportData.filter(
    (item) => item.status === "taken"
  ).length;

  //number of medicines taken
  let missedMedicines = reportData.filter(
    (item) => item.status === "missed"
  ).length;

  //number of medicines snoozed
  let snoozedMedicines = reportData.filter(
    (item) => item.status === "snoozed"
  ).length;

  // medicines names
  let medicineNames = reportData
    .map((item) => item.medicine)
    .filter((value, index, self) => self.indexOf(value) === index);

  // medicine Status tabel data
  const medicineStatus = reportData.reduce(
    (acc, { medicine, status, dosage }) => {
      if (!acc[medicine]) {
        acc[medicine] = { taken: 0, snoozed: 0, missed: 0, dosage: 0 };
      }
      acc[medicine][status] += 1;
      acc[medicine]["dosage"] += dosage;
      return acc;
    },
    {}
  );
  const medicineStatusArr = Object.entries(medicineStatus).map(
    ([medicine, data]) => {
      return {
        medicine,
        ...data,
      };
    }
  );

  return (
    <>
      <div className="content">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-6">
              {/* 4 blocks start */}
              <div className="col-span-12 mt-8">
                <div className="intro-y flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    {user.name}
                  </h2>
                </div>
                {/* 4 blocks start */}
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="text-base text-slate-500 mt-1">
                          Medicine Total
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          {totalMedicines}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="text-base text-slate-500 mt-1">
                          Medicine Taken
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          {takenMedicines}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="text-base text-slate-500 mt-1">
                          Medicine Missed
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          {missedMedicines}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="text-base text-slate-500 mt-1">
                          Medicine Snozzed
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          {snoozedMedicines}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4 blocks end */}
              </div>
              {/* 4 blocks end */}

              {/* ---- report start ---- */}
              {/* left block start */}
              <div className="col-span-12 lg:col-span-8 mt-8">
                {/* <div className="intro-y block sm:flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">Report</h2>
                </div> */}
                <div className="intro-y box p-5">
                  <h2 className="text-lg font-medium truncate mb-5">Report</h2>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center">
                      <label
                        htmlFor="from"
                        className="text-base text-slate-500"
                      >
                        From:{" "}
                      </label>
                      <input
                        type="date"
                        className="form-control sm:w-40 box ml-2"
                        id="from"
                        name="from"
                        onChange={dateOnChangeHandler}
                      />
                      {/* <button
                        className="dropdown-toggle btn px-2  btn-primary shadow-md"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                        fdprocessedid="885kqo"
                      >
                        <div className="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-2 py-1 rounded-full mr-2">
                          7
                        </div>
                        Medicines
                      </button> */}

                      {/* vertical line break start */}
                      <div className="w-px h-10 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                      {/* vertical line break end */}

                      <label htmlFor="to" className="text-base text-slate-500">
                        To:{" "}
                      </label>
                      <input
                        type="date"
                        className="form-control sm:w-40 box ml-2"
                        id="to"
                        name="to"
                        onChange={dateOnChangeHandler}
                      />
                      {/* <button
                        className="dropdown-toggle btn px-2  btn-primary shadow-md"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                        fdprocessedid="885kqo"
                      >
                        <div className="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-2 py-1 rounded-full mr-2">
                          1
                        </div>
                        Types
                      </button> */}
                    </div>

                    {/* calendar start */}
                    {/* <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                      <label htmlFor="from">From: </label>
                      <input
                        type="date"
                        className="form-control sm:w-40 box mr-5"
                        id="from"
                        name="from"
                        onChange={dateOnChangeHandler}
                      />

                      <label htmlFor="to">To: </label>
                      <input
                        type="date"
                        className="form-control sm:w-40 box"
                        id="to"
                        name="to"
                        onChange={dateOnChangeHandler}
                      />
                    </div> */}
                    {/* calendar end */}
                  </div>

                  <div className="text-base text-slate-500 mt-3">
                    Showing results for {date.from} to {date.to}
                  </div>

                  {/* graph start */}
                  <div className="mt-5">
                    <ReportChart
                      from={date.from}
                      to={date.to}
                      APIDATA={reportData}
                    />
                  </div>
                  {/* graph end */}
                </div>
              </div>
              {/* left block end */}

              {/* right block start */}
              <div className="col-span-12 lg:col-span-4 mt-8">
                <div className="intro-y box mt-5 lg:mt-0">
                  <div className="relative flex items-center p-5">
                    <div className="w-12 h-12 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-13.jpg"
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium text-base">{user.name}</div>
                      <div className="text-slate-500">Active</div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="#"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </a>
                      <div className="dropdown-menu w-56">
                        <ul className="dropdown-content">
                          <li>
                            <h6 className="dropdown-header">Export Options</h6>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
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
                                icon-name="activity"
                                data-lucide="activity"
                                className="lucide lucide-activity w-4 h-4 mr-2"
                              >
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                              </svg>
                              English
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
                                icon-name="box"
                                data-lucide="box"
                                className="lucide lucide-box w-4 h-4 mr-2"
                              >
                                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                              </svg>
                              Indonesia
                              <div className="text-xs text-white px-1 rounded-full bg-danger ml-auto">
                                10
                              </div>
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
                                icon-name="layout"
                                data-lucide="layout"
                                className="lucide lucide-layout w-4 h-4 mr-2"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                              </svg>
                              English
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
                                icon-name="sidebar"
                                data-lucide="sidebar"
                                className="lucide lucide-sidebar w-4 h-4 mr-2"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                              </svg>
                              Indonesia
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <div className="flex p-1">
                              <button
                                type="button"
                                className="btn btn-primary py-1 px-2"
                              >
                                Settings
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary py-1 px-2 ml-auto"
                              >
                                View Profile
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                          />
                        </svg>
                        Diagnosis
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        Diabetes
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        Email
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        {user.email}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                        Contact
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        901982900
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                    <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                      <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0  font-medium">
                        Files/Documents
                      </div>
                      <div className="w-full sm:w-auto flex">
                        <div
                          className="dropdown"
                          style={{ position: "relative" }}
                        >
                          <button
                            className="dropdown-toggle btn px-2  btn-primary shadow-md"
                            aria-expanded="false"
                            data-tw-toggle="dropdown"
                          >
                            <span className="w-4 h-4 mr-2 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                              </svg>
                            </span>
                            Add Files
                          </button>
                          <div
                            className="dropdown-menu w-40"
                            id="_54gvung7k"
                            data-popper-placement="bottom-end"
                            style={{
                              position: "absolute",
                              inset: "0px 0px auto auto",
                              margin: "0px",
                              transform: "translate3d(0px, 37.6px, 0px)",
                            }}
                          >
                            <ul className="dropdown-content">
                              <li>
                                <a href="" className="dropdown-item">
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
                                    icon-name="file"
                                    data-lucide="file"
                                    className="lucide lucide-file w-4 h-4 mr-2"
                                  >
                                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                  </svg>{" "}
                                  Share Files{" "}
                                </a>
                              </li>
                              <li>
                                <a href="" className="dropdown-item">
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
                                    icon-name="settings"
                                    data-lucide="settings"
                                    className="lucide lucide-settings w-4 h-4 mr-2"
                                  >
                                    <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>{" "}
                                  Settings{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div className="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          className="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right block end */}
              {/* ---- report end ---- */}

              {/* table start */}
              <div className="col-span-12 mt-6">
                <div className="intro-y block sm:flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5 capitalize">
                    Medicine Status
                  </h2>
                </div>
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                  {/* add buttun start */}
                  <button className="btn btn-primary shadow-md mr-2 capitalize">
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
                    Add Patients
                  </button>
                  {/* add buttun end */}

                  {/* search block start */}
                  <div
                    className="hidden md:block mx-auto text-slate-500"
                    style={{ width: "70%", paddingRight: "8px" }}
                  >
                    <div className="relative text-slate-500">
                      <input
                        type="text"
                        className="form-control w-full box pr-10"
                        placeholder="Search..."
                      />
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
                        icon-name="search"
                        className="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                        data-lucide="search"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                  {/* search block end */}

                  <div className="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
                    {/* right single block start */}
                    <div className="intro-x dropdown sm:mr-6">
                      <div
                        className="btn btn-primary dropdown-toggle notification cursor-pointer"
                        role="button"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </div>
                      <div className="notification-content pt-2 dropdown-menu pb-2">
                        <div className="notification-content__box dropdown-content">
                          <div className="notification-content__title">
                            Requests
                          </div>
                          <div className="cursor-pointer relative flex items-center">
                            <div className="w-12 h-12 flex-none image-fit mr-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-full"
                                src="../dist/images/profile-15.jpg"
                              />
                            </div>
                            <div className="overflow-hidden flex items-center pr-1">
                              <div className="flex flex-col mr-6">
                                <a
                                  href="#"
                                  className="font-medium truncate mb-1"
                                >
                                  Christian Bale
                                </a>
                                <div className="text-xs text-slate-400 whitespace-nowrap">
                                  28 Minutes ago
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary w-34 mr-2 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn w-34 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-full"
                                src="../dist/images/profile-15.jpg"
                              />
                            </div>
                            <div className="overflow-hidden flex items-center pr-1">
                              <div className="flex flex-col mr-6">
                                <a
                                  href="#"
                                  className="font-medium truncate mb-1"
                                >
                                  Christian Bale
                                </a>
                                <div className="text-xs text-slate-400 whitespace-nowrap">
                                  28 Minutes ago
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary w-34 mr-2 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn w-34 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-full"
                                src="../dist/images/profile-15.jpg"
                              />
                            </div>
                            <div className="overflow-hidden flex items-center pr-1">
                              <div className="flex flex-col mr-6">
                                <a
                                  href="#"
                                  className="font-medium truncate mb-1"
                                >
                                  Christian Bale
                                </a>
                                <div className="text-xs text-slate-400 whitespace-nowrap">
                                  28 Minutes ago
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary w-34 mr-2 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn w-34 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-full"
                                src="../dist/images/profile-15.jpg"
                              />
                            </div>
                            <div className="overflow-hidden flex items-center pr-1">
                              <div className="flex flex-col mr-6">
                                <a
                                  href="#"
                                  className="font-medium truncate mb-1"
                                >
                                  Christian Bale
                                </a>
                                <div className="text-xs text-slate-400 whitespace-nowrap">
                                  28 Minutes ago
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary w-34 mr-2 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn w-34 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-full"
                                src="../dist/images/profile-15.jpg"
                              />
                            </div>
                            <div className="overflow-hidden flex items-center pr-1">
                              <div className="flex flex-col mr-6">
                                <a
                                  href="#"
                                  className="font-medium truncate mb-1"
                                >
                                  Christian Bale
                                </a>
                                <div className="text-xs text-slate-400 whitespace-nowrap">
                                  28 Minutes ago
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary w-34 mr-2 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn w-34 p-1"
                                fdprocessedid="rzq8ho"
                              >
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* right single block end */}

                    {/* right 2blocks start */}
                    <button
                      className="btn btn-secondary shadow-md"
                      style={{
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
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
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>
                    </button>
                    <button
                      className="btn btn-primary shadow-md"
                      style={{
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
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
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* right 2blocks end */}
                </div>

                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                  <table className="table table-report sm:mt-2">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap">Medicine Name</th>
                        <th className="whitespace-nowrap">Total Medicines</th>
                        <th className="text-center whitespace-nowrap">Taken</th>
                        <th className="text-center whitespace-nowrap">
                          Missed
                        </th>
                        <th className="text-center whitespace-nowrap">
                          Snoozed
                        </th>
                        <th className="text-center whitespace-nowrap">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicineStatusArr.map(
                        ({ medicine, dosage, taken, missed, snoozed }) => {
                          return (
                            <tr className="intro-x" key={medicine}>
                              <td className="w-40">
                                <a
                                  href=""
                                  className="font-medium whitespace-nowrap"
                                >
                                  {medicine}
                                </a>
                                {/* <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Sport &amp; Outdoor
                          </div> */}
                              </td>
                              <td className="w-40">
                                <a
                                  href=""
                                  className="font-medium whitespace-nowrap"
                                >
                                  {dosage}
                                </a>
                              </td>
                              <td className="text-center">{taken}</td>
                              <td className="w-40 text-center">{missed}</td>
                              <td className="w-40 text-center">{snoozed}</td>
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
                                            <rect
                                              x="6"
                                              y="14"
                                              width="12"
                                              height="8"
                                            ></rect>
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
                                            <line
                                              x1="16"
                                              y1="13"
                                              x2="8"
                                              y2="13"
                                            ></line>
                                            <line
                                              x1="16"
                                              y1="17"
                                              x2="8"
                                              y2="17"
                                            ></line>
                                            <line
                                              x1="10"
                                              y1="9"
                                              x2="8"
                                              y2="9"
                                            ></line>
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
                                            <line
                                              x1="16"
                                              y1="13"
                                              x2="8"
                                              y2="13"
                                            ></line>
                                            <line
                                              x1="16"
                                              y1="17"
                                              x2="8"
                                              y2="17"
                                            ></line>
                                            <line
                                              x1="10"
                                              y1="9"
                                              x2="8"
                                              y2="9"
                                            ></line>
                                          </svg>
                                          Export to PDF
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>

                {/* pagination start */}
                <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
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
                </div>
                {/* pagination end */}
              </div>
              {/* table end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
