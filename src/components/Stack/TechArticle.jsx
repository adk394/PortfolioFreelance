import React from "react";

const TechArticle = ({ row }) => {
  return (
    <div className=" flex flex-wrap gap-5 cursor-pointer ">
      {row.map((tech) => (
        <span
          onClick={() => window.open(tech.url)}
          style={{ "--tech-color": tech.color }}
          className="transition-all duration-300 font-semibold hover:bg-[var(--tech-color)]/70  gap-3 flex flex-row justify-center items-center bg-black/10 backdrop-blur-md  p-3 px-3  rounded-[25px]"
        >
          <img className="h-4 w-4 brightness-0 invert" src={tech.img} alt="" />

          {tech.name}
        </span>
      ))}
    </div>
  );
};

export default TechArticle;
