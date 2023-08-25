import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({
    name,
    areaName,
    cloudinaryImageId,
    lastMileTravel,
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
              <h4>{lastMileTravel}</h4>
          </div>
      );
  };

  export default RestaurantCard;