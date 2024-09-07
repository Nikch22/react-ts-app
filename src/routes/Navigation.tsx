import { AppRouter } from "../router/AppRouter";
import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={ reactLogo} alt="Logo" />
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>Go to Home </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>Go to About</NavLink>
          </li>

          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")}>Go to Users</NavLink>
          </li>
        </ul>
      </nav>

      <AppRouter />
    </div>
  );
};
