// React Router v6
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOLA PAGE</h1>} />
      <Route path="about" element={<h1>ABOUT PAGE</h1>} />
      <Route path="users" element={<h1>USERS PAGE</h1>} />
    </Routes>
  );
};

