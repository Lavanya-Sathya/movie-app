import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/favoriteSlice";
const MovieCard = (props) => {
  const item = props?.data;
  const { id, image, movie, rating } = item;

  const [isFav, setIsFav] = useState(false);
  const favList = useSelector((store) => store.favorite.items);
  const dispatch = useDispatch();
  const handleAddFav = (item) => {
    dispatch(addItem(item));
    setIsFav(!isFav);
  };
  useEffect(() => {
    const fav = favList?.findIndex((item) => item?.id === id);
    if (fav === -1) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }, [favList, id]);

  return (
    <div className="w-[210px] h-[195px] hover:scale-95 my-2 rounded-lg  ring-1 ring-slate-900/5 shadow-md bg-[#023047] text-[#aaa]">
      <div className=" border-b-[1px]">
        <p className="p-2 break-words ">{image}</p>
        {/* <img
          src={image}
          alt="movie"
          className="w-[250px] md:w-[210px] h-[210px] rounded-tr-lg rounded-tl-lg shadow-md"
        /> */}
      </div>
      <div className="p-2">
        <h1 className="font-bold text-base text-white mb-3">{movie}</h1>
        <div className="flex justify-between items-center">
          <p className="flex items-center justify-center gap-1">
            <FaStar size={15} className="text-green-600" /> {rating}
          </p>
          <button
            className={`  px-4 py-1 rounded-lg hover:bg-yellow-200 ${
              isFav ? "bg-[#ffb703] text-white" : "bg-gray-50"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleAddFav(item);
            }}
          >
            Fav
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
