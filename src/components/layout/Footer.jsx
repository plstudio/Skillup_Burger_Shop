import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BURGER SHOP</h2>
        <p>We are trying to give you the best taste possible.</p>
      </div>

      <div>
        <h5>Follow Us</h5>

        https://www.youtube.com
          <AiFillYoutube />
        </a>

        https://www.instagram.com
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
