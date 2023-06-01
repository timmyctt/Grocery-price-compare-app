import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Grocery Price compare</h1>
      <div className="navButton">
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { fontSize: "larger", color: "yellow" } : {};
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { fontSize: "larger", color: "yellow" } : {};
            }}
            to={"/newprice"}
          >
            New price
          </NavLink>
        </p>
        <p>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { fontSize: "larger", color: "yellow" } : {};
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
