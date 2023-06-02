import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Grocery Price compare</h1>
      <div className="navButton">
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    fontSize: "larger",
                    padding: "3px",
                    borderRadius: "10px",
                    border: "2px solid orange",
                  }
                : {};
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    padding: "3px",
                    borderRadius: "10px",
                    border: "2px solid orange",
                  }
                : {};
            }}
            to={"/newprice"}
          >
            New price
          </NavLink>
        </p>
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    padding: "3px",
                    borderRadius: "10px",
                    border: "2px solid orange",
                  }
                : {};
            }}
            to={"/yourlist"}
          >
            Your List
          </NavLink>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
