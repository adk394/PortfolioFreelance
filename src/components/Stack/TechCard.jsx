import React from "react";
import TechArticle from "./TechArticle.jsx";

const TechCard = ({ stack, title, row, images }) => {
  return (
    <div className=" bg-white/30 hover:bg-white/60 transition duration-300  backdrop-blur-md border-2 border-primaryGreen-100 w-11/12 p-20 rounded-[120px]">
      <img className="w-12 pb-5" src={images} alt="" />
      <h3 className="pb-10 text-4xl font-francois-one">{title}</h3>
      <TechArticle row={row} />
    </div>
  );
};

export default TechCard;
