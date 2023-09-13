import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import  Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import body from "./Body";
import {addItems} from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    // how to read the dynamic URL params
    const params = useParams();
    const {resId} = params;
    console.log(params);

    
    const restaurant = useRestaurant(resId);

    const dispatch =  useDispatch();

    const addFoodItems = (item) => {
        dispatch(addItems(item))
    };
    
    return !restaurant ? (
        <Shimmer />
    ) : (
  
    
        <div className="flex">
       <div> 
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.card?.info?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.cloudinaryImageId} />
            <h2>{restaurant?.locality}</h2>
            <h2>{restaurant?.costForTwoMessage}</h2>
            <h2>{restaurant?.avgRating}</h2>
            <h2>{restaurant?.sla?.lastMileTravelString}</h2>
        </div> 

        
        <div className="p-10">
            <h1> Menu </h1>
            <ul>
            {Object?.values(restaurant).map((item) => 
            <li key = {item.card.info.id}>{item.card.info?.name}<button className="p-2 m-2 bg-yellow-50" onClick={() => addFoodItems(item)}> Add </button></li>
            )}
            </ul>
        </div>
        </div>
        
    )
};

export default RestaurantMenu;