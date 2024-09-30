import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useContext } from 'react';
import { useSelector } from "react-redux";

const Header = (obj) => {
  const items = useSelector((items)=>{return items.cart.items})
  console.log("store....",items)
  const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser)
  console.log(obj)
  console.log("header");
  const isOnline = useOnlineStatus();
  console.log("isOnline", isOnline);
  return (
    <div className="flex flex-row justify-between">
      <div>
        <div
          style={{
            backgroundColor: `${isOnline ? "green" : "red"}`,
            height: "10px",
            width: "10px",
          }}
        ></div>

        <div className="">
          <img className="h-20 w-40" src={LOGO_URL} />
        </div>
      </div>
      <div className="flex my-auto mr-16">
        <ul className="flex">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-3">
            <Link to="/cart">Cart {items.length}</Link>
          </li>
          <li className="mx-3">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
