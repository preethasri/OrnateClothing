import "../navbar/navbar.css"

export default function Navbar() {
    return (
      <div>
          <div className='navbar-container'>
              <div className='navbar-wrapper'>
                  <div className='navbar-left'>
                      <div className='brand-name'>Ornate</div>
                  </div>
                  <div className='navbar-center'>
                      <div className='navbar-search'>
                       <input className='search-input' placeholder='search for products...'></input>
                       <i className="fa fa-search"  id="search-icon" aria-hidden="true"></i>
                   
                      </div>
                  </div>
                  <div className='navbar-right'>
                      <button className='login-btn'>Login</button>
                      <button className='signUp-btn'>signUp</button>
                      <i className="fa fa-heart" id="wishlist-icon" aria-hidden="true" ></i>
                      <i className="fa fa-shopping-cart"  id="cart-icon" aria-hidden="true"></i>
                      <div className='img'>
                      
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }