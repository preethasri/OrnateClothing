import "../addressManagement/address.css"

function Address({
    name,
    mobileNo,
    address,
    state,
    city,
    pinCode,
    id,
    onEditAddress,
    onDeleteAddress
  }) {
    return (
      <article className="address-list">
        
        <div>
          <p>name:{name}</p>
          <p>mobileNo:{mobileNo}</p>
        </div>
        <address>
         address: {address} {city} {state} -{pinCode}
        </address>
  
        <button
          className="edit-btn"
          onClick={() => {
            onEditAddress(id, true);
          }}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            onDeleteAddress(id);
          }}
        >
          Delete
        </button>
      </article>
    );
  }
  export { Address };
  