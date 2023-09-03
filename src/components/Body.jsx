import { render } from "react-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";




const Body = () => {
      const [allRestaurants, setAllRestaurants] = useState([]);
      const [filteredRestaurants, setFilteredRestaurants] = useState([]);
      const [searchText, setSearchText] = useState("");
      

      useEffect(() => {
        getRestaurants();
      }, []);
      
      const getRestaurants = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log("json-1-menu",json);
          // console.log("json",json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          console.log("json",json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

          setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
          console.log("data", data.data.cards);

        } catch (error) {
          console.log("Something went wrongin fetching the data");
        }
      }
      console.log("render");
 


      if(!allRestaurants) return null;
      return allRestaurants?.length===0 ? (
      <Shimmer /> 
      ) : (
      <>
      <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        />
        <button 
        className="search-btn" 
        onClick={() => {
        const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }} 
        > 
        Search
      </button>
    </div>


      <div className="restaurant-list"> 
        {filteredRestaurants.map((restaurant) => {
          // console.log("Result",restaurant?.info)
         

          // console.log("res card",restaurant)
          return (  
          <Link to={"/restaurant" + restaurant?.info?.id }
          key={restaurant?.info?.id}
          >
            <RestaurantCard {...restaurant?.info}  />
             </Link>
          );
        }
        )
        }
        </div>
        </>
    );
};


export default Body;
 