import React from "react";
import TechArticle from "./TechArticle.jsx";

const TechCard = ({ stack, title, row, images }) => {
  return (
    <div className=" bg-black/20 hover:bg-black/30 transition duration-300  backdrop-blur-md border-2 border-white w-11/12 p-20 rounded-[120px] rounded-tr-[50px]  rounded-bl-[50px]">
      <img className="w-12 pb-5 brightness-0 invert" src={images} alt="" />
      <h3 className="pb-10 text-4xl font-stack-sans">{title}</h3>
      <TechArticle row={row} />
    </div>
  );
};

export default TechCard;
