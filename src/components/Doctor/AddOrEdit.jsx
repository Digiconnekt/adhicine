import { useState, useEffect } from "react";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";

const AddOrEditDoctor = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
  setModalOpen,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    password: "",
    status: "1",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        email: inputData?.email || "",
        contact: inputData?.contact || "",
        location: inputData?.location || "",
        password: inputData?.password || "",
        status: inputData?.status || "",
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
    type === "add" ? submitReq(formData) : submitReq(inputData?.id, formData);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      <div>
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
        <FormLabel htmlFor="contact">Contact *</FormLabel>
        <FormInput
          id="contact"
          type="number"
          className="w-full"
          placeholder="9856985969"
          name="contact"
          value={formData.contact}
          onChange={onChangeHandler}
          error={error?.contact ? error?.contact[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="location">Location *</FormLabel>
        <FormInput
          id="location"
          type="text"
          className="w-full"
          placeholder="Mumbai"
          name="location"
          value={formData.location}
          onChange={onChangeHandler}
          error={error?.location ? error?.location[0] : undefined}
        />
      </div>
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
      <div className="mt-3">
        <label>Active Status *</label>
        <FormSelect
          className="mt-2 sm:mr-2"
          name="status"
          value={formData.status}
          onChange={onChangeHandler}
        >
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </FormSelect>
      </div>
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
