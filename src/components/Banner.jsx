export const Banner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div
      className="relative h-[35vh] md:h-[80vh] rounded-2xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      <div className="absolute bottom-10 left-10 text-white max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {movie.title}
        </h1>
        <p className="text-sm md:text-base text-gray-300 line-clamp-3">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
