import React from "react";
import "../../styles/Slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dish from "../../images/dish.JPG";
import rainbow from "../../images/rainbow.JPG";
import sake from "../../images/sake.JPG";
import shoes from "../../images/shoes.JPG";
import sakura from "../../images/sakura.jpg";
import cherry from "../../images/cherry.jpg";

export const Slick = () => {
  const images = [sakura, rainbow, dish, sake, shoes, cherry];
  return (
    <div className="slick-container">
      {images.map((image) => (
        <div key={image}>
          <div className="slick">
            <img src={image} alt="" className="photos" />
          </div>
        </div>
      ))}
    </div>
  );
};
