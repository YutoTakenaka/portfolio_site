import "../styles/Header.css";
import Logo from "../images/header-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <a href="/">TOP</a>
        <a href="/about">ABOUT</a>
        <a href="/skill">SKILL</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
};
