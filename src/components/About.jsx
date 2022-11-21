import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <p className="title">About</p>
      <div className="message">
        <p className="message-title">「ITの力で人々に人生に追い風を」</p>
        <p className="message-text">このような想いを掲げて仕事をしています。</p>
      </div>
      <div className="profile-container">
        <div className="left-container">
          <p>photo</p>
        </div>
        <div className="right-container">
          <p className="profile">Name: 竹中 優斗(たけなか ゆうと)</p>
          <p className="profile">D.O.B: 1999年5月8日</p>
          <p className="profile">From: 青森県八戸市</p>
          <p className="profile">
            Favorite: バスケットボール/ラーメン巡り/一眼レフカメラ
          </p>
          <hr />
          <p className="profile-text">
            千葉大学法政経学部法政経学科を卒業し、新卒でIT企業に就職しました。現在はReact,TypeScriptなどを用いたモダンなフロントエンド開発をしています。私に関わったことで、私が携わったアプリを使うことで、その人の人生にいい影響を与えられると嬉しいです。
          </p>
          <p className="profile-text"></p>
        </div>
      </div>
    </div>
  );
};