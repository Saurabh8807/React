import RestaurantCard,{RestaurantCardPromo} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  const [filteredResto, setFilteredResto] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:3000/api");
      const json = await data.json();
      setListOfRestaurants(json);
      setFilteredResto(json);
    } catch (error) {
      return <Shimmer/>
    }
  };

  const {setUserName,userName} = useContext(UserContext)


  useEffect(() => {
    fetchData();
  }, []);

  console.log(isOnline)
  if(!isOnline){
    return <h1>Please check your internet connection</h1>
  }

  const PromotedResto=RestaurantCardPromo(RestaurantCard)

  return (
    <div>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
        <div className="flex">
          <div className="">
            <button
              className=" bg-blue-500 hover:bg-blue-700 p-2 text-white m-2"
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
            className="border border-black my-3"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <div>
            <input
            className="border border-black my-3"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <button
            className=" bg-blue-500 hover:bg-blue-700 p-2 text-white m-2"
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
          </div>
          <div className="flex flex-wrap">
            {filteredResto.map((restaurant) => (
              <Link to={"/"+restaurant.id} key={restaurant.id}>
                <div className="mx-3 my-3 border border-black">
                  {/* {restaurant.promoted ? <PromotedResto resData={restaurant}/>:<RestaurantCard resData={restaurant} />} */}
                  {restaurant.promoted ? <PromotedResto resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
                
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
