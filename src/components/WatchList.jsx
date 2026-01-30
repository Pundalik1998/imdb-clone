import React from "react";
import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import genreids from "../Utility/genre";

export const WatchList = ({ watchlist, setWatchList, handleRemoveFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      {/* Genre Filter */}
      <div className="flex justify-center flex-wrap gap-3 my-6">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`px-6 py-2 rounded-full cursor-pointer font-semibold transition-all duration-200
              ${
                currGenre == genre
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center my-6">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movie..."
          className="w-80 md:w-96 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto mx-6 my-8 rounded-xl shadow-lg border border-gray-200">
        <table className="w-full text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left">Movie</th>

              <th className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span onClick={sortIncreasing} className="cursor-pointer hover:text-blue-500">
                    <FaArrowUp />
                  </span>
                  <span className="font-semibold">Rating</span>
                  <span onClick={sortDecreasing} className="cursor-pointer hover:text-blue-500">
                    <FaArrowDown />
                  </span>
                </div>
              </th>

              <th className="px-6 py-4 text-center">Genre</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr
                    key={movieObj.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="flex items-center gap-4 px-6 py-4">
                      <img
                        className="h-24 w-16 rounded-lg object-cover shadow"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <span className="font-semibold">{movieObj.title}</span>
                    </td>

                    <td className="text-center font-medium">
                      {movieObj.vote_average}
                    </td>

                    <td className="text-center">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>

                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-center text-red-600 font-semibold cursor-pointer hover:text-red-800"
                    >
                      Remove
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
