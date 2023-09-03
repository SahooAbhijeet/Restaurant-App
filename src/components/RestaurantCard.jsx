import {IMG_CDN_URL} from "../config";

const RestaurantCard = ({
    name,
    areaName,
    cloudinaryImageId,
    avgRating,
  }) => {
      return (
          <div className="Card">
              <img 
              src={
                IMG_CDN_URL
                +
                cloudinaryImageId 
              }
             />
                <h2>{name}</h2>
              <h2>{areaName}</h2>
              <h4>{avgRating}⭐</h4>
          </div>
      );
  };

  export default RestaurantCard;