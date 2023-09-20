import { render } from "react-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "../config";
import useOnline from "../utils/useOnline";


const Body = () => {
      const [allRestaurants, setAllRestaurants] = useState([]);
      const [filteredRestaurants, setFilteredRestaurants] = useState([]);
      const [searchText, setSearchText] = useState("");
      

      useEffect(() => {
        getRestaurants();
      }, []);
      
      const getRestaurants = async () => {
        try {
          const data = await fetch(FETCH_RESTAURANT_URL);
          const json = await data.json();
          console.log("json",json);
         
          console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

          // setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          // setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

          setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
          console.log("data", data.data.cards);
  
        } catch (error) {
          console.log("Something went wrong in fetching the data");
        }
      }


      const isOnline = useOnline();

      if(!isOnline)
      <h1> 🔴 NO Internet Connection..... 
        Please check your internet connection and try it later
      </h1>;

      if(!allRestaurants) return null;
      return allRestaurants?.length===0 ? (
      <Shimmer /> 
      ) : (
      <>
      <div className="search-container p-4 bg-amber-200 my-2 shadow-lg">
        <input
        type="text"
        className="bg- hover:bg-blue-800 active:bg-white focus:outline-none focus:ring focus:ring-violet-300 p-2 m-2zx "
        placeholder="Restaurant's And Food"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        />
        <button 
        className="p-2 m-4 bg-blue-700 text-white rounded-lg" 
        onClick={() => {
        const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }} 
        > 
        Search
      </button>
    </div>


      <div className="flex flex-wrap gap-5 justify-center bg-amber-800"> 
        {filteredRestaurants.map((restaurant) => {
         
          return (  
          <Link 
          className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
          to={"/restaurant/" + restaurant?.info?.id }
          key={restaurant?.info?.id}
>
            <RestaurantCard {...restaurant?.info}  />
             </Link>
          );
        })}

        </div>
      </>
    );
};


export default Body;