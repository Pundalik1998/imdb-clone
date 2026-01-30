import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Movies } from "./components/Movies.jsx";
import { WatchList } from "./components/WatchList.jsx";
import { Banner } from "./components/Banner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";

function App() {
  let [watchlist, setWatchList] = useState([]);
  const [movies, setMovies] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner movie={movies[0]} />
                <Movies
                  setMovies={setMovies}
                  movies={movies}
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchList={setWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
