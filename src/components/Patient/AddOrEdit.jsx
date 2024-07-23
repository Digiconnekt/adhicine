import { useState, useEffect } from "react";
import { FormInput, FormLabel } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddOrEditPatient = ({
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
    email: "",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        email: inputData?.email || "",
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

    if (formData.email === "") {
      return toast.error("Email is required");
    }

    type === "add" ? submitReq(formData) : submitReq(inputData?.id, formData);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      <div className="mt-3">
        <FormLabel htmlFor="email">Email *</FormLabel>
        <FormInput
          id="email"
          type="email"
          className="w-full"
          placeholder="patient@gmail.com"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          error={error?.email ? error?.email[0] : undefined}
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

export default AddOrEditPatient;
