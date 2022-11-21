import "../styles/Top.css";
import CoverImage from "../images/cover.png";
import ProfileImage from "../images/profile.jpg";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export const Top = () => {
  return (
    <div
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="left-container">
              <p className="greeting1">Thank you for visiting!</p>
              <p className="greeting2">My name is...</p>
              <p className="profile-name text-lg">Takenaka Yuto</p>
              <p className="profile-job text-sm">Web Developer</p>
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
            <div className="right-container">
              <img src={ProfileImage} alt="" className="profile-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
