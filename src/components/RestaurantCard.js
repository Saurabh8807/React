import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)
  const {
    imageId,
    description,
    accessibility,
    action,
    entityType,
    delieryTime,
  } = resData;

  // console.log(action.link)

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      /> */}
      <h3>{description}</h3>
      {/* <h3>{accessibility}</h3>
      <h4>{entityType}</h4>
      <h4>{action} stars</h4>
      <h4>{delieryTime} minutes</h4> */}
      <button href={action.link}>
      </button>
    </div>
  );
};

export default RestaurantCard;
