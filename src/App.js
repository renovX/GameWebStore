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
import Account from "./components/Profile/Account";
import { useState } from "react";
import Library from "./components/Profile/Library";

function App() {
  const [cartItems, setCartItem] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="genres/:genre" element={<GamesByGenre />} />
        <Route
          path="game/:gameId"
          element={<Game cartitem={cartItems} cartfn={setCartItem} />}
        />
        <Route
          path="profile/cart/:payStatus"
          element={<Cart cartitem={cartItems} cartfn={setCartItem} />}
        />
        <Route path="profile/account" element={<Account />} />
        <Route path="profile/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
