import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  console.log("header");
  const isOnline = useOnlineStatus();
  console.log("isOnline", isOnline);
  return (
    <div className="header">
      <div
        style={{
          backgroundColor: `${isOnline ? "green" : "red"}`,
          height: "10px",
          width: "10px",
        }}
      ></div>

      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
