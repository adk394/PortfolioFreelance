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
        <button className="text-black   flex justify-center items-center font-semibold rounded-full h-1/5">
          <svg
            onClick={anterior}
            width="50"
            height="50"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5307 22.9694C19.6004 23.0391 19.6557 23.1218 19.6934 23.2129C19.7311 23.3039 19.7505 23.4015 19.7505 23.5001C19.7505 23.5986 19.7311 23.6962 19.6934 23.7872C19.6557 23.8783 19.6004 23.961 19.5307 24.0307C19.461 24.1004 19.3783 24.1556 19.2873 24.1933C19.1962 24.2311 19.0986 24.2505 19.0001 24.2505C18.9016 24.2505 18.804 24.2311 18.7129 24.1933C18.6219 24.1556 18.5392 24.1004 18.4695 24.0307L10.9695 16.5307C10.8997 16.461 10.8444 16.3783 10.8067 16.2873C10.7689 16.1962 10.7495 16.0986 10.7495 16.0001C10.7495 15.9015 10.7689 15.8039 10.8067 15.7128C10.8444 15.6218 10.8997 15.5391 10.9695 15.4694L18.4695 7.96943C18.6102 7.8287 18.8011 7.74963 19.0001 7.74963C19.1991 7.74963 19.39 7.8287 19.5307 7.96943C19.6715 8.11016 19.7505 8.30103 19.7505 8.50005C19.7505 8.69907 19.6715 8.88995 19.5307 9.03068L12.5604 16.0001L19.5307 22.9694Z"
              fill="white"
            />
            <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.2" />
          </svg>
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
              {proyectoActual.title}{" "}
              <span className="" style={{ color: `${proyectoActual.color}` }}>
                .
              </span>{" "}
              <span className="text-lg">{indice + 1}</span>
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
        <button className="text-black flex justify-center items-center font-semibold rounded-full h-1/5">
          <svg
            onClick={siguiente}
            width="50"
            height="50"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0306 16.5307L13.5306 24.0307C13.4609 24.1004 13.3781 24.1556 13.2871 24.1933C13.1961 24.2311 13.0985 24.2505 12.9999 24.2505C12.9014 24.2505 12.8038 24.2311 12.7128 24.1933C12.6217 24.1556 12.539 24.1004 12.4693 24.0307C12.3996 23.961 12.3443 23.8783 12.3066 23.7872C12.2689 23.6962 12.2495 23.5986 12.2495 23.5001C12.2495 23.4015 12.2689 23.3039 12.3066 23.2129C12.3443 23.1218 12.3996 23.0391 12.4693 22.9694L19.4396 16.0001L12.4693 9.03068C12.3286 8.88995 12.2495 8.69907 12.2495 8.50005C12.2495 8.30103 12.3286 8.11016 12.4693 7.96943C12.61 7.8287 12.8009 7.74963 12.9999 7.74963C13.199 7.74963 13.3898 7.8287 13.5306 7.96943L21.0306 15.4694C21.1003 15.5391 21.1556 15.6218 21.1933 15.7128C21.2311 15.8039 21.2505 15.9015 21.2505 16.0001C21.2505 16.0986 21.2311 16.1962 21.1933 16.2873C21.1556 16.3783 21.1003 16.461 21.0306 16.5307Z"
              fill="white"
            />
            <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
