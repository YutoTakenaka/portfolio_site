import CoverImage from "../images/sea.jpg";
import "../styles/Favorite.css";

export const Favorite = () => {
  return (
    <div className="favorite" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay"></div>
      <div className="favorite-container">
        <div className="favorite-header">
          <p className="favorite-title">Favorite</p>
          <p className="favorite-message">
            私の心を動かしてくれるものを紹介します。
          </p>
        </div>
        <div className="favorite-contents">
          {/* 1 */}
          <div className="contents">
            <div className="contents-header">
              <p className="contents-title">バスケットボール</p>
              <p className="contents-title-en">Basketball</p>
            </div>
            <div className="contents-body">
              <p>aaa</p>
              <p>aaa</p>
            </div>
          </div>
          {/* 2 */}
          <div className="contents">
            <div className="contents-header">
              <p className="contents-title">ラーメンパトロール</p>
              <p className="contents-title-en">Ramen Patrol</p>
            </div>
            <div className="contents-body">
              <p>aaa</p>
              <p>aaa</p>
            </div>
          </div>
          {/* 3 */}
          <div className="contents">
            <div className="contents-header">
              <p className="contents-title">一眼レフカメラ</p>
              <p className="contents-title-en">SLR Camera</p>
            </div>
            <div className="contents-body">
              <p>aaa</p>
              <p>aaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
