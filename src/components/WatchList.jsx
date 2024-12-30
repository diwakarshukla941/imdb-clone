// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import genreids from "../utility/Genre";

function WatchList({ watchlist, setWatchList , handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState(['All Genres'])

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    watchlist.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchList([...watchlist]);
  };

  let sortDecreasing = () => {
    watchlist.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchList([...watchlist]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  let handleFilter =(genre) =>{
    setCurrentGenre(genre)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return <div  onClick={()=> handleFilter(genre)} className={currentGenre == genre ? "flex items-center justify-center h-12 w-36 bg-blue-400 text-white font-bold rounded-xl mx-2" :"flex items-center justify-center h-12 w-36 bg-gray-400 text-white font-bold rounded-xl mx-2"}>{genre}</div>
        })}
      </div>

      <div className="flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-md"
          placeholder="Search Movies"
        />
      </div>

      <div className="overflow-hidden rounded border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2">
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-up"
                  ></i>
                </div>
                <div className="mt-2 ">Ratings</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
            .filter((movieObj)=>{
              if(currentGenre == 'All Genres'){
                return true
              }else{
                return  genreids[movieObj.genre_ids[0]]  == currentGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2 ">
                    <td className="flex items-center px-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt={movieObj.original_title}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800 hover:cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
