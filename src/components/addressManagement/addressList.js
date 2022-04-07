import {Address} from "./address"
import {AddressForm} from './addressForm'
import "../addressManagement/address.css"
function AddressList({
  addressList,
  setAddressList
  ,handleChange,
  handleEditChange,
  handleEditAddress,
  formValues}) {
  const handleDeleteAddress=(id)=>{
      setAddressList((a)=>{
        return a.filter((address)=>address.id !==id)
      })
    }
   
    const handleEditSubmit=(e,id,Values)=>{
      e.preventDefault();
      setAddressList((a)=>{
        return a.map((address)=>{
        if(address.id===id){
          return {...Values,isEditing:false}
        }
         return address
      })
      })
    }



  return (<section>
    {addressList.map((address)=>{
      if(address.isEditing){
        return(
          <AddressForm 
          key={address.id}
          id={address.id}
          Values={formValues}
          onCancelClick={handleEditAddress}
          isEditing={true}
          handleSubmit={(e,Values)=>
                handleEditSubmit(e,address.id,Values)}
          handleChange={handleEditChange}  />
        )} 
        return(
            <Address key={address.id}
            {...address}
          onEditAddress={handleEditAddress}
          onDeleteAddress={handleDeleteAddress} />
         )
    })}
  </section>
  )}
export { AddressList };
