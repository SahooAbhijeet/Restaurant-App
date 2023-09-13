import {IMG_CDN_URL} from "../config";

const FoodItem = ({
    name,
    description,
    costForTwo,
    cloudinaryImageId,
    price
    ,
  }) => {
      return (
          <div className="w-60 p-2 m-6  shadow-xl bg-amber-400">
              <img src={IMG_CDN_URL + cloudinaryImageId } />
              <h2 className="font-bold">{name}</h2>
              <h3>{description}</h3>
              <h3>{costForTwo}</h3>
              <h4>Rupees: {price/100}</h4>
          </div>
      );
  };

  export default FoodItem;