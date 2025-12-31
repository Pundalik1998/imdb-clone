import React, { useState, useEffect } from "react";
import { MovieCards } from "./MovieCards";
import { Banner } from "./Banner";
import axios from "axios";
import { Pagination } from "./Pagination";

export const Movies = ({
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=26700068370bc9d82184bab1099c49ac&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {movies.length > 0 && <Banner movie={movies[0]} />}

      <h1 className="text-3xl font-bold text-center mt-10 mb-8 tracking-wide">
        Trending Movies
      </h1>

      <div className="grid mx-auto max-w-[1400px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {movies.map((movieObj) => (
          <MovieCards
            key={movieObj.id}
            watchlist={watchlist}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.title}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          />
        ))}
      </div>

      <div className="mt-12">
        <Pagination
          pageNo={pageNo}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};
