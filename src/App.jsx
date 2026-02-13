import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import "react-datepicker/dist/react-datepicker.css";
import ReserveTable from "./pages/ReserveTable";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/menu" element={<MenuPage/>} />

           <Route path="/reserve" element={<ReserveTable/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
