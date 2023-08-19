import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => 
    restaurant.info.name.includes(searchText)
  );
  
  return filterData;
}

const Body = () => {
      const [restaurants, setrestaurants] = useState(restaurantList);
      const [searchText, setsearchText] = useState();

      return (
      <>
      <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        />
        <button 
        className="search-btn" 
        onClick={() => {
        const data = filterData(searchText, restaurants);
          setrestaurants(data);
        }} 
        > 
        Search
      </button>
    </div>

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} />;
        })}
        </div>
        </>
    );
};
export default Body;
