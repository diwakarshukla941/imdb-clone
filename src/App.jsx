import "./App.css";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
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
                <Banner />{" "}
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                setWatchList={setWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
