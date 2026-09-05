import React from "react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const stack = [
  {
    title: "React",
    img: "./stack/react.svg",
  },
  {
    title: "MongoDB",
    img: "./stack/mongodb.svg",
  },
  {
    title: "Docker",
    img: "./stack/docker.svg",
  },
  {
    title: "SpringBoot",
    img: "./stack/spring-boot.svg",
  },
  {
    title: "CSS3",
    img: "./stack/css3.svg",
  },
  {
    title: "HTML5",
    img: "./stack/html.svg",
  },
  {
    title: "JavaScript",
    img: "./stack/javascript.svg",
  },
  {
    title: "Git",
    img: "./stack/git.svg",
  },
  {
    title: "Java",
    img: "./stack/java.svg",
  },
  {
    title: "PHP",
    img: "./stack/php01.svg",
  },
  {
    title: "MySQL",
    img: "./stack/mysql.svg",
  },
  {
    title: "NodeJS",
    img: "./stack/node-js.svg",
  },
  {
    title: "Laravel",
    img: "./stack/laravel.svg",
  },
];

const projects = [
  {
    title: "Echo",
    color: "#FF7700",
    colorGradient: "#EA9469",
    pointColor: "#FFD3B3",
    image: "./projects/Echo.png",
    repo: "https://github.com/adk394/Echo",
    usedStack: [stack[0], stack[1], stack[3], stack[4], stack[2]],
    descriptionOverlayKey: "echoOverview",
    descriptionTechKey: "echoTech",
  },
  {
    title: "Bookora",
    color: "#316649",
    colorGradient: "#568552",
    pointColor: "#D7FFFD",
    image: "./projects/Bookora.png",
    repo: "https://github.com/adk394/Bookora",
    usedStack: [stack[1], stack[0], stack[10], stack[4], stack[2]],
    descriptionOverlayKey: "bookoraOverview",
    descriptionTechKey: "bookoraTech",
  },
  {
    title: "Faculty",
    color: "#6967FF",
    colorGradient: "#6967FF",
    pointColor: "#C4C5FF",
    image: "./projects/Faculty.png",
    repo: "https://github.com/adk394/Faculty",
    usedStack: [stack[12], stack[9], stack[1], stack[10], stack[2]],
    descriptionOverlayKey: "facultyOverview",
    descriptionTechKey: "facultyTech",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [indice, setIndice] = useState(0);
  const [textIndex, setTextIndex] = useState(1);

  const overviewTextButton = () => {
    setTextIndex(1);
  };

  const techTextButton = () => {
    setTextIndex(0);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % projects.length);
  };

  const proyectoActual = projects[indice];

  return (
    <div className="flex  flex-col  justify-center items-center  w-11/12  ">
      <h4 className="text-lg text-white  font-stack-sans  mb-2">
        {t.projects.section}
      </h4>

      <h3
        id="projects-title"
        className="pl-20 px-10 text-5xl text-white font-stack-sans mb-4 flex gap-5 pb-20 justify-center items-center"
      >
        {t.projects.title}
        <svg
          aria-hidden="true"
          focusable="false"
          className="hover:scale-150 transition duration-300 hover:rotate-180"
          width="25"
          height="25"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25229 11.963C2.45357 13.2735 4.09003 14.7013 5.55993 13.9764C6.9582 13.2869 8.73239 13.8077 9.37179 15.1089L9.57062 15.5139C10.1881 16.7712 12.3049 16.491 12.4781 15.1139C12.6587 13.6783 14.2878 12.747 15.8395 13.1996C17.3259 13.6331 18.4869 12.0235 17.4151 11.015L17.2642 10.873C16.1557 9.83005 16.3786 8.15493 17.7159 7.35402C19.0624 6.54727 18.3665 4.70313 16.7792 4.76294L16.3756 4.77869C14.7726 4.83895 13.4499 3.6848 13.4955 2.26582L13.5076 1.90852C13.5531 0.503413 11.4592 -0.086487 10.5663 1.11614C9.67988 2.31037 7.7899 2.53103 6.59572 1.56499L6.43317 1.43346C5.27838 0.499268 3.47544 1.54893 3.98629 2.85796C4.51956 4.2243 3.48977 5.67861 1.86998 5.85851C0.316138 6.03102 0.0290472 7.90761 1.45855 8.4363L1.91831 8.60589C3.39818 9.1532 4.01203 10.7162 3.25229 11.963Z"
            fill="#EAC06D"
            stroke="#FFFFFF"
          />
        </svg>
      </h3>
      <div className="relative shadow-2xl  w-full z-50">
        {/* El grupo entero de puntos, anclado a esa línea */}
        <div className="absolute  top-0 left-0 w-full -translate-y-1/2 flex justify-center items-center gap-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              style={{ backgroundColor: "white" }}
              className={` transition-all duration-300 h-6 w-6 rounded-full ${
                i === indice ? "opacity-100 scale-130" : "opacity-40 scale-90 "
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className=" text-white shadow-2xl font-stack-sans transition-all bg-black/10 hover:bg-black/23 duration-300 backdrop-blur-lg border-2 border-white w-11/12 px-5 py-20 rounded-[120px] items-center  grid grid-cols-16  gap-10 ">
        <button
          type="button"
          onClick={anterior}
          aria-label={t.projects.previous}
          className="text-black   flex justify-center items-center font-semibold rounded-full h-1/5"
        >
          <svg
            aria-hidden="true"
            focusable="false"
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
        <div className="text-center   grid  gap-30 justify-center items-center grid-cols-2 col-span-14">
          <div className="flex flex-col  justify-end w-full h-105 justify-self-center overflow-hidden bg-black/20  0 rounded-[60px] ">
            <div
              style={{
                background: ` linear-gradient(to bottom, ${proyectoActual.colorGradient}, black)`,
              }}
              className={` flex h-full justify-end items-end  overflow-hidden`}
            >
              <img
                src={proyectoActual.image}
                alt={t.projects.previewAlt.replace("{project}", proyectoActual.title)}
                className="transition-all duration-300 hover:scale-110  rounded-2xl relative top-8 object-cover h-12/13 justify-end"
              />
            </div>
            <div className="flex px-20 justify-center content-end  gap-5 py-5 h-25 border-2 border-white/0  ">
              {proyectoActual.usedStack.map((tech) => (
                <div
                  key={tech.title}
                  className="bg-white rounded-2xl p-3 flex justify-center items-center overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={tech.img}
                    alt={`${tech.title} logo`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="justify-self-center   w-11/12 text-left gap-y-10 flex flex-col">
            <div className="flex flex-row gap-15 items-center">
              <h3 className="font-stack-sans text-5xl mb-5">
                {proyectoActual.title}{" "}
                <span className="" style={{ color: `${proyectoActual.color}` }}>
                  .
                </span>{" "}
                <span className="text-lg">{indice + 1}</span>
              </h3>
              <div className="flex flex-row gap-5">
                <button
                  onClick={overviewTextButton}
                  className={`transition-all border border-white duration-300 py-1  px-5 rounded-xl text-black ${!textIndex ? " bg-white/0 border border-white text-white" : "bg-white"}`}
                >
                  {t.projects.overview}
                </button>
                <button
                  onClick={techTextButton}
                  className={` transition-all border border-white duration-300 py-1  px-5 rounded-xl text-black ${!textIndex ? "bg-white" : "bg-white/0 border border-white text-white"}`}
                >
                  {t.projects.tech}
                </button>
              </div>
            </div>
            <div className="text-xl font-light overscroll-auto overflow-auto min-h-30 scrollbar-auto">
              <div className="flex flex-col overflow-auto overscroll-auto min-h-60 max-h-60 scrollbar-thin scrollbar-thumb-white/40 gap-5">
                {(t.projects[textIndex ? proyectoActual.descriptionOverlayKey : proyectoActual.descriptionTechKey]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-row  gap-x-10">
              <button
                type="button"
                aria-label={t.projects.previewAria.replace("{project}", proyectoActual.title)}
                className="font-light transition duration-300  hover:scale-110 gap-2 flex flex-row justify-center items-center  text-2xl overflow-hidden z-20 cursor-pointer bg-white text-black px-10 py-3 rounded-xl "
                data-cursor-text={t.projects.previewUnavailable}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7 8.1375C21.7 8.3773 21.6047 8.60728 21.4352 8.77684C21.2656 8.94641 21.0356 9.04167 20.7958 9.04167C20.556 9.04167 20.3261 8.94641 20.1565 8.77684C19.9869 8.60728 19.8917 8.3773 19.8917 8.1375V3.08773L12.395 10.5855C12.2253 10.7552 11.9952 10.8505 11.7553 10.8505C11.5154 10.8505 11.2853 10.7552 11.1156 10.5855C10.9459 10.4159 10.8506 10.1858 10.8506 9.94583C10.8506 9.7059 10.9459 9.47579 11.1156 9.30614L18.6123 1.80833H13.5625C13.3227 1.80833 13.0927 1.71307 12.9232 1.54351C12.7536 1.37394 12.6583 1.14397 12.6583 0.904167C12.6583 0.664367 12.7536 0.434389 12.9232 0.264824C13.0927 0.0952603 13.3227 0 13.5625 0H20.7958C21.0356 0 21.2656 0.0952603 21.4352 0.264824C21.6047 0.434389 21.7 0.664367 21.7 0.904167V8.1375ZM17.1792 10.85C16.9394 10.85 16.7094 10.9453 16.5398 11.1148C16.3703 11.2844 16.275 11.5144 16.275 11.7542V19.8917H1.80833V5.425H9.94583C10.1856 5.425 10.4156 5.32974 10.5852 5.16018C10.7547 4.99061 10.85 4.76063 10.85 4.52083C10.85 4.28103 10.7547 4.05106 10.5852 3.88149C10.4156 3.71193 10.1856 3.61667 9.94583 3.61667H1.80833C1.32873 3.61667 0.868777 3.80719 0.529648 4.14632C0.19052 4.48544 0 4.9454 0 5.425V19.8917C0 20.3713 0.19052 20.8312 0.529648 21.1704C0.868777 21.5095 1.32873 21.7 1.80833 21.7H16.275C16.7546 21.7 17.2146 21.5095 17.5537 21.1704C17.8928 20.8312 18.0833 20.3713 18.0833 19.8917V11.7542C18.0833 11.5144 17.9881 11.2844 17.8185 11.1148C17.6489 10.9453 17.419 10.85 17.1792 10.85Z"
                    fill="black"
                  />
                </svg>
                {t.projects.preview}
              </button>
              <button
                type="button"
                aria-label={t.projects.openRepo.replace("{project}", proyectoActual.title)}
                style={{ boxShadow: `8px 5px 0px 0px ${proyectoActual.color}` }}
                className="active:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] transition duration-400  hover:scale-110 font-semibold bg-white rounded-xl  py-3 px-4 "
                onClick={() => window.open(proyectoActual.repo, "_blank")}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
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
          type="button"
          onClick={siguiente}
          aria-label={t.projects.next}
          className="text-black flex justify-center items-center font-semibold rounded-full h-1/5"
        >
          <svg
            aria-hidden="true"
            focusable="false"
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
