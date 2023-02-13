import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [forgotPassData, setForgotPassData] = useState({
    email: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setForgotPassData(() => ({
      ...forgotPassData,
      [handlerName]: handlerValue,
    }));
  };

  const sendDataToAPI = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "forgot-password",
        {
          email: forgotPassData.email,
        }
      );
      console.log(res);

      toast.success(res.data.status);
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.email);
    }
  };

  const submitForgotPassData = () => {
    sendDataToAPI();

    console.log(forgotPassData);
  };

  return (
    <>
      <div className="login">
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* left side start */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <a href="/" className="-intro-x flex items-center pt-5">
                <img
                  alt="Midone - HTML Admin Template"
                  className="w-6"
                  src="dist/images/logo.svg"
                />
                <span className="text-white text-lg ml-3">Adhicine</span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone - HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src="dist/images/illustration.svg"
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to
                  <br />
                  sign up to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* left side end */}

            {/* right side start */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Forgot Password?
                </h2>
                <div className="intro-x mt-2 text-slate-400">
                  Forgot your password? No problem. Just let us know your email
                  address and we will email you a password reset link that will
                  allow you to choose a new one.
                </div>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder="Email"
                    name="email"
                    onChange={onChangeHandler}
                  />
                  {/* <p className="form-error">email error</p> */}

                  {/* <p className="form-error">password error</p> */}
                </div>

                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top"
                    onClick={submitForgotPassData}
                  >
                    Email Password Reset Link
                  </button>

                  {/* <button onClick={notify}>Notify!</button> */}
                </div>
              </div>
            </div>
            {/* right side end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
