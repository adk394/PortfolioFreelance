import React from "react";

const TechArticle = ({row}) => {
  return (
  <div className=" flex flex-wrap gap-5 ">
    {row.map((tech) => (
      <span className="font-semibold bg-black/10 backdrop-blur-md  p-3 px-3  rounded-[25px]">{tech}</span>
    ))}
  </div>
  );
};


export default TechArticle;
