import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { FormInput, FormLabel } from "../../base-components/Form";
import TomSelect from "../../base-components/TomSelect";
import useAllHospitals from "../../apis/hospital/hospitals";

const AddOrEditDoctor = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
  setModalOpen,
  selectedId,
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.authUser?.user);

  const [selectedHospital, setSelectedHospital] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "doctor",
    device_name: "web",
  });

  const {
    data: dataAllHospitals,
    error: errorAllHospitals,
    isLoading: isLoadingAllHospitals,
    reFetch: reFetchAllHospitals,
    allHospitalsReq,
  } = useAllHospitals();

  useEffect(() => {
    if (type === "add") {
      allHospitalsReq();
    }
  }, []);

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        email: inputData?.email || "",
        phone: inputData?.phone || "",
        password: inputData?.password || "",
      }));
    }
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    type === "add"
      ? submitReq({ ...formData, hospital_id: selectedHospital })
      : submitReq(selectedId, {
          ...formData,
          hospital_id: selectedHospital,
        });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      {type === "add" &&
        (isLoadingAllHospitals ? (
          <p>loading hospitals...</p>
        ) : errorAllHospitals ? (
          <p>failed to load hospitals</p>
        ) : (
          <div>
            <FormLabel htmlFor="hospital_id">Select Hospital *</FormLabel>
            <TomSelect
              value={selectedHospital}
              onChange={setSelectedHospital}
              options={{
                placeholder: "Select Hospital",
              }}
              className="w-full"
              error={error?.hospital_id ? error?.hospital_id[0] : undefined}
            >
              {dataAllHospitals?.map((hospital, i) => (
                <option value={hospital?.id} key={i}>
                  {hospital?.name}
                </option>
              ))}
            </TomSelect>
          </div>
        ))}

      <div className="mt-3">
        <FormLabel htmlFor="name">Name *</FormLabel>
        <FormInput
          id="name"
          type="text"
          className="w-full"
          placeholder="John Doe"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          error={error?.name ? error?.name[0] : undefined}
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
          value={formData.email}
          onChange={onChangeHandler}
          error={error?.email ? error?.email[0] : undefined}
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
          value={formData.phone}
          onChange={onChangeHandler}
          error={error?.phone ? error?.phone[0] : undefined}
        />
      </div>
      {type === "add" && (
        <div className="mt-3">
          <FormLabel htmlFor="password">Password *</FormLabel>
          <FormInput
            id="password"
            type="password"
            className="w-full"
            placeholder="******"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            error={error?.password ? error?.password[0] : undefined}
          />
        </div>
      )}
      <div className="mt-5 text-right">
        {type === "edit" && (
          <Button
            type="button"
            variant="outline-secondary"
            className="w-24 mr-1"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
        )}
        <Button
          type="button"
          variant="primary"
          className="w-24"
          onClick={submitHandler}
          disabled={isLoading}
        >
          {type === "add" ? "Create" : "Update"}
          {isLoading && (
            <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2" />
          )}
        </Button>
      </div>
    </>
  );
};

export default AddOrEditDoctor;
