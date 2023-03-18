import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar.js";
import "./components/Navbar.css";
import GamesByGenre from "./components/GamesByGenre";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Game from "./components/Game";
import Cart from "./components/Profile/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="genres/:genre" element={<GamesByGenre />} />
        <Route path="game/:gameId" element={<Game />} />
        <Route path="profile/cart/:payStatus" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
