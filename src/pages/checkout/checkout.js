import "./checkout.css"
import { useState } from "react"
import {useAddress} from '../../context/addressContext'
import {BillDistribution} from '../cartmanagement/BillDistribution'
import{AddressModal,AddressCard} from '../../components'
import Navbar from "../../components/navbar/navbar"
const Checkout=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    
    const {
      addressState: { address },
    } = useAddress();
    const [selectedAddressId, setSelectedAddressId] = useState(address[0]?._id);
    
    const selectedAddress = address.find(address => address._id === selectedAddressId);
  
  
    return (
      <div>
        <Navbar />
      <main className="cart-container">
        <h1 className="text-center">Checkout</h1>
    
  
        <div className="cart">
          <section className="address-cards">
            {address?.map(address => (
              <label key={address._id} className="address-radio">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddressId === address._id}
                  onChange={() => setSelectedAddressId(address._id)}
                />
                <div>
                  <h3>{address.name}</h3>
                  <address className="card-text">
                    <span>{address.street}</span>
                    <span>{address.state}</span>
                    <br></br>
                    <span>{address.country}-</span>
                    <span>{address.zipCode}</span>
                    <br></br>
                    <span>phone No.{address.mobile}</span>
                  </address>
                </div>
              </label>
            ))}
            {!address.length && <h2>Add address to continue payment</h2>}
            <button className="new-address-btn" onClick={() => setIsModalOpen(true)}>
              Add new address +
            </button>
            <AddressModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </section>
          <BillDistribution selectedAddress={selectedAddress} />
        </div>
      </main>
      </div>)
}
export {Checkout}