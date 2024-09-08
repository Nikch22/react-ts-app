import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../assets/react.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route, i) => (
                <li key={route.name + i}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route, i) => (
              <Route
                key={route.name + i}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route
              path='/*'
              element={ <Navigate to={ routes[0].to } replace/> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
