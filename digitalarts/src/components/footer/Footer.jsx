import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>AI Generated </span>
            <span>Pixar</span>
            <span>NFT</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Selling on Digital Arts</span>
            <span>Buying on Digital Arts</span>
            <span>Help</span>
            <span>Safety</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customers</span>
            <span>Blog</span>
            <span>Become a Seller</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Digital Arts.</h2>
            {/*Logo for DA */}
            <span></span>
            {/*SIgn pic */}
          </div>
          <div className="right">
            <div className="social">
              <a href="https://twitter.com/i_m_akshatrawat?t=suxhuNq5ZTjRi_CY2_6iGw&s=09" target="_blank" rel="noreferrer">
              <img className="twitter" src="/img/twitter.png" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/akshat-rawat-b708441b1" target="_blank" rel="noreferrer">
              <img src="/img/linkedin.png" alt="" />
              </a>
              <a href="https://www.instagram.com/akshat_rawat0007/" target="_blank" rel="noreferrer">
              <img src="/img/instagram.png" alt="" />
              </a>
            </div>
            <div className="link">
              <span></span>
            </div>
            <div className="link">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
