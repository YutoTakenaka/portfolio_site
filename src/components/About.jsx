import "../styles/About.css";
import Image from "../images/programmer.svg";

export const About = () => {
  return (
    <div className="about">
      <p className="title">About</p>
      <div className="message">
        <p className="message-title">「ITの力で人々の人生に追い風を」</p>
        <p className="message-text">このような想いを掲げて仕事をしています。</p>
      </div>
      <div className="profile-container">
        <div className="left-profile">
          <div
            className="profile-image"
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
        </div>
        <div className="right-profile">
          <p className="profile">Name: 竹中 優斗(たけなか ゆうと)</p>
          <p className="profile">D.O.B: 1999年5月8日</p>
          <p className="profile">From: 青森県八戸市</p>
          <p className="profile">
            Favorite: バスケットボール/ラーメン巡り/一眼レフカメラ
          </p>
          <hr />
          <p className="profile-text">
            千葉大学法政経学部法政経学科を卒業し、新卒でIT企業に就職しました。現在はReact,TypeScriptなどを用いたモダンなフロントエンド開発をしています。私に関わったことで、私が開発に携わったアプリを使うことで、誰かの人生にいい影響を与えられると嬉しいです。まだまだ駆け出しのエンジニアですが、ユーザーに寄り添った実装を心がけて日々開発しています。
          </p>
          <p className="profile-text"></p>
        </div>
      </div>
    </div>
  );
};
