import React from "react";
import Table from "../components/Table";

const Report = () => {
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
                    James Cordon
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
                          20
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
                          23
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
                          14
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
                          28
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
                <div className="intro-y block sm:flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">Report</h2>
                </div>
                <div className="intro-y box p-5 mt-12 sm:mt-5">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex">
                      <button
                        class="dropdown-toggle btn px-2  btn-primary shadow-md"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                        fdprocessedid="885kqo"
                      >
                        <div class="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-2 py-1 rounded-full mr-2">
                          7
                        </div>
                        Medicines
                      </button>

                      {/* vertical line break start */}
                      <div className="w-px h-10 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                      {/* vertical line break end */}

                      <button
                        class="dropdown-toggle btn px-2  btn-primary shadow-md"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                        fdprocessedid="885kqo"
                      >
                        <div class="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-2 py-1 rounded-full mr-2">
                          1
                        </div>
                        Types
                      </button>
                    </div>

                    {/* calendar start */}
                    <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        icon-name="calendar"
                        data-lucide="calendar"
                        className="lucide lucide-calendar w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <input
                        type="text"
                        className="datepicker form-control sm:w-56 box pl-10"
                        fdprocessedid="1jyi3i"
                      />
                    </div>
                    {/* calendar end */}
                  </div>

                  {/* graph start */}
                  <div className="report-chart">
                    <div className="h-[275px]">
                      <canvas
                        id="report-line-chart"
                        className="mt-6 -mb-6"
                        width="500"
                        height="343"
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "274.4px",
                          width: "400px",
                        }}
                      ></canvas>
                    </div>
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
                      <div className="font-medium text-base">James Cordon</div>
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
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                          />
                        </svg>
                        Diagnosis
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        Diabetes
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center mt-5">
                      <div class="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        Email
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        jamescordon@gmail.com
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center mt-5">
                      <div class="w-40 font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                        Contact
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        901982900
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                    <div class="intro-y flex flex-col-reverse sm:flex-row items-center">
                      <div class="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0  font-medium">
                        Files/Documents
                      </div>
                      <div class="w-full sm:w-auto flex">
                        <div class="dropdown" style={{ position: "relative" }}>
                          <button
                            class="dropdown-toggle btn px-2  btn-primary shadow-md"
                            aria-expanded="false"
                            data-tw-toggle="dropdown"
                          >
                            <span class="w-4 h-4 mr-2 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                              </svg>
                            </span>
                            Add Files
                          </button>
                          <div
                            class="dropdown-menu w-40"
                            id="_54gvung7k"
                            data-popper-placement="bottom-end"
                            style={{
                              position: "absolute",
                              inset: "0px 0px auto auto",
                              margin: "0px",
                              transform: "translate3d(0px, 37.6px, 0px)",
                            }}
                          >
                            <ul class="dropdown-content">
                              <li>
                                <a href="" class="dropdown-item">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    icon-name="file"
                                    data-lucide="file"
                                    class="lucide lucide-file w-4 h-4 mr-2"
                                  >
                                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                  </svg>{" "}
                                  Share Files{" "}
                                </a>
                              </li>
                              <li>
                                <a href="" class="dropdown-item">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    icon-name="settings"
                                    data-lucide="settings"
                                    class="lucide lucide-settings w-4 h-4 mr-2"
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

                    <div class="flex flex-col sm:flex-row items-center mt-5">
                      <div class="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center mt-5">
                      <div class="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center mt-5">
                      <div class="mr-auto flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        checkup_result.pdf
                      </div>
                      <div class="w-full sm:w-auto flex items-center">
                        <a
                          href=""
                          class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white mr-2 tooltip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
              <Table type="medicine status" />
              {/* table end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
