import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [filteredResto, setfilteredResto] = useState([]);
  console.log("top of component", listOfRestaurants);

  const fetchData = async () => {
    console.log("i am in fetchData function first ");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING#"
    );
    console.log("i am in fetchData function second");
    const json = await data.json();
    setListOfRestraunt(json.data.cards[0].card.card.imageGridCards.info);
    setfilteredResto(json.data.cards[0].card.card.imageGridCards.info);
  };

  useEffect(() => {
       fetchData();
    console.log("inside useeffect");
  },[]);

  console.log("outside useffect");

  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <button className="filter-btn">Top Rated Restaurants</button>
          </div>
          <div>
            <input
              type="text"
              value={serachText}
              onChange={(e) => {
                setSearchText(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filtered = listOfRestaurants.filter((resto) => {
                  console.log(
                    resto.description.toLowerCase().includes(serachText)
                  );
                  return resto.description
                    .toLowerCase()
                    .includes(serachText.toLowerCase());
                });
                console.log(filtered);
                // setListOfRestraunt(filtered)
                setfilteredResto(filtered);
              }}
            >
              search
            </button>
          </div>
          <div className="res-container">
            {filteredResto.map((restaurant) => (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
