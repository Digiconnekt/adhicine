import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../provider";

const Settings = () => {
  const user = useContext(AppContext);
  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  const [updateData, setUpdateData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setUpdateData(() => ({ ...updateData, [handlerName]: handlerValue }));
  };

  const sendUpdateDataToAPI = async (payload) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + `users?device_name=web`,
        payload,
        header
      );
      toast.success("Updated Successfully");

      const updatedName = res.data.data.name;
      localStorage.setItem("name", updatedName);

      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);

      console.log(error);
    }
  };

  const submitUpdateData = () => {
    sendUpdateDataToAPI({ name: updateData.name });

    console.log(updateData);
  };

  const submitUpdatePasswordData = () => {
    sendUpdateDataToAPI({
      current_password: updateData.currentPassword,
      password: updateData.newPassword,
      password_confirmation: updateData.confirmNewPassword,
    });

    console.log(updateData);
  };

  return (
    <>
      <div className="content">
        <div className="intro-y flex items-center mt-8">
          <h2 className="text-lg font-medium mr-auto">Account</h2>
        </div>

        <div className="intro-y box px-5 pt-5 mt-5">
          <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                <img
                  alt="Midone - HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-5.jpg"
                />
              </div>
              <div className="ml-5">
                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                  {user.name}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-2">
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
                    icon-name="mail"
                    data-lucide="mail"
                    className="lucide lucide-mail w-4 h-4 mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-y box mt-5">
          <div id="boxed-tab" className="p-5">
            <div className="preview">
              <ul className="nav nav-boxed-tabs" role="tablist">
                <li
                  id="example-3-tab"
                  className="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    className="nav-link w-full py-2 active flex justify-center	items-center"
                    data-tw-toggle="pill"
                    data-tw-target="#example-tab-3"
                    type="button"
                    role="tab"
                    aria-controls="example-tab-3"
                    aria-selected="true"
                  >
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
                      icon-name="shield"
                      className="lucide lucide-shield w-4 h-4 mr-2"
                      data-lucide="shield"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Update Account
                  </button>
                </li>
                <li
                  id="example-4-tab"
                  className="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    className="nav-link w-full py-2 flex justify-center	items-center"
                    data-tw-toggle="pill"
                    data-tw-target="#example-tab-4"
                    type="button"
                    role="tab"
                    aria-controls="example-tab-4"
                    aria-selected="false"
                  >
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
                      icon-name="lock"
                      className="lucide lucide-lock w-4 h-4 mr-2"
                      data-lucide="lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0110 0v4"></path>
                    </svg>
                    Change Password
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-5">
                <div
                  id="example-tab-3"
                  className="tab-pane leading-relaxed active"
                  role="tabpanel"
                  aria-labelledby="example-3-tab"
                >
                  <div className="intro-y box lg:mt-5">
                    <div className="p-5">
                      <div className="flex flex-col-reverse xl:flex-row flex-col">
                        <div className="flex-1 mt-6 xl:mt-0">
                          <div className="grid grid-cols-12 gap-x-5">
                            <div className="col-span-12 2xl:col-span-6">
                              <div>
                                <label
                                  htmlFor="update-profile-form-1"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Name"
                                  name="name"
                                  value={updateData.name}
                                  onChange={onChangeHandler}
                                />
                              </div>
                              <div className="mt-3">
                                <label
                                  htmlFor="update-profile-form-4"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Phone Number"
                                  name="phone"
                                  value={updateData.phone}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6">
                              <div className="">
                                <label
                                  htmlFor="update-profile-form-4"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Email"
                                  name="email"
                                  value={updateData.email}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary w-20 mt-5"
                            onClick={submitUpdateData}
                          >
                            Update
                          </button>
                        </div>
                        {/* <div className="w-52 mx-auto xl:mr-0 xl:ml-6">
                          <div className="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                            <div className="h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                              <img
                                className="rounded-md"
                                alt="Midone - HTML Admin Template"
                                src="dist/images/profile-10.jpg"
                              />
                              <div className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2">
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
                                  icon-name="x"
                                  data-lucide="x"
                                  className="lucide lucide-x w-4 h-4"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </div>
                            </div>
                            <div className="mx-auto cursor-pointer relative mt-5">
                              <button
                                type="button"
                                className="btn btn-primary w-full"
                              >
                                Choose Photo
                              </button>
                              <input
                                type="file"
                                className="w-full h-full top-0 left-0 absolute opacity-0"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="example-tab-4"
                  className="tab-pane leading-relaxed"
                  role="tabpanel"
                  aria-labelledby="example-4-tab"
                >
                  <div className="intro-y box lg:mt-5">
                    <div className="p-5">
                      <div>
                        <label
                          htmlFor="change-password-form-1"
                          className="form-label"
                        >
                          Current Password
                        </label>
                        <input
                          id="change-password-form-1"
                          type="password"
                          className="form-control"
                          placeholder="Current Password"
                          name="currentPassword"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mt-3">
                        <label
                          htmlFor="change-password-form-2"
                          className="form-label"
                        >
                          New Password
                        </label>
                        <input
                          id="change-password-form-2"
                          type="password"
                          className="form-control"
                          placeholder="New Password"
                          name="newPassword"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mt-3">
                        <label
                          htmlFor="change-password-form-3"
                          className="form-label"
                        >
                          Confirm New Password
                        </label>
                        <input
                          id="change-password-form-3"
                          type="password"
                          className="form-control"
                          placeholder="Confirm New Password"
                          name="confirmNewPassword"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary mt-4"
                        onClick={submitUpdatePasswordData}
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
