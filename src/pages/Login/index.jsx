import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useLogin from "../../apis/login";
import { useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";
import { NavLink, Navigate } from "react-router-dom";

function Main() {
  const token = useSelector((state) => state?.authToken?.token);
  const { error, isLoading, loginReq } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    device_name: "web",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signInHandler = (e) => {
    e.preventDefault();
    loginReq(formData);
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="h-screen relative bg-white">
        {/* BEGIN: Login Form */}
        <div className="container h-full z-50">
          <div className="max-w-md h-full flex flex-col justify-center px-8">
            <img
              src="../../../images/logo-with-name.png"
              alt="Adhicine"
              className="max-w-40 mx-auto mb-5"
            />
            <h2 className="text-3xl font-bold text-center intro-x">Sign In</h2>
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
            </div>
            <div className="flex justify-end mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                className="w-full px-4 py-3 align-top"
                onClick={signInHandler}
                disabled={isLoading}
              >
                Login
                {isLoading && (
                  <LoadingIcon
                    icon="oval"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                )}
              </Button>
              {/* <Button
                    variant="outline-secondary"
                    className="w-full px-4 py-3 mt-3 align-top"
                  >
                    Register
                  </Button> */}
            </div>
          </div>
        </div>
        {/* END: Login Form */}

        <div className="absolute bottom-0 right-0 top-0 opacity-40 lg:opacity-100">
          <img
            src="../../../images/doctor-half-login.png"
            alt="Login"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
