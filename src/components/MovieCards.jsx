export const MovieCards = ({
  poster_path,
  name,
  handleAddtoWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const isInWatchlist = watchlist.some(
    (movie) => movie.id === movieObj.id
  );

  return (
    <div
      className="relative aspect-[2/3] w-full rounded-2xl bg-cover bg-center shadow-lg hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
      }}
    >
      {/* Action */}
      <div
        onClick={() =>
          isInWatchlist
            ? handleRemoveFromWatchlist(movieObj)
            : handleAddtoWatchlist(movieObj)
        }
        className="absolute top-2 right-2 h-9 w-9 flex items-center justify-center rounded-full bg-black/70 text-lg cursor-pointer"
      >
        {isInWatchlist ? "❌" : "❤️"}
      </div>

      {/* Title */}
      <div className="absolute bottom-0 w-full text-center text-white text-sm font-semibold bg-gradient-to-t from-black via-black/70 to-transparent p-3 rounded-b-2xl">
        {name}
      </div>
    </div>
  );
};
