import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import  Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
    // how to read the dynamic URL params
    const params = useParams();
    const {resId} = params;
    console.log(params);

    
    const restaurant = useRestaurant(resId);

    
    
    return !restaurant ? (
        <Shimmer />
    ) : (
  
    
        <div className="menu">
       <div> 
        <div>
            <h1>Restaurant id: {resId}</h1>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.cloudinaryImageId} />
            <h2>{restaurant?.card?.info?.name}</h2>
            <h2>{restaurant?.locality}</h2>
            <h2>{restaurant?.costForTwoMessage}</h2>
            <h2>{restaurant?.avgRating}</h2>
            <h2>{restaurant?.sla?.lastMileTravelString}</h2>
        </div>
        <div>
            <ul>
            
            {Object?.values(restaurant).map((item) => <li key = {item.card.info.id}>{item.card.info?.name}</li>)}

            </ul>
        </div>
        </div>
        </div>
    )
};

export default RestaurantMenu;