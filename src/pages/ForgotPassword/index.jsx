import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";
import { NavLink, Navigate } from "react-router-dom";
import useForgotPassword from "../../apis/forgot-password";

function Main() {
  const token = useSelector((state) => state?.authToken?.token);
  if (token) {
    return <Navigate to="/" />;
  }

  const { error, isLoading, forgotPasswordReq } = useForgotPassword();

  const [formData, setFormData] = useState({
    email: "",
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
    forgotPasswordReq(formData);
  };

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

            <h2 className="text-3xl font-bold text-center intro-x">
              Forgot Password
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
            </div>
            <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                className="w-full px-4 py-3 align-top"
                onClick={submitHandler}
                disabled={isLoading}
              >
                Send Reset Link
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
