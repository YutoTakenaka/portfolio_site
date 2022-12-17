import "../styles/Top.css";
import PullRequest from "../images/programming.svg";

export const Top = () => {
  return (
    <>
      <div className="top">
        <div className="left-container">
          <p className="profile-name">Takenaka Yuto</p>
          <p className="profile-job">Web Developer</p>
        </div>
        <div className="right-container">
          {/* <img src={ProfileImage} alt="" className="profile-thumb" /> */}
          <img className="top-image" src={PullRequest} alt="" />
        </div>
      </div>
      {/* <div
        className="cover"
        style={{ backgroundImage: `url(${CoverImage})` }}
      /> */}
    </>
  );
};
