import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  watchlist,
  handleAddToWatchList,
  handleRemoveFromWatchList,
}) {
  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="group h-[60vh] w-[250px] bg-center bg-cover rounded-lg hover:scale-105 transform duration-300 hover:cursor-pointer relative m-4 shadow-lg"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {/* Emoji positioned to the top-right corner */}
      {isContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchList(movieObj);
          }}
          className="absolute top-0 right-0 m-4 flex justify-center h-8 w-8 items-center rounded-md bg-gray-800 shadow-md"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddToWatchList(movieObj);
          }}
          className="absolute top-0 right-0 m-4 flex justify-center h-8 w-8 items-center rounded-md bg-gray-800 shadow-md"
        >
          &#128525;
        </div>
      )}

      {/* Movie Title */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg font-semibold text-center p-4 opacity-0 group-hover:opacity-100 duration-300">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
