import React from "react";
import { useState } from "react";

const stack = [
  {
    title: "React",
    img: "react",
  },
  {
    title: "MongoDB",
    img: "MongoDB",
  },
  {
    title: "Docker",
    img: "Docker",
  },
  {
    title: "SpringBoot",
    img: "SpringBoot",
  },
];

const projects = [
  {
    title: "ECHO",
    color: "#FF7700",
    image: "a",
    description:
      "A ECHO and TV show discovery app built on top of The Movie Database (TMDB) API. Users can browse trending titles and open detailed views with synopsis, ratings, cast and more. Fluid carousels and smooth motion-driven transitions make exploring the catalog feel effortless across devices.",
  },
  {
    title: "SpringB",
    color: "#009DFF",
    image: "a",
    description:
      "A SpringB and TV show discovery app built on top of The Movie Database (TMDB) API. Users can browse trending titles and open detailed views with synopsis, ratings, cast and more. Fluid carousels and smooth motion-driven transitions make exploring the catalog feel effortless across devices.",
  },
  {
    title: "Faculty",
    color: "#00D28F",
    image: "a",
    description:
      "A Faculty and TV show discovery app built on top of The Movie Database (TMDB) API. Users can browse trending titles and open detailed views with synopsis, ratings, cast and more. Fluid carousels and smooth motion-driven transitions make exploring the catalog feel effortless across devices.",
  },
  {
    title: "ThunderFuel",
    color: "#AA76F3",
    image: "A",
    description:
      "A ThunderFuel and TV show discovery app built on top of The Movie Database (TMDB) API. Users can browse trending titles and open detailed views with synopsis, ratings, cast and more. Fluid carousels and smooth motion-driven transitions make exploring the catalog feel effortless across devices.",
  },
];

export default function Projects() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % projects.length);
  };

  const proyectoActual = projects[indice];

  return (
    <div className="flex  flex-col  justify-center items-center  w-11/12  ">
      <h4 className="text-lg text-white font-stack-sans  mb-2">
        01. <span className="text-rose-300">$ </span>projects
      </h4>
      <h3 className="pl-20 px-10 text-5xl text-white font-stack-sans mb-4 flex gap-5 pb-20 justify-center items-center">
        Personal projects
        <svg
          className="hover:scale-150 transition duration-300 hover:rotate-180"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25229 11.963C2.45357 13.2735 4.09003 14.7013 5.55993 13.9764C6.9582 13.2869 8.73239 13.8077 9.37179 15.1089L9.57062 15.5139C10.1881 16.7712 12.3049 16.491 12.4781 15.1139C12.6587 13.6783 14.2878 12.747 15.8395 13.1996C17.3259 13.6331 18.4869 12.0235 17.4151 11.015L17.2642 10.873C16.1557 9.83005 16.3786 8.15493 17.7159 7.35402C19.0624 6.54727 18.3665 4.70313 16.7792 4.76294L16.3756 4.77869C14.7726 4.83895 13.4499 3.6848 13.4955 2.26582L13.5076 1.90852C13.5531 0.503413 11.4592 -0.086487 10.5663 1.11614C9.67988 2.31037 7.7899 2.53103 6.59572 1.56499L6.43317 1.43346C5.27838 0.499268 3.47544 1.54893 3.98629 2.85796C4.51956 4.2243 3.48977 5.67861 1.86998 5.85851C0.316138 6.03102 0.0290472 7.90761 1.45855 8.4363L1.91831 8.60589C3.39818 9.1532 4.01203 10.7162 3.25229 11.963Z"
            fill="#E39D9E"
            stroke="#F0E5CD"
          />
        </svg>
      </h3>

      <div className="text-white font-stack-sans transition-all bg-black/20 hover:bg-black/30 duration-300 backdrop-blur-md border-2 border-white w-11/12 p-20 rounded-[120px] items-center  grid grid-cols-16  gap-10 ">
        <button
          className="text-black bg-amber-50  flex justify-center items-center font-semibold rounded-full h-1/5"
          onClick={anterior} 
        >
          {"<"}
        </button>
        <div className="text-center  grid  gap-30 justify-center items-center grid-cols-2 col-span-14">
          <div className="flex flex-col  h-full justify-self-center bg-white/10 w-11/12 rounded-[80px] border-2 border-white ">
            <img src="" alt="" className=" h-3/4  rounded-[80px] " />
            <div className="text-left px-20 py-5 h-1/4 border-2 border-white/0  border-t-white">
              hola
            </div>
          </div>

          <div className="justify-self-center w-10/12 text-left gap-y-10 flex flex-col">
            <h3 className="font-stack-sans text-5xl mb-5">
              {proyectoActual.title} <span className="" style={{color: `${proyectoActual.color}`}}>.</span> <span className="text-lg">{indice + 1}</span>
            </h3>
            <p className="text-xl font-light ">{proyectoActual.description}</p>
            <div className="flex flex-row  gap-x-10">
              <button className="font-light transition duration-300  hover:scale-110 gap-2 flex flex-row justify-center items-center  text-2xl overflow-hidden z-20 cursor-pointer bg-white text-black px-10 py-3 rounded-xl ">
                Preview
              </button>

              <button
                style={{ boxShadow: `8px 5px 0px 0px ${proyectoActual.color}` }}
                className="active:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] transition duration-400  hover:scale-110 font-semibold bg-white rounded-xl  py-3 px-4 "
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5 0C27.1652 0 35 8.03238 35 17.9426C35 25.8684 29.9915 32.5919 23.0422 34.9667C22.155 35.1434 21.84 34.5831 21.84 34.1053C21.84 33.5138 21.861 31.5819 21.861 29.1809C21.861 27.5079 21.301 26.416 20.6728 25.8595C24.57 25.415 28.665 23.8976 28.665 17.0061C28.665 15.0461 27.986 13.4467 26.8625 12.1902C27.0445 11.7369 27.6447 9.91192 26.691 7.44092C26.691 7.44092 25.2245 6.96014 21.8837 9.28064C20.4855 8.88339 18.9875 8.68351 17.5 8.67651C16.0125 8.68351 14.5163 8.88339 13.1198 9.28064C9.7755 6.96014 8.3055 7.44092 8.3055 7.44092C7.35525 9.91192 7.9555 11.7369 8.13575 12.1902C7.0175 13.4467 6.33326 15.0461 6.33326 17.0061C6.33326 23.8801 10.4195 25.4208 14.3063 25.874C13.8058 26.322 13.3525 27.1123 13.195 28.2726C12.1975 28.7311 9.6635 29.5246 8.1025 26.7823C8.1025 26.7823 7.17675 25.0584 5.41975 24.9324C5.41975 24.9324 3.7135 24.9097 5.30075 26.0227C5.30075 26.0227 6.447 26.574 7.24325 28.6477C7.24325 28.6477 8.27051 31.8501 13.139 30.7651C13.1478 32.2649 13.1635 33.6783 13.1635 34.1053C13.1635 34.5796 12.8415 35.1346 11.9682 34.9684C5.01374 32.5971 0 25.8701 0 17.9426C0 8.03238 7.8365 0 17.5 0Z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          className="text-black bg-amber-50  flex justify-center items-center font-semibold rounded-full h-1/5"
          onClick={siguiente} 
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
