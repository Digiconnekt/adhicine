import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";
import { NavLink, Navigate, useParams } from "react-router-dom";
import useResetPassword from "../../apis/reset-password";

function Main() {
  const user = useSelector((state) => state.auth.user);
  if (user) {
    return <Navigate to="/" />;
  }

  const { token } = useParams();
  const { error, isLoading, resetPasswordReq } = useResetPassword();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    token,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    resetPasswordReq(formData);
  };

  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            <div className="flex-col hidden min-h-screen xl:flex">
              <NavLink to="/login" className="flex items-center pt-5 -intro-x">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="ml-3 text-lg text-white"> Adhicine </span>
              </NavLink>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
              </div>
            </div>
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  Reset Password
                </h2>
                <div className="mt-8 intro-x">
                  <FormInput
                    type="text"
                    className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                    error={
                      error?.errors?.email ? error?.errors?.email[0] : undefined
                    }
                  />
                  <FormInput
                    type="password"
                    className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={onChangeHandler}
                    error={
                      error?.errors?.password
                        ? error?.errors?.password[0]
                        : undefined
                    }
                  />
                  <FormInput
                    type="password"
                    className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={onChangeHandler}
                    error={
                      error?.errors?.password_confirmation
                        ? error?.errors?.password_confirmation[0]
                        : undefined
                    }
                  />
                </div>
                <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                  <Button
                    variant="primary"
                    className="w-full px-4 py-3 align-top"
                    onClick={submitHandler}
                    disabled={isLoading}
                  >
                    Reset Password
                    {isLoading && (
                      <LoadingIcon
                        icon="oval"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
