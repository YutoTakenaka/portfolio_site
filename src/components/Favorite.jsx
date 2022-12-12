import CoverImage from "../images/wip3.jpg";
import "../styles/Favorite.css";

export const Favorite = () => {
  return (
    <div className="favorite" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="favorite-header">
        <p className="favorite-title">Favorite</p>
        <p className="favorite-message">
          私の心を動かしてくれるものを紹介します。
        </p>
      </div>
      <div className="favorite-contents"></div>
    </div>
  );
};
