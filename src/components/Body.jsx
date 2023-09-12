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
        {/* <label class="relative block"> */}
  {/* <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label> */}
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
 