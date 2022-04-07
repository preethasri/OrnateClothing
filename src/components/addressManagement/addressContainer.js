import { useState } from "react";

import { v4 as uuid } from "uuid";
import NavBar from '../navbar/navbar'

import { AddressForm } from "./addressForm";
import { AddressList } from "./addressList";
import "../addressManagement/address.css"
function AddressContainer() {
  const initialFormValues = {
    name: "",
    mobileNo: "",
    pinCode: "",
    address: "",
    city: "",
    state: "",
    isEditing: false
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [newAddress, setNewAddress] = useState(false);
  const [addressList, setAddressList] = useState([
    {
      id: uuid(),
      name: "adarshbalika",
      mobileNo: "987654321",
      pinCode: "600326",
      address: "no:134,Nehru street,T.nagar",
      city: "chnnai",
      state: "tamilNadu",
      isEditing: false
    }
  ]);
  const [editFormValues, setEditFormValues] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((formValues) => {
      return { ...formValues, [name]: value };
    });
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditFormValues((editFormValues) => {
      return { ...editFormValues, [name]: value };
    });
  };
  function handleSubmit(e, Values) {
    e.preventDefault();

    setAddressList((addressList) => {
      return [...addressList, { id: uuid(), ...Values }];
    });
    setNewAddress(false);
    setFormValues(initialFormValues);
  }
  function handleCancelClick() {
    setNewAddress(false);
    setFormValues(initialFormValues);
  }
  function handleEditAddress(id) {
    setAddressList((addressList) => {
      return addressList.map((address) => {
        if (address.id === id) {
          setEditFormValues({ ...address });
          return { ...address, isEditing: true };
        }
        return { ...address, isEditing: false };
      });
    });
  }
  return (
      <>
      <NavBar />
    <section className="addressContainer">
      <div className="address-header">
        <h3 className="address-heading">Manage Address</h3>
        {newAddress ? (
          <AddressForm
            onCancelClick={handleCancelClick}
            handleChange={handleChange}
            Values={formValues}
            handleSubmit={handleSubmit}
          />
        ) : (
          <button
            className="newAddressBtn"
            onClick={() => {
              setNewAddress(true);
              setFormValues(initialFormValues);
            }}
          >
            <i className="fa fa-plus"  id="add-new-address-icon"></i>
            <span className="add-new-address">ADD A NEW ADDRESS</span>
          </button>
        )}
      </div>
      <AddressList
        addressList={addressList}
        setAddressList={setAddressList}
        handleEditAddress={handleEditAddress}
        handleEditChange={handleEditChange}
        formValues={editFormValues}
      />
    </section>
    <div>
        
    </div>
    </>
  );
}
export { AddressContainer };
