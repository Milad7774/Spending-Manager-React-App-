import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <span> Spending Manager </span> 
      <div className="links">
        <NavLink
          to="/View"
          className={({ isActive }) =>
            isActive ? "active-style" : "normal-style"
          }
        >
          View
        </NavLink>
        <NavLink
          to={"/Create"}
          className={({ isActive }) =>
            isActive ? "active-style" : "normal-style"
          }
        >
          Create New Task
        </NavLink>
      </div>
    </header>
  );
};
export default NavBar;
