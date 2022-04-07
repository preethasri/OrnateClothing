import { states } from "./states";
import "../addressManagement/address.css"
function AddressForm({
  id,
  isEditing,
  handleSubmit,
  Values,
  handleChange,
  onCancelClick
}) {
  return (
    <section className="address-field">
      <p>{isEditing ? "Edit Address " : "Add New Address"}</p>
      <form className="address-form" onSubmit={(e) => handleSubmit(e, Values)}>
        <div className="form-address">
          <FormInputField
            type="text"
            id="name"
            value={Values.name}
            placeholder="Name"
            name="name"
            handleChange={handleChange}
          />
        </div>

        <div className="form-address">
          <FormInputField
            type="tel"
            id="mobileNo"
            value={Values.mobileNo}
            placeholder="enter a 10-digit mobile number"
            name="mobileNo"
            handleChange={handleChange}
          />
        </div>

        <div className="form-address">
          <FormInputField
            type="text"
            id="pinCode"
            value={Values.pinCode}
            placeholder="pincode"
            name="pinCode"
            handleChange={handleChange}
          />
        </div>
        <div className="form-address">
          <FormInputField
            type="text"
            id="address"
            
            value={Values.address}
            placeholder="address(area/street)"
            name="address"
            handleChange={handleChange}
            className="text-area"
          />
        </div>
        <div className="form-address">
          <FormInputField
            type="text"
            id="city"
            value={Values.city}
            placeholder="city/district/town"
            name="city"
            handleChange={handleChange}
          />
        </div>
        <div className="form-address">
          <select
            className="user-state"
            value=""
            id="state"
            name="state"
            handleChange={handleChange}
            value={Values.state}
            placeholder="enter your state"
          >
            <option value=""></option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <button className="saveBtn" type="submit">
          Save
        </button>
        <button className="cancelBtn" onClick={() => onCancelClick()}>
          Cancel
        </button>
      </form>
    </section>
  );
}
function FormInputField({
  type,
  id,
  value,
  placeholder,
  required,
  name,
  handleChange
}) {
  return (
    <input
      className="addressFormInput"
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      required
      name={name}
      onChange={handleChange}
    />
  );
}

export { AddressForm };
