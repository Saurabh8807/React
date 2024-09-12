const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, address, cuisine, rating, reviews } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <p>{address}</p>
      <p>
        {rating} stars, {reviews} reviews
      </p>
    </div>
  );
};

export default RestaurantCard;
