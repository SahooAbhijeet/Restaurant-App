import { render } from "react-dom";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText, restaurants) {

  const filterData = restaurants.filter((restaurant) => 
  restaurant?.card?.card?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  
  return filterData;
}

const Body = () => {
      const [allRestaurants, setAllRestaurants] = useState([]);
      const [filteredRestaurants, setFilteredRestaurants] = useState([]);
      const [searchText, setSearchText] = useState("");
      

      useEffect(() => {
        
        getRestaurants();
      }, []);
      
      const getRestaurants = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=92870&isNewCollectionFlow=true&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
          const json = await data.json();
          console.log(json);
          setAllRestaurants(json?.data?.cards);
          setFilteredRestaurants(json?.data?.cards);

        } catch (error) {
          console.log("Something went wrong");
        }
       
      };
      console.log("render");


      if(!allRestaurants) return null;

      if(filteredRestaurants?.length === 0)
      return <h1> No Match !!!</h1>;
      
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
             
          return (  
          <RestaurantCard {...restaurant.card.card.info} key={restaurant.card.card.info} /> 
          );console.log(key);
        }
        )
        }
        
        </div>
        </>
    );
};
export default Body;
 