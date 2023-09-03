import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import  Shimmer from "../components/Shimmer";


const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    console.log(params);

    const [restaurant, setRestaurant] = useState(null);
    

    useEffect(()=>{
        getRestaurantsInfo();
    }, []);

    const getRestaurantsInfo = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2960587&lng=85.8245398&restaurantId=" + resId);
        const json = await data.json();
        console.log("menu1",json);
        console.log("json 1",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        
    }
    
    if(!restaurant) {
        return <Shimmer />;
    }
    return (
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
      

         {/* <div>
            <h1>Menu</h1>
            <ul>
                { 
                     Object.values(restaurantMenu1?.card?.card?.itemCards[0]?.card?.info).map((info) => (
                         <li key={info?.id}>{info?.name}</li> 
                      ))}
                     </ul>
                </div>  */}
                 </div>
                </div>
       

    )
   
};

export default RestaurantMenu;