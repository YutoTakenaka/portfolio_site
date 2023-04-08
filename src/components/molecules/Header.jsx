import "../../styles/Header.css";
import Logo from "../../images/header-logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <a href="/">Top</a>
        <a href="/about">About</a>
        <a href="/favorite">Favorite</a>
        <a href="/skill">Skills</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};
