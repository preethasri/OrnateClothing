import { useState, useEffect } from "react";

import { Input } from "../input/Input";
import { validFormChecker } from "./form-validator.js";
import { useAddress } from "../../context";

const defaultValue = { name: "", mobile: "", zipCode: "", street: "", state: "", country: "" };

const AddressModal = ({
  initialAddress = defaultValue,
  isModalOpen,
  setIsModalOpen,
  isUpdating,
}) => {
  const [userInput, setUserInput] = useState(initialAddress);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { addNewAddress, editAddress } = useAddress();

  useEffect(() => {
    setFormErrors(() => validFormChecker(userInput));
  }, [userInput, submitted]);

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    setSubmitted(true);
    if (!(Object.values(formErrors).length > 0)) {
      if (isUpdating) {
        editAddress(userInput);
        setIsModalOpen(false);
        setUserInput(initialAddress);
        setSubmitted(false);
      } else {
        addNewAddress(userInput);
        setIsModalOpen(false);
        setUserInput(initialAddress);
        setSubmitted(false);
      }
    }
  };

  const closeForm = e => {
    e.preventDefault();
    setUserInput(initialAddress);
    setIsModalOpen(false);
  };

  const addDummyAddress = e => {
    e.preventDefault();
    setUserInput({
      name: "preetha srinivasan",
      mobile: "7896543210",
      zipCode: "620006",
      street: "No.3,kumaran street,kelambakam,perungalathur,kancheepuram",
      state: "Tamil Nadu",
      country: "India",
    });
  };

  return (
    <div className="address-modal-container">
    <div className={`address-modal ${isModalOpen ? "visible" :""}`}>
      <form className="form-grp">
        <Input
          label="Name"
          name="name"
          required
          defaultValue={userInput.name}
          helperText={formErrors.name}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <Input
          label="Street"
          name="street"
          required
          defaultValue={userInput.street}
          helperText={formErrors.street}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <Input
          label="Zip-code"
          name="zipCode"
          required
          defaultValue={userInput.zipCode}
          helperText={formErrors.zipCode}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <Input
          label="State"
          name="state"
          required
          defaultValue={userInput.state}
          helperText={formErrors.state}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <Input
          label="Country"
          name="country"
          required
          defaultValue={userInput.country}
          helperText={formErrors.country}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <Input
          label="Mobile"
          name="mobile"
          required
          defaultValue={userInput.mobile}
          helperText={formErrors.mobile}
          showError={submitted}
          changeHandler={changeHandler}
        />
        <div className="address-modal-cta">
          <button type="submit" onClick={e => formSubmitHandler(e)} className="form-btn-primary">
            {isUpdating ? "Update" : "Save"}
          </button>
          {!isUpdating && (
            <button className="form-btn-secondary" onClick={e => addDummyAddress(e)}>
              Add dummy address
            </button>
          )}
          <button className="btn btn-secondary" onClick={e => closeForm(e)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export { AddressModal };
