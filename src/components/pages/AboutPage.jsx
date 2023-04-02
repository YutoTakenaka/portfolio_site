import { About } from "../molecules/About";

export const AboutPage = () => {
  return (
    <>
      <About />
      <div className="about credo">
        <h1 className="about-title">
          <p className="main-title">Credo</p>
          <p className="subtitle">-クレド-</p>
        </h1>
        <div className="credo-content">
          <ul className="credo-left">
            <li>主体的に動く</li>
            <li>誠実に向き合う</li>
            <li>感謝を忘れない</li>
            <li>新しいことに挑戦する</li>
            <li>他者に貢献する</li>
          </ul>
          <div className="credo-right">
            <p>
              『クレド』とは、ラテン語で『志・約束・信条』を意味する言葉です。
              これら5つのクレドは、私が幸せな人生を歩むための行動指針です。
              私が大切にしている価値観でもあります。
              自分自身が幸せに生きることが出来なければ、人を幸せにする機会を生み出すことは出来ません。
              関わる人にいい影響を与えるために生きていくという覚悟を支える羅針盤が5つのクレドです。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
