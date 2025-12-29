import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Movies } from "./components/Movies.jsx";
import { WatchList } from "./components/WatchList.jsx";
import { Banner } from "./components/Banner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path="/" element={<><Banner/> <Movies /></>}></Route> 
         <Route path="/watchlist" element={<WatchList />}></Route> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
