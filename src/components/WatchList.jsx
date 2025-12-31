import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import genreids from "../Utility/genre";

export const WatchList = ({ watchlist, setWatchList, handleRemoveFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => setSearch(e.target.value);
  let handleFilter = (genre) => setCurrGenre(genre);

  let sortIncreasing = () => {
    const sorted = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sorted);
  };

  let sortDecreasing = () => {
    const sorted = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sorted);
  };

  useEffect(() => {
    const temp = ["All Genres", ...new Set(watchlist.map((m) => genreids[m.genre_ids[0]]))];
    setGenreList(temp);
  }, [watchlist]);

  return (
    <>
      {/* Genre Filters */}
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              currGenre === genre
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movie"
          className="w-80 md:w-96 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto m-8 rounded-lg shadow-md border border-gray-200">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3 flex items-center gap-2">
                <button onClick={sortIncreasing} className="hover:text-blue-500 transition-colors">
                  <FaArrowUp />
                </button>
                Ratings
                <button onClick={sortDecreasing} className="hover:text-blue-500 transition-colors">
                  <FaArrowDown />
                </button>
              </th>
              <th className="px-6 py-3">Genre</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => currGenre === "All Genres" || genreids[movie.genre_ids[0]] === currGenre)
              .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
              .map((movie) => (
                <tr key={movie.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="flex items-center px-6 py-4 gap-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="h-24 w-16 rounded-lg object-cover shadow"
                    />
                    <span className="font-medium">{movie.title}</span>
                  </td>
                  <td className="px-6 py-4">{movie.vote_average}</td>
                  <td className="px-6 py-4">{genreids[movie.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleRemoveFromWatchlist(movie)}
                    className="px-6 py-4 text-red-600 font-semibold cursor-pointer hover:text-red-800"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
