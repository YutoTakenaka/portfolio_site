import "../styles/Contact.css";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-contents">
          <p>Contact</p>
          <p className="description">
            お仕事のご相談・ご依頼など下記よりご連絡ください。
          </p>
          <a href="https://twitter.com/" className="btn">
            Contact Us
          </a>
        </div>
        <ul className="social-icons">
          <li className="icon-link">
            <a href="https://twitter.com/eutu_ty">
              <FaTwitter color="#047ff3" size="2rem" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://www.instagram.com/eutu_ty/">
              <FaInstagram color="#e31fe3" size="2rem" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://github.com/YutoTakenaka">
              <FaGithub color="#4d4d4d" size="2rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
