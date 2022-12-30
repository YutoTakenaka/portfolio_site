import "../styles/About.css";
import Image from "../images/man.svg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-title">
          <p className="main-title">About</p>
          <p className="subtitle">-私に関するあれこれ-</p>
        </div>
      </div>

      <div className="about-message">
        <p className="message-title">
          花には水を。人には心を。感謝いっぱいの日々を。
        </p>
      </div>
      <div className="about-profile">
        <div className="left-profile">
          <div className="about-image">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="right-profile">
          <p className="profile">-Profile-</p>
          <p className="profile-prefix">Name</p>
          <p className="profile">竹中 優斗(たけなか ゆうと)</p>
          <p className="profile-prefix">Day of Birth</p>
          <p className="profile">1999年5月8日</p>
          <p className="profile-prefix">From</p>
          <p className="profile">青森県八戸市</p>
          <p className="profile-prefix">Favorite</p>
          <p className="profile">
            バスケットボール/美味しい食事とお酒/一眼レフカメラ
          </p>
          <hr />
          <p className="profile-text">
            足を運んでいただきありがとうございます。
          </p>
          <p className="profile-text">
            青森県産日本酒育ちの竹中優斗です。高校まで、地元青森で訛りまくりの18年を過ごし、大学進学を機に上京してきました。千葉大学法政経学部法政経学科を卒業後、新卒でITベンチャー企業に就職しました。React,TypeScriptなどを用いたモダンなフロントエンド開発をしているWebエンジニアとして貢献しています。
          </p>
          <p className="profile-text">
            私に関わったことで、もしくは私が開発に携わったアプリを使うことで、誰かの人生にいい影響を与えられると嬉しいです。亡き祖母が残した言葉「花には水を。人には心を。感謝いっぱいの日々を。」は私が大切にしている座右の銘です。感謝の気持を忘れないことで、人として美しく咲き誇りたい。その想いを胸に、人生を歩んでます。
          </p>
          <p className="profile-text"></p>
        </div>
      </div>
    </div>
  );
};
