import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { clearItems } from "../redux/favoriteSlice";

const FavoriteList = () => {
  const dispatch = useDispatch();
  //   Clear all items from favorite list
  const clearFavList = () => {
    dispatch(clearItems());
  };
  //   load favorite items from redux
  const fav = useSelector((store) => store.favorite.items);
  return fav?.length === 0 ? (
    <div className=" pt-32 flex flex-col justify-center items-center ">
      <h1 className="font-bold text-xl text-[#023047]">
        Create your Favorite movie List
      </h1>
      <button className="px-4 py-2 bg-[#023047] my-3 rounded-lg text-white hover:bg-blue-900">
        <Link to="/">Create</Link>
      </button>
    </div>
  ) : (
    <div className="w-9/12 md:w-10/12 mx-auto mb-10 pt-32">
      <div className="text-center mb-4">
        <h1 className="font-bold my-4 text-2xl text-[#ffb703]">
          Favorite List
        </h1>
        <button
          className="px-4 py-2 bg-[#023047] hover:bg-blue-900 text-white rounded-lg"
          onClick={clearFavList}
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {fav?.map((item) => {
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
        })}
      </div>
    </div>
  );
};

export default FavoriteList;
