import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import NotePage from "../pages/NotePage";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<SignUpPage />}></Route>
      <Route path="/notes" element={<NotePage />}></Route>
    </Routes>
  );
}
