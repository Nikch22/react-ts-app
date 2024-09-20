import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { RegisterPage, RegisterFormikPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction, DynamicFormikPage } from "../03-forms/pages";

import '../03-forms/styles/styles.css'
import logo from "../assets/react.svg";
import { Form } from 'formik';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>

            <li>
              <NavLink
                to="/dynamic-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic Formik
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dynamic-formik" element={ <DynamicFormikPage /> } />
          <Route path="/register-formik" element={ <RegisterFormikPage /> } />
          <Route path="/formik-abstraction" element={ <FormikAbstraction /> } />
          <Route path="/formik-components" element={ <FormikComponents /> } />
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
