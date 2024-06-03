import { useState } from "react";
import useLogout from "../../apis/logout";
import useVerifyOtp from "../../apis/otp/verify";
import useResendOtp from "../../apis/otp/resend";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { FormInput } from "../../base-components/Form";

const OtpVerification = () => {
  const { isLoading: isLoadingLogout, logoutReq } = useLogout();
  const { isLoading: isLoadingVerifyOtp, verifyOtpReq } = useVerifyOtp();
  const { isLoading: isLoadingResendOtp, resendOtpReq } = useResendOtp();

  const [otp, setOtp] = useState("");

  const onChangeHandler = (e) => {
    setOtp(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    verifyOtpReq({ otp });
    console.log("otp: ", otp);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-semibold">
          Please verify your OTP first to proceed
        </h1>

        <form className="mt-5" onSubmit={submitHandler}>
          <FormInput
            type="number"
            className="block px-4 py-3 w-60"
            placeholder="Enter OTP"
            name="otp"
            value={otp}
            onChange={onChangeHandler}
          />

          <div className="flex flex-col">
            <Button
              type="submit"
              variant="primary"
              className="w-60 px-4 py-3 align-top border-gray-300 mt-5"
              disabled={isLoadingVerifyOtp}
            >
              Verify
              {isLoadingVerifyOtp && (
                <LoadingIcon
                  icon="oval"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-60 px-4 py-3 align-top border-gray-300 mt-3"
              onClick={() => resendOtpReq()}
              disabled={isLoadingResendOtp}
            >
              Resend
              {isLoadingResendOtp && (
                <LoadingIcon
                  icon="oval"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </Button>
          </div>
        </form>

        {/* <Button
          type="button"
          variant="outline"
          className="w-60 px-4 py-3 align-top border-none mt-5"
          onClick={() => logoutReq()}
          disabled={isLoadingLogout}
        >
          Logout
          {isLoadingLogout && (
            <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2" />
          )}
        </Button> */}
      </div>
    </>
  );
};

export default OtpVerification;
