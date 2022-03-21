import "../footer/footer.css"

export default function Footer(){
    return(
        <div>
            <div className="footer-container"> 
                   <div className="footer-left">
                       <div className="footer-brand-name">Ornate </div>
                       <div className="footer-brand-description">Ornate is a best place to buy high quality products at affordable prices. </div>
                       <div className="footer-social-media-links">
                           <div className="social-media-icon">
                           <i className="fa-brands fa-twitter" id="twitter-icon"></i>
                           </div>
                           <div className="social-media-icon">
                           <i className="fa-brands fa-github" id="github-icon"></i>
                           </div>
                           <div className="social-media-icon">
                           <i className="fa-brands fa-linkedin" id="linkedin-icon"></i>
                           </div>
                       </div>

                   </div>
                   <div className="footer-center">
                      <div className="footer-links">Quick Links</div>
                      <ul className="footer-links-list">
                          <li className="footer-list-item">Home</li>
                          <li className="footer-list-item">ProductsPage</li>
                          <li className="footer-list-item">Wishlist</li>
                          <li className="footer-list-item">Cart</li>
                          <li className="footer-list-item">account</li>
                          <li className="footer-list-item">men</li>
                          <li className="footer-list-item">Women</li>
                          <li className="footer-list-item">shoe</li>
                          <li className="footer-list-item">handbag</li>
                          <li className="footer-list-item">hat</li>
                      </ul>
                   </div>
                   <div className="footer-right">
                       <div className="contact">
                       <div className="footer-title">Registered address</div>
                       <div className="contact-detail">
                       <div> No:1 ,abc street, chennai-6</div>
                       <div> contact at : +123456789</div>
                       <div> mail-id : 123@gmail.com</div>
                       </div>
                       </div>

                   </div>
            </div>

        </div>
    )
}

