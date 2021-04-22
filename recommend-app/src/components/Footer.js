import React from "react";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="row">
        <div class="column" id="col-1">
          <ul>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Socials</li>
          </ul>
        </div>
        <div class="column" id="col-2">
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <a>
              <i class="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a>
              <i class="fab fa-facebook"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
