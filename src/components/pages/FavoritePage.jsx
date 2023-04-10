import { Favorite } from "../molecules/Favorite";
import { Slick } from "../molecules/Slick";

export const FavoritePage = () => {
  return (
    <>
      <Favorite />
      <div className="photo-space">
        <div className="photo-header">
          <p className="photo-title">Photographs</p>
          <p className="photo-message">-グッときた写真-</p>
        </div>
        <Slick />
      </div>
    </>
  );
};
