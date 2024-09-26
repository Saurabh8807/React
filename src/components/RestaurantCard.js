import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const {loggedInUser} = useContext(UserContext)
  const { resData } = props;
  const { name, address, cuisine, rating, reviews } = resData;

  return (
    <div className=" w-56 h-36 justify-between" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="bg-gray-100">
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <p>{address}</p>
      <p>
        {rating} stars, {reviews} reviews
      </p>
      <p>
{loggedInUser}      </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const RestaurantCardPromo = (RestaurantCard2)=>{
  console.log(RestaurantCard2)
  return (resData)=>{
    console.log("in promoted",resData)
    return(
      <>
        <label className="absolute bg-slate-800 text-white rounded-lg">Promoted</label>
        <div className="mt-5">
        < RestaurantCard2 {...resData}/>
        </div>
        {/* <RestaurantCard2 resData={resData}/> */}
      </>
    )
  }
}
