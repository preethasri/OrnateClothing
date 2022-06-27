import "../footer/footer.css"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <div>
            <div className="footer-container"> 
                   <div className="footer-left">
                       <div className="footer-brand-name">Ornate </div>
                       <div className="footer-brand-description">Ornate is a best place to buy high quality products at affordable prices. </div>
                       <div className="footer-social-media-links">
                           <div className="social-media-icon">
                           <a href="https://github.com/preethasri" class="primary-links" target="blank">
                                <i className="fa-brands fa-github" id="github-icon"></i>
                                </a>
                      
                           </div>
                           <div className="social-media-icon">
                           <a href="https://twitter.com/Preethasri6" class="primary-links" target="blank">
                                  <i className="fa-brands fa-twitter" id="twitter-icon"></i>
                                </a>
                           
                           </div>
                           <div className="social-media-icon">
                           <a href="https://www.linkedin.com/in/preetha-s-2a9637217/" class="primary-links" target="blank">
                                    <i className="fa-brands fa-linkedin" id="linkedin-icon"></i>
                                </a>
                          
                           </div>
                       </div>

                   </div>
                   <div className="footer-center">
                      <div className="footer-links">Quick Links</div>
                      <ul className="footer-links-list" style={{color:"white"}}>
                      <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Home</li>
                          </Link>
                          <Link to="/productpage" className="link-tag footer-list-item">
                          <li className="footer-list-item " style={{color:"white"}}>ProductsPage</li>
                          </Link>
                          <Link to="/wishlist" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Wishlist</li>
                          </Link>
                          <Link to="/cart" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Cart</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Categories</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>men</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Women</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>shoe</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Hat</li>
                          </Link>
                          <Link to="/" className="link-tag footer-list-item">
                          <li className="footer-list-item" style={{color:"white"}}>Handbag</li>
                          </Link>
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

