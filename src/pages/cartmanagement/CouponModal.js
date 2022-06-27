const CouponModal = ({
    isCouponModalOpen,
    setIsCouponModalOpen,
    totalPrice,
    coupons,
    setCoupons,
  }) => {
    return (
        <div className="modal-container">
      <div className={`modal ${isCouponModalOpen ? "flex-total-center" :""}`} id="modal-demo">
        <div className="modal-header">
          <button
            className="modal-close-icon"
            onClick={() => setIsCouponModalOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div>
            {coupons.map(coupon => (
              <label key={coupon.offerName} className="offer-label">
                <input
                  type="radio"
                  name="offer"
                  disabled={totalPrice < coupon.minBillAmount}
                  value="off200"
                  checked={coupons.offerStatus}
                  onChange={() =>
                    setCoupons(prevState =>
                      prevState.map(eachCoupon =>
                        eachCoupon.offerName === coupon.offerName
                          ? { ...eachCoupon, offerStatus: true }
                          : { ...eachCoupon, offerStatus: false }
                      )
                    )
                  }
                />
                <span> {coupon.description}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export { CouponModal };
  