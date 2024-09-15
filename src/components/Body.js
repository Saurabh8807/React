import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResto, setFilteredResto] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api");
    const json = await data.json();
    setListOfRestaurants(json);
    setFilteredResto(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
                const filtered = listOfRestaurants.filter(
                  (resto) => resto.rating >= 4.5
                );
                setFilteredResto(filtered);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filtered = listOfRestaurants.filter((resto) =>
                  resto.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResto(filtered);
              }}
            >
              Search
            </button>
          </div>
          <div className="res-container">
            {filteredResto.map((restaurant) => (
              <Link to={"/"+restaurant.id} key={restaurant.id}>
                
                <RestaurantCard key={restaurant.id} resData={restaurant} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
