import { useState, useEffect } from "react";
// import resId  from "react-router-dom";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState(null);

    // Get data from the  API
    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    const getRestaurantsInfo = async () => {
        const data = await fetch(FETCH_MENU_URL + resId);
        const json = await data.json();
        console.log("menu-1",json);

        console.log("json 1",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        
    }
    //Return restaurant data
    return restaurant;
};

export default useRestaurant;