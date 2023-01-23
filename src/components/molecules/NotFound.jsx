import Image from "../../images/404.svg";
import "../../styles/NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-img">
        <img src={Image} alt="" />
      </div>
      <div className="not-found-text">
        <p>ページが見つかりません</p>
        <a href="/top">トップページに戻る</a>
      </div>
    </div>
  );
};
