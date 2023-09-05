import {IMG_CDN_URL} from "../config";

const RestaurantCard = ({
    name,
    costForTwo,
    cloudinaryImageId,
    lastMileTravelString,
    avgRating,
  }) => {
      return (
          <div className="w-48 p-2 m-2 shadow-xl bg-amber-400">
              <img src={IMG_CDN_URL + cloudinaryImageId } />
              <h2 className="font-bold text-3xl">{name}</h2>
              <h5>{costForTwo}</h5>
              <h3>{lastMileTravelString} minutes</h3>
              <h4>{avgRating}⭐</h4>
          </div>
      );
  };

  export default RestaurantCard;