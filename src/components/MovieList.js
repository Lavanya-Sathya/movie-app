import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../redux/movieSlice";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieList = () => {
  const [movieData, setmovieData] = useState([]);
  const [filteredMovieData, setFilteredMovieData] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);
  const data = useSelector((store) => store.movie);

  useEffect(() => {
    if (data.data) {
      const sortedData = [...data.data].sort((a, b) => b.rating - a.rating);
      setmovieData(sortedData);
      setFilteredMovieData(sortedData);
    }
  }, [data]);
  return (
    <div className="w-9/12 md:w-10/12 mx-auto mb-10 pt-32">
      <div className=" text-center mb-4">
        <h1 className="font-bold my-4 text-2xl text-[#ffb703]">Movie List</h1>
        <div className="flex flex-cols sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            className="p-2 border-[1px] rounded-lg focus:outline-none"
            value={isSearch}
            onChange={(e) => setIsSearch(e.target.value)}
          />
          <button
            className="px-2 py-1 bg-[#023047] hover:bg-blue-900 text-white rounded-lg"
            onClick={() => {
              const filterSearch = movieData.filter((item) =>
                item?.movie?.toLowerCase()?.includes(isSearch?.toLowerCase())
              );
              if (filterSearch?.length === 0 || isSearch === "") {
                setFilteredMovieData(movieData);
              } else {
                setFilteredMovieData(filterSearch);
              }
            }}
          >
            Search
          </button>
          <button
            className="px-2 py-1 bg-[#023047] hover:bg-blue-900 text-white rounded-lg"
            onClick={() => {
              setIsSearch("");
              setFilteredMovieData(movieData);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {filteredMovieData?.length === 0 ? (
          <ShimmerCard />
        ) : (
          filteredMovieData?.map((item) => {
            const { id, imdb_url } = item;
            return (
              <a
                href={imdb_url}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MovieCard data={item} />
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;
