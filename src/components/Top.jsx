import "../styles/Top.css";
import CoverImage from "../images/cover.png";
import ProfileImage from "../images/profile.jpg";

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
  );
};
