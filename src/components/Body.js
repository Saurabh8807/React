import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  // let listOfRestaurants = resList
  console.log('top of component',listOfRestaurants);
  useEffect(()=>{
console.log("inside useeffect")
},[])
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log("before list of res")

            setListOfRestraunt(filteredList);
            console.log("Setting list of res")
            console.log("filteredList=>",filteredList)
            console.log("setListOfRestraunt=>",listOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
