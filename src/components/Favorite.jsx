import CoverImage from "../images/font.svg";
import Image from "../images/pair.svg";
import Basketball from "../images/freak.svg";
import Food from "../images/breakfast.svg";
import Camera from "../images/camera.svg";

import "../styles/Favorite.css";

export const Favorite = () => {
  return (
    <>
      <div className="favorite">
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
                <img className="content-img" src={Basketball} alt="" />
                <p className="content-text">
                  小学校4年生から大学4年生まで、ずっと部活でバスケットボールをやっていました。青春の大半はバスケに注いできました。メンタルの重要性とチーム力の偉大さを教えてくれたのはバスケです。社会人になってもたまにバスケをしています。SLAM
                  DUNKは流川推しです。
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="contents">
              <div className="contents-header">
                <p className="contents-title">食事とお酒</p>
                <p className="contents-title-en">Eating and Drinking</p>
              </div>
              <div className="contents-body">
                <img className="content-img" src={Food} alt="" />
                <p className="content-text">
                  美味しい食事とお酒があるだけで人生幸せです。食べ物は何でも大好きですが、特に好きなのはラーメンです。ラーメン巡り(通称ラーメンパトロール)を楽しんでいます。お酒はやっぱり日本酒が一番。新鮮なお刺身と共に日本酒を味わう瞬間がたまりません。
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="contents">
              <div className="contents-header">
                <p className="contents-title">一眼レフカメラ</p>
                <p className="contents-title-en">SLR Camera</p>
              </div>
              <div className="contents-body">
                <img className="content-img" src={Camera} alt="" />
                <p className="content-text">
                  趣味で一眼レフカメラを持ち歩いて写真を撮っています。その場所、その瞬間を写真に収めることで、一瞬の記憶を綺麗に残したくて始めました。そのおかげでしょうか。見える景色、世界が広がり、素敵な風景やものは意外と近くに存在すると気づくことができました。
                </p>
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
