import axios from "axios";
import { toast } from "react-toastify";

export const AxiosPost = (url, data) => {
  axios
    .post(process.env.REACT_APP_BASE_URL + url, data)
    .then((res) => {
      toast.success("Successfull");

      const userData = {
        name: res.data.data.name,
        email: res.data.data.email,
        accessToken: res.data.data.accessToken,
        profilePhotoUrl: res.data.data.profilePhotoUrl,
      };

      if (userData.accessToken) {
        localStorage.setItem("name", userData.name);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("accessToken", userData.accessToken);
        localStorage.setItem("profilePhotoUrl", userData.profilePhotoUrl);
        // window.location.href = "/";
      }
      console.log(res);
    })
    .catch((err) => {
      const apiErrors = err.response.data.errors;
      console.log("🚀 ~ file: API.js:13 ~ AxiosPost ~ err", err);

      if (apiErrors) {
        apiErrors.name && apiErrors.name.map((elem) => toast.error(elem));
        apiErrors.email && apiErrors.email.map((elem) => toast.error(elem));
        apiErrors.password &&
          apiErrors.password.map((elem) => toast.error(elem));
      }
    });
};

export const AxiosGet = (url, headers) => {
  axios
    .get(process.env.REACT_APP_BASE_URL + url, headers)
    .then((res) => {
      console.log(res.data.data);
      // console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
