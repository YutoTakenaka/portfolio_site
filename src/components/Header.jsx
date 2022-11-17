import CoverImage from "../images/cover.png";
import ProfileImage from "../images/profile.jpg";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <header
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <p className="title-text text-lg">Yuto Takenaka</p>
            <p className="title-text text-sm">Web Developer</p>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/eutu_ty">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://www.instagram.com/eutu_ty/">
                  <FaInstagram color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/YutoTakenaka">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
