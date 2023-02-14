import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../provider";

const Add = () => {
  const user = useContext(AppContext);
  const { type } = useParams();
  const header = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };

  const [request, setRequest] = useState({
    email: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setRequest(() => ({
      ...request,
      [handlerName]: handlerValue,
    }));
  };

  const sendDataToAPI = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + `invite/${type}?device_name=web`,
        request,
        header
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const submitRequestData = () => {
    sendDataToAPI();

    console.log(request);
  };

  return (
    <>
      <div className="content">
        <div className="intro-y flex items-center mt-8">
          <h2 className="text-lg font-medium mr-auto">
            Add a <span className="capitalize">{type}</span>
          </h2>
        </div>

        {/* form start */}
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="intro-y col-span-12 lg:col-span-6">
            <div className="intro-y box p-5">
              {/* <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <input
                  id="crud-form-1"
                  type="text"
                  className="form-control w-full pl-10"
                  placeholder={`${type} name`}
                />
              </div> */}
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>

                <input
                  id="crud-form-1"
                  type="text"
                  className="form-control w-full pl-10"
                  placeholder="email"
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="text-right mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-34"
                  onClick={submitRequestData}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* form end */}
      </div>
    </>
  );
};

export default Add;
