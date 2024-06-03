import { useState, useEffect } from "react";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";

const AddOrEditHospital = ({
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
    phone: "",
    location: "",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        email: inputData?.email || "",
        phone: inputData?.phone || "",
        location: inputData?.location || "",
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
          placeholder="Hospital"
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
          placeholder="hospital@gmail.com"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          error={error?.email ? error?.email[0] : undefined}
          disabled
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="phone">Contact *</FormLabel>
        <FormInput
          id="phone"
          type="number"
          className="w-full"
          placeholder="9856985969"
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          error={error?.phone ? error?.phone[0] : undefined}
          disabled
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

export default AddOrEditHospital;
