import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="content">
        <div className="intro-y box px-5 pt-5 mt-5 bg-primary">
          <div className=" border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div className="px-5 items-center justify-center lg:justify-start">
              <div
                className="ml-5"
                style={{ color: "rgb(255 255 255 / var(--tw-text-opacity))" }}
              >
                <div className="truncate sm:whitespace-normal font-medium text-lg">
                  Good afternoon, Olivia Leh.
                </div>
                <div className="text">
                  Here is what’s happening with your Dashboard today:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 mt-8">
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
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
                            icon-name="shopping-cart"
                            data-lucide="shopping-cart"
                            className="lucide lucide-shopping-cart report-box__icon text-primary"
                          >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
                          </svg>
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          23
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Hospitals
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
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
                            icon-name="credit-card"
                            data-lucide="credit-card"
                            className="lucide lucide-credit-card report-box__icon text-pending"
                          >
                            <rect
                              x="1"
                              y="4"
                              width="22"
                              height="16"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                          </svg>
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          25
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Doctors
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
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
                            icon-name="monitor"
                            data-lucide="monitor"
                            className="lucide lucide-monitor report-box__icon text-warning"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          33
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Patients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 mt-6">
                <div className="intro-y block sm:flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    Hospital
                  </h2>
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                  <table className="table table-report sm:mt-2">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap">IMAGES</th>
                        <th className="whitespace-nowrap">PRODUCT NAME</th>
                        <th className="text-center whitespace-nowrap">STOCK</th>
                        <th className="text-center whitespace-nowrap">
                          STATUS
                        </th>
                        <th className="text-center whitespace-nowrap">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="intro-x">
                        <td className="w-40">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-14.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-10.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-12.jpg"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="" className="font-medium whitespace-nowrap">
                            Nike Tanjun
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Sport &amp; Outdoor
                          </div>
                        </td>
                        <td className="text-center">177</td>
                        <td className="w-40">
                          <div className="flex items-center justify-center text-danger">
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
                              icon-name="check-square"
                              data-lucide="check-square"
                              className="lucide lucide-check-square w-4 h-4 mr-2"
                            >
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                            </svg>
                            Inactive
                          </div>
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <a className="flex items-center mr-3" href="">
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
                                icon-name="check-square"
                                data-lucide="check-square"
                                className="lucide lucide-check-square w-4 h-4 mr-1"
                              >
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                              </svg>
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
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
                                icon-name="trash-2"
                                data-lucide="trash-2"
                                className="lucide lucide-trash-2 w-4 h-4 mr-1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="intro-x">
                        <td className="w-40">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-15.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-12.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-14.jpg"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="" className="font-medium whitespace-nowrap">
                            Samsung Galaxy S20 Ultra
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Smartphone &amp; Tablet
                          </div>
                        </td>
                        <td className="text-center">50</td>
                        <td className="w-40">
                          <div className="flex items-center justify-center text-danger">
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
                              icon-name="check-square"
                              data-lucide="check-square"
                              className="lucide lucide-check-square w-4 h-4 mr-2"
                            >
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                            </svg>
                            Inactive
                          </div>
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <a className="flex items-center mr-3" href="">
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
                                icon-name="check-square"
                                data-lucide="check-square"
                                className="lucide lucide-check-square w-4 h-4 mr-1"
                              >
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                              </svg>
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
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
                                icon-name="trash-2"
                                data-lucide="trash-2"
                                className="lucide lucide-trash-2 w-4 h-4 mr-1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="intro-x">
                        <td className="w-40">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-5.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-6.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-6.jpg"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="" className="font-medium whitespace-nowrap">
                            Nike Air Max 270
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Sport &amp; Outdoor
                          </div>
                        </td>
                        <td className="text-center">188</td>
                        <td className="w-40">
                          <div className="flex items-center justify-center text-danger">
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
                              icon-name="check-square"
                              data-lucide="check-square"
                              className="lucide lucide-check-square w-4 h-4 mr-2"
                            >
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                            </svg>
                            Inactive
                          </div>
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <a className="flex items-center mr-3" href="">
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
                                icon-name="check-square"
                                data-lucide="check-square"
                                className="lucide lucide-check-square w-4 h-4 mr-1"
                              >
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                              </svg>
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
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
                                icon-name="trash-2"
                                data-lucide="trash-2"
                                className="lucide lucide-trash-2 w-4 h-4 mr-1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="intro-x">
                        <td className="w-40">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-12.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-8.jpg"
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="tooltip rounded-full"
                                src="dist/images/preview-14.jpg"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="" className="font-medium whitespace-nowrap">
                            Sony A7 III
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Photography
                          </div>
                        </td>
                        <td className="text-center">50</td>
                        <td className="w-40">
                          <div className="flex items-center justify-center text-danger">
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
                              icon-name="check-square"
                              data-lucide="check-square"
                              className="lucide lucide-check-square w-4 h-4 mr-2"
                            >
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                            </svg>
                            Inactive
                          </div>
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <a className="flex items-center mr-3" href="">
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
                                icon-name="check-square"
                                data-lucide="check-square"
                                className="lucide lucide-check-square w-4 h-4 mr-1"
                              >
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                              </svg>
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
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
                                icon-name="trash-2"
                                data-lucide="trash-2"
                                className="lucide lucide-trash-2 w-4 h-4 mr-1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 2xl:col-span-3">
            <div className="2xl:border-l -mb-10 pb-10">
              <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Transactions
                    </h2>
                  </div>
                  <div className="mt-5">
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-5.jpg"
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Leonardo DiCaprio</div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            15 August 2022
                          </div>
                        </div>
                        <div className="text-danger">-$44</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-9.jpg"
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Kate Winslet</div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            25 August 2020
                          </div>
                        </div>
                        <div className="text-danger">-$65</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-11.jpg"
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Hugh Jackman</div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            10 April 2021
                          </div>
                        </div>
                        <div className="text-danger">-$63</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-8.jpg"
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Johnny Depp</div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            10 September 2020
                          </div>
                        </div>
                        <div className="text-danger">-$199</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-9.jpg"
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Brad Pitt</div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            20 August 2022
                          </div>
                        </div>
                        <div className="text-success">+$42</div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                    >
                      View More
                    </a>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Recent Activities
                    </h2>
                    <a href="" className="ml-auto text-primary truncate">
                      Show More
                    </a>
                  </div>
                  <div className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-1.jpg"
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Christian Bale</div>
                          <div className="text-xs text-slate-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-slate-500 mt-1">
                          Has joined the team
                        </div>
                      </div>
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-6.jpg"
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Denzel Washington</div>
                          <div className="text-xs text-slate-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-slate-500">
                          <div className="mt-1">Added 3 new photos</div>
                          <div className="flex mt-2">
                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-md border border-white"
                                src="dist/images/preview-14.jpg"
                              />
                            </div>
                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-md border border-white"
                                src="dist/images/preview-7.jpg"
                              />
                            </div>
                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in">
                              <img
                                alt="Midone - HTML Admin Template"
                                className="rounded-md border border-white"
                                src="dist/images/preview-10.jpg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro-x text-slate-500 text-xs text-center my-4">
                      12 November
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-2.jpg"
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Johnny Depp</div>
                          <div className="text-xs text-slate-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-slate-500 mt-1">
                          Has changed
                          <a className="text-primary" href="">
                            Dell XPS 13
                          </a>
                          price and description
                        </div>
                      </div>
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone - HTML Admin Template"
                            src="dist/images/profile-3.jpg"
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Johnny Depp</div>
                          <div className="text-xs text-slate-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-slate-500 mt-1">
                          Has changed
                          <a className="text-primary" href="">
                            Samsung Q90 QLED TV
                          </a>
                          description
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-auto">
                      Important Notes
                    </h2>
                    <button
                      data-carousel="important-notes"
                      data-target="prev"
                      className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    >
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
                        icon-name="chevron-left"
                        data-lucide="chevron-left"
                        className="lucide lucide-chevron-left w-4 h-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button
                      data-carousel="important-notes"
                      data-target="next"
                      className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    >
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
                        icon-name="chevron-right"
                        data-lucide="chevron-right"
                        className="lucide lucide-chevron-right w-4 h-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-5 intro-x">
                    <div className="box zoom-in">
                      <div className="tns-outer" id="important-notes-ow">
                        <button type="button" data-action="stop">
                          <span className="tns-visually-hidden">
                            stop animation
                          </span>
                          stop
                        </button>
                        <div
                          className="tns-liveregion tns-visually-hidden"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          slide <span className="current">3</span> of 3
                        </div>
                        <div id="important-notes-mw" className="tns-ovh">
                          <div className="tns-inner" id="important-notes-iw">
                            <div
                              className="tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                              id="important-notes"
                              style={{
                                transform: "translate3d(-40%, 0px, 0px)",
                              }}
                            >
                              <div
                                className="p-5 tns-item tns-slide-cloned"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                <div className="text-base font-medium truncate">
                                  Lorem Ipsum is simply dummy text
                                </div>
                                <div className="text-slate-400 mt-1">
                                  20 Hours ago
                                </div>
                                <div className="text-slate-500 text-justify mt-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </div>
                                <div className="font-medium flex mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-secondary py-1 px-2"
                                  >
                                    View Notes
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                              <div
                                className="p-5 tns-item"
                                id="important-notes-item0"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                <div className="text-base font-medium truncate">
                                  Lorem Ipsum is simply dummy text
                                </div>
                                <div className="text-slate-400 mt-1">
                                  20 Hours ago
                                </div>
                                <div className="text-slate-500 text-justify mt-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </div>
                                <div className="font-medium flex mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-secondary py-1 px-2"
                                  >
                                    View Notes
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                              <div
                                className="p-5 tns-item tns-slide-active"
                                id="important-notes-item1"
                              >
                                <div className="text-base font-medium truncate">
                                  Lorem Ipsum is simply dummy text
                                </div>
                                <div className="text-slate-400 mt-1">
                                  20 Hours ago
                                </div>
                                <div className="text-slate-500 text-justify mt-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </div>
                                <div className="font-medium flex mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-secondary py-1 px-2"
                                  >
                                    View Notes
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                              <div
                                className="p-5 tns-item"
                                id="important-notes-item2"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                <div className="text-base font-medium truncate">
                                  Lorem Ipsum is simply dummy text
                                </div>
                                <div className="text-slate-400 mt-1">
                                  20 Hours ago
                                </div>
                                <div className="text-slate-500 text-justify mt-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </div>
                                <div className="font-medium flex mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-secondary py-1 px-2"
                                  >
                                    View Notes
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                              <div
                                className="p-5 tns-item tns-slide-cloned"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                <div className="text-base font-medium truncate">
                                  Lorem Ipsum is simply dummy text
                                </div>
                                <div className="text-slate-400 mt-1">
                                  20 Hours ago
                                </div>
                                <div className="text-slate-500 text-justify mt-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s.
                                </div>
                                <div className="font-medium flex mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-secondary py-1 px-2"
                                  >
                                    View Notes
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto mt-3">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Schedules
                    </h2>
                    <a
                      href=""
                      className="ml-auto text-primary truncate flex items-center"
                    >
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
                        icon-name="plus"
                        data-lucide="plus"
                        className="lucide lucide-plus w-4 h-4 mr-1"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add New Schedules
                    </a>
                  </div>
                  <div className="mt-5">
                    <div className="intro-x box">
                      <div className="p-5">
                        <div className="flex">
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
                            icon-name="chevron-left"
                            data-lucide="chevron-left"
                            className="lucide lucide-chevron-left w-5 h-5 text-slate-500"
                          >
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          <div className="font-medium text-base mx-auto">
                            April
                          </div>
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
                            icon-name="chevron-right"
                            data-lucide="chevron-right"
                            className="lucide lucide-chevron-right w-5 h-5 text-slate-500"
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                        <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                          <div className="font-medium">Su</div>
                          <div className="font-medium">Mo</div>
                          <div className="font-medium">Tu</div>
                          <div className="font-medium">We</div>
                          <div className="font-medium">Th</div>
                          <div className="font-medium">Fr</div>
                          <div className="font-medium">Sa</div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            29
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            30
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            31
                          </div>
                          <div className="py-0.5 rounded relative">1</div>
                          <div className="py-0.5 rounded relative">2</div>
                          <div className="py-0.5 rounded relative">3</div>
                          <div className="py-0.5 rounded relative">4</div>
                          <div className="py-0.5 rounded relative">5</div>
                          <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
                            6
                          </div>
                          <div className="py-0.5 rounded relative">7</div>
                          <div className="py-0.5 bg-primary text-white rounded relative">
                            8
                          </div>
                          <div className="py-0.5 rounded relative">9</div>
                          <div className="py-0.5 rounded relative">10</div>
                          <div className="py-0.5 rounded relative">11</div>
                          <div className="py-0.5 rounded relative">12</div>
                          <div className="py-0.5 rounded relative">13</div>
                          <div className="py-0.5 rounded relative">14</div>
                          <div className="py-0.5 rounded relative">15</div>
                          <div className="py-0.5 rounded relative">16</div>
                          <div className="py-0.5 rounded relative">17</div>
                          <div className="py-0.5 rounded relative">18</div>
                          <div className="py-0.5 rounded relative">19</div>
                          <div className="py-0.5 rounded relative">20</div>
                          <div className="py-0.5 rounded relative">21</div>
                          <div className="py-0.5 rounded relative">22</div>
                          <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
                            23
                          </div>
                          <div className="py-0.5 rounded relative">24</div>
                          <div className="py-0.5 rounded relative">25</div>
                          <div className="py-0.5 rounded relative">26</div>
                          <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
                            27
                          </div>
                          <div className="py-0.5 rounded relative">28</div>
                          <div className="py-0.5 rounded relative">29</div>
                          <div className="py-0.5 rounded relative">30</div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            1
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            2
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            3
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            4
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            5
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            6
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            7
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            8
                          </div>
                          <div className="py-0.5 rounded relative text-slate-500">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-slate-200/60 p-5">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                          <span className="truncate">UI/UX Workshop</span>
                          <span className="font-medium xl:ml-auto">23th</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="truncate">
                            VueJs Frontend Development
                          </span>
                          <span className="font-medium xl:ml-auto">10th</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                          <span className="truncate">Laravel Rest API</span>
                          <span className="font-medium xl:ml-auto">31th</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
