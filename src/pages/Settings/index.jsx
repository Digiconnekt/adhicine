import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import { FormInput, FormLabel } from "../../base-components/Form";
import useProfileUpdate from "../../apis/profile/Update";
import useProfileShow from "../../apis/profile/show";
import LoadingIcon from "../../base-components/LoadingIcon";
import toast from "react-hot-toast";

const Settings = () => {
  const {
    data: dataProfileShow,
    error: errorProfileShow,
    isLoading: isLoadingProfileShow,
    profileShowReq,
  } = useProfileShow();
  const {
    data: dataProfileUpdate,
    error: errorProfileUpdate,
    isLoading: isLoadingProfileUpdate,
    profileUpdateReq,
  } = useProfileUpdate();

  useEffect(() => {
    profileShowReq();
  }, [dataProfileUpdate]);

  const [profileFormData, setProfileFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device_name: "web",
  });
  const [passwordFormData, setPasswordFormData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
    device_name: "web",
  });

  useEffect(() => {
    if (dataProfileShow) {
      setProfileFormData({
        name: dataProfileShow?.name ?? "",
        email: dataProfileShow?.email ?? "",
        phone: dataProfileShow?.phone ?? "",
        device_name: "web",
      });
    }
  }, [dataProfileShow]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProfileFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setPasswordFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitProfileHandler = (e) => {
    e.preventDefault();
    profileUpdateReq(profileFormData);
  };

  const submitPasswordHandler = (e) => {
    e.preventDefault();
    if (
      !passwordFormData.current_password ||
      !passwordFormData.password ||
      !passwordFormData.password_confirmation
    ) {
      return toast.error("Please enter all fields");
    }
    profileUpdateReq(passwordFormData);
  };

  console.log("dataProfileUpdate: ", dataProfileUpdate);

  if (isLoadingProfileShow) {
    return <p>loading...</p>;
  }

  if (errorProfileShow) {
    return <p>failed to load</p>;
  }

  return (
    <>
      <Tab.Group>
        <div className="px-5 pt-5 mt-5 intro-y box">
          <div className="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center justify-center flex-1 px-5 lg:justify-start">
              <div className="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={dataProfileShow?.profilePhotoUrl}
                />
              </div>
              <div className="ml-5">
                <div className="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                  {dataProfileShow?.name ?? "-"}
                </div>
                <div className="text-slate-500 mt-2">
                  <b>Role: </b>
                  <span className="uppercase">{dataProfileShow?.role}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col items-center justify-center mt-4 lg:items-start">
                <div className="flex items-center truncate sm:whitespace-normal">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {dataProfileShow?.email ?? "-"}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  <Lucide icon="Phone" className="w-4 h-4 mr-2" />
                  {dataProfileShow?.phone ?? "-"}
                </div>
              </div>
            </div>
          </div>

          <Tab.List
            variant="link-tabs"
            className="flex-col justify-center text-center sm:flex-row lg:justify-start"
          >
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </Tab.Button>
            </Tab>
          </Tab.List>
        </div>

        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <div className="box intro-y px-5 py-5 border-b sm:py-3 border-slate-200/60">
              <h2 className="mr-auto text-base font-medium mb-5 pb-3 border-b">
                Update Profile
              </h2>

              <form onSubmit={submitProfileHandler}>
                <div>
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <FormInput
                    id="name"
                    type="text"
                    className="w-full"
                    placeholder="John Doe"
                    name="name"
                    value={profileFormData.name}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.name
                        ? errorProfileUpdate?.name[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <FormInput
                    id="email"
                    type="email"
                    className="w-full"
                    placeholder="doctor@gmail.com"
                    name="email"
                    value={profileFormData.email}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.email
                        ? errorProfileUpdate?.email[0]
                        : undefined
                    }
                    disabled
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <FormInput
                    id="phone"
                    type="number"
                    className="w-full"
                    placeholder="9856985969"
                    name="phone"
                    value={profileFormData.phone}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.phone
                        ? errorProfileUpdate?.phone[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-5">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-24 sm:w-40"
                    disabled={isLoadingProfileUpdate}
                  >
                    Update
                    {isLoadingProfileUpdate && (
                      <LoadingIcon
                        icon="oval"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="box intro-y px-5 py-5 border-b sm:py-3 border-slate-200/60">
              <h2 className="mr-auto text-base font-medium mb-5 pb-3 border-b">
                Change Password
              </h2>

              <form onSubmit={submitPasswordHandler}>
                <div>
                  <FormLabel htmlFor="current-password">
                    Current Password *
                  </FormLabel>
                  <FormInput
                    id="current-password"
                    type="text"
                    className="w-full"
                    placeholder="********"
                    name="current_password"
                    value={passwordFormData.current_password}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.current_password
                        ? errorProfileUpdate?.current_password[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="password">New Password *</FormLabel>
                  <FormInput
                    id="password"
                    type="text"
                    className="w-full"
                    placeholder="********"
                    name="password"
                    value={passwordFormData.password}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.password
                        ? errorProfileUpdate?.password[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="password-confirmation">
                    Confirm New Password *
                  </FormLabel>
                  <FormInput
                    id="password-confirmation"
                    type="text"
                    className="w-full"
                    placeholder="********"
                    name="password_confirmation"
                    value={passwordFormData.password_confirmation}
                    onChange={onChangeHandler}
                    error={
                      errorProfileUpdate?.password_confirmation
                        ? errorProfileUpdate?.password_confirmation[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-5">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-24 sm:w-40"
                    disabled={isLoadingProfileUpdate}
                  >
                    Change Password
                    {isLoadingProfileUpdate && (
                      <LoadingIcon
                        icon="oval"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Settings;
