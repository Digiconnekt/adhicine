import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AxiosPost } from "../API";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  userType: "doctor",
  agree: "",
};

const SignUp = () => {
  const navigate = useNavigate();

  // form validation start
  const signUpSchema = Yup.object({
    fullName: Yup.string()
      .min(2)
      .max(20)
      .required("Please enter your Full Name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(6).required("Please enter your Password"),
    confirmPassword: Yup.string()
      .required("Please enter your Confirm Password")
      .oneOf([Yup.ref("password"), null], "Password must be match"),
  });
  // form validation end

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values̥, action) => {
        AxiosPost("register", {
          name: values.fullName,
          email: values.email,
          password: values.password,
          device_name: "web",
          role: values.userType,
        });

        console.log("🚀 ~ file: SignUp.jsx:24 ~ SignUp ~ values̥", values̥);
        // action.resetForm();
      },
    });
  // console.log(errors);

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
                  Sign Up
                </h2>
                <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fullName && touched.fullName ? (
                    <p className="form-error">{errors.fullName}</p>
                  ) : null}

                  {/* <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="form-error">{errors.lastName}</p>
                  ) : null} */}

                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}

                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}

                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="form-error">{errors.confirmPassword}</p>
                  ) : null}

                  <select
                    className="form-control py-3 px-4 mt-4 form-select"
                    name="userType"
                    value={values.userType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="doctor">Doctor</option>
                    <option value="hospital">Hospital</option>
                  </select>
                </div>
                {/* <div className="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="form-check-input border mr-2"
                    name="agree"
                    value={values.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    I agree to the Adhicine
                  </label>
                  <a className="text-primary dark:text-slate-200 ml-1" href="">
                    Privacy Policy
                  </a>
                  .
                </div> */}
                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => navigate("/sign-in")}
                    className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top"
                  >
                    Sign In
                  </button>
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

export default SignUp;
