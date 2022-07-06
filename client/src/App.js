import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/HomePage";
import Room from "./containers/RoomPage";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/r/:room' element={<Room />} />
    </Routes>
  );
}

export default App;
