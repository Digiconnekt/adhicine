import React from "react";
import Table from "../components/Table";

const Report = () => {
  return (
    <>
      <div class="content">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12">
            <div class="grid grid-cols-12 gap-6">
              {/* 4 blocks start */}
              <div class="col-span-12 mt-8">
                <div class="intro-y flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-5">
                    James Cordon
                  </h2>
                </div>
                {/* 4 blocks start */}
                <div class="grid grid-cols-12 gap-6 mt-5">
                  <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="text-base text-slate-500 mt-1">
                          Medicine Total
                        </div>
                        <div class="text-3xl font-medium leading-8 mt-6">
                          20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="text-base text-slate-500 mt-1">
                          Medicine Taken
                        </div>
                        <div class="text-3xl font-medium leading-8 mt-6">
                          23
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="text-base text-slate-500 mt-1">
                          Medicine Missed
                        </div>
                        <div class="text-3xl font-medium leading-8 mt-6">
                          14
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="text-base text-slate-500 mt-1">
                          Medicine Snozzed
                        </div>
                        <div class="text-3xl font-medium leading-8 mt-6">
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
              <div class="col-span-12 lg:col-span-8 mt-8">
                <div class="intro-y block sm:flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-5">Report</h2>
                  <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
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
                      class="lucide lucide-calendar w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
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
                      class="datepicker form-control sm:w-56 box pl-10"
                      fdprocessedid="1jyi3i"
                    />
                  </div>
                </div>
                <div class="intro-y box p-5 mt-12 sm:mt-5">
                  <div class="flex flex-col md:flex-row md:items-center">
                    <div class="flex">
                      <div>
                        <div class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                          $15,000
                        </div>
                        <div class="mt-0.5 text-slate-500">This Month</div>
                      </div>
                      <div class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                      <div>
                        <div class="text-slate-500 text-lg xl:text-xl font-medium">
                          $10,000
                        </div>
                        <div class="mt-0.5 text-slate-500">Last Month</div>
                      </div>
                    </div>
                    <div class="dropdown md:ml-auto mt-5 md:mt-0">
                      <button
                        class="dropdown-toggle btn btn-outline-secondary font-normal"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                        fdprocessedid="laqoq"
                      >
                        {" "}
                        Filter by Category{" "}
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
                          icon-name="chevron-down"
                          data-lucide="chevron-down"
                          class="lucide lucide-chevron-down w-4 h-4 ml-2"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>{" "}
                      </button>
                      <div class="dropdown-menu w-40">
                        <ul class="dropdown-content overflow-y-auto h-32">
                          <li>
                            <a href="" class="dropdown-item">
                              PC &amp; Laptop
                            </a>
                          </li>
                          <li>
                            <a href="" class="dropdown-item">
                              Smartphone
                            </a>
                          </li>
                          <li>
                            <a href="" class="dropdown-item">
                              Electronic
                            </a>
                          </li>
                          <li>
                            <a href="" class="dropdown-item">
                              Photography
                            </a>
                          </li>
                          <li>
                            <a href="" class="dropdown-item">
                              Sport
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="report-chart">
                    <div class="h-[275px]">
                      <canvas
                        id="report-line-chart"
                        class="mt-6 -mb-6"
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
                </div>
              </div>
              {/* left block end */}

              {/* right block start */}
              <div class="col-span-12 lg:col-span-4 mt-8">
                <div class="intro-y flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-5">
                    Weekly Top Seller
                  </h2>
                  <a href="" class="ml-auto text-primary truncate">
                    Show More
                  </a>
                </div>
                <div class="intro-y box p-5 mt-5">
                  <div class="mt-3">
                    <div class="h-[213px]">
                      <canvas
                        id="report-pie-chart"
                        width="210"
                        height="266"
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "212.8px",
                          width: "168px",
                        }}
                      ></canvas>
                    </div>
                  </div>
                  <div class="w-52 sm:w-auto mx-auto mt-8">
                    <div class="flex items-center">
                      <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span class="truncate">17 - 30 Years old</span>{" "}
                      <span class="font-medium ml-auto">62%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                      <span class="truncate">31 - 50 Years old</span>{" "}
                      <span class="font-medium ml-auto">33%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                      <span class="truncate">&gt;= 50 Years old</span>{" "}
                      <span class="font-medium ml-auto">10%</span>
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
