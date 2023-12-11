import { BiHome } from "react-icons/bi";
import "./index.css";
const NavBar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <span className="nav-brand">NavBar</span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <BiHome />
          Home
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
