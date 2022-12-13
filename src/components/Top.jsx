import "../styles/Top.css";
import Image from "../images/pullrequest.svg";
import CoverImage from "../images/font.svg";
import ProfileImage from "../images/profile.jpg";

export const Top = () => {
  return (
    <>
      <div className="main-cover">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <div className="container">
          <div className="display-table">
            <div className="display-table-contents">
              <div className="left-container">
                <p className="profile-name text-lg">Takenaka Yuto</p>
                <p className="profile-job text-sm">Web Developer</p>
              </div>
              <div className="right-container">
                <img src={ProfileImage} alt="" className="profile-thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cover"
        style={{ backgroundImage: `url(${CoverImage})` }}
      />
    </>
  );
};
