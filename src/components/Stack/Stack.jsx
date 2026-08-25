import React from "react";
import TechCard from "./TechCard.jsx";

const Stack = () => {
  const techTitles = ["Frontend", "Backend", "Tools"];

  const stackArticle = [
    ["HTML5", "CSS3", "JavaScript", "React", "Astro"],
    ["Node.js", "Java", "SpringBoot", "PHP", "Laravel"],
    ["Docker", "Git", "Hostinger", "MySQL", "MongoDB", "Figma"],
  ];

  const stackImages = [
    "/other/web.svg",
    "/other/gear.svg",
    "/other/tools.svg",
  ];

  return (
    <div className="flex text-white flex-col w-11/12 p-20 ">
      <h4 className="text-center text-lg font-stack-sans mb-2">
        02. <span className="text-amber-200">$ </span> stack
      </h4>
      <h2 className="text-center item text-5xl font-stack-sans mb-4 pb-20 pl-18 px-10 flex gap-5 justify-center items-center">
        Technological Arsenal
        <svg
          className="hover:scale-150 transition duration-300 hover:rotate-180"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.36038 12.7556C2.64979 13.8459 4.04395 15.0623 5.26625 14.4184C6.6341 13.6982 8.40619 14.3143 8.84197 15.6704L8.96681 16.0597C9.32471 17.1738 11.1477 17.1149 11.4098 15.9645C11.7273 14.5673 13.5257 13.873 14.8943 14.626C16.0239 15.2471 17.324 14.0807 16.6061 13.0901C15.7631 11.9272 16.4487 10.3887 17.924 10.0206L18.0693 9.98922C19.3662 9.74152 19.4071 8.12766 18.1428 7.82665L17.7011 7.72164C16.1624 7.35495 15.4417 5.7953 16.2369 4.57511C16.9475 3.48476 15.5533 2.26839 14.331 2.91227C12.963 3.63294 11.1895 3.01681 10.7538 1.66032L10.6297 1.27161C10.2719 0.15729 8.44851 0.216022 8.18679 1.36688C7.86922 2.76403 6.07158 3.45774 4.70293 2.70474C3.57328 2.08331 2.27317 3.24992 2.99115 4.24062C3.86127 5.44092 3.10172 7.04163 1.52721 7.34212C0.230669 7.59003 0.189538 9.20371 1.45373 9.5047L1.89476 9.60906C3.43368 9.97545 4.15529 11.5353 3.36038 12.7556Z"
            fill="#FDD68F"
            stroke="#FDD68F"
          />
        </svg>
      </h2>
      <div className="grid grid-cols-3 gap-10 ">
        {techTitles.map((title, index) => (
          <TechCard
            key={title}
            title={title}
            images={stackImages[index]}
            row={stackArticle[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
