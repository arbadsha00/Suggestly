/* eslint-disable react/prop-types */
import React from "react";
import { FaCommentAlt, FaUserCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { format } from "date-fns";
const Card = ({
  img,
  product,
  queryTitle,
  userName,
  date,
  recCount,
}) => {
  return (
    <div className="card mx-auto card-compact bg-base-100 w-[300px] shadow-xl">
      <figure>
        <img src={img} className="w-[300px] h-[200px] object-cover" alt="" />
      </figure>
      <div className="p-4 space-y-2 ">
        <h2 className="text-2xl font-bold">{product}</h2>
        <div className="flex justify-between items-center w-full text-primary-2 text-sm">
          <p className="flex items-center gap-1 ">
            <FaUserCircle /> {userName}
          </p>
          <p className="flex items-center gap-1 ">
            <IoIosTime /> {format(date, "d-M-yy")}
          </p>
        </div>
        <p className="text-lg font-semibold text-secondary-2">{queryTitle}</p>

        <div className="flex justify-between items-center w-full">
          <button className="btn btn-sm bg-primary text-white hover:bg-secondary">
            Recommend
          </button>
          <p className="flex items-center gap-1 text-secondary-2">
            <FaCommentAlt /> {recCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
