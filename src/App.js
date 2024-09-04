import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  const moviesData = useSelector((store) => store.games.popularMovies.data);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
