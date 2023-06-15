import React from "react";

const PopulerClass = ({ classItem}) => {
  const {_id,className,classImage,seats,price} = classItem
  return (
    <div>
      <div className="card card-compact min-h-full bg-base-400 shadow-xl">
        <figure>
          <img
            src={classImage}
            alt="Shoes"
            className="hover:scale-110 transition"
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-center">{className}</h2>
          <p>Seats: {seats}</p>
          <p> Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">All Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerClass;
