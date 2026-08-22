import React from "react";

const TechArticle = ({row}) => {
  return (
  <div className=" flex flex-wrap gap-5 ">
    {row.map((tech) => (
      <span className="font-semibold bg-white/10 backdrop-blur-md border-2 border-neutral-800 p-3 px-3  rounded-[25px]">{tech}</span>
    ))}
  </div>
  );
};


export default TechArticle;
