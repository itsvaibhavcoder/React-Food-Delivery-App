import React from 'react';
import { restaurantList } from "../components/constants";
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';
import { swiggy_api_URL } from '../components/constants';

//Filter the restaurant data according input type

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
);
  return filterData;
}

// Body components for body section: It contain all restaurant cards
const Body = () => {
  //useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [allrestaurants, setAllRestaurants] = useState([]);

  const [filterRestaurants, setFilterRestaurants] = useState([]);

  //Use useEffect for one time call getRestaurants using empty dependency array 

  useEffect(()=>{
    getRestuarants();
  }, []);

  // async function getRestaurant to fetch swiggy API data.

  async function getRestuarants(){
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allrestaurants);
            // update the state of restaurants list
            setAllRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;