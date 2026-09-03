import TechCard from "./TechCard.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const Stack = () => {
  const { t } = useLanguage();
  const techTitles = [t.stack.frontend, t.stack.backend, t.stack.tools];

const stackArticle = [
  [
    { name: "HTML5", img: "./stack/html.svg", color: "#E34F26", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { name: "CSS3", img: "./stack/css3.svg", color: "#1572B6", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { name: "JavaScript", img: "./stack/javascript.svg", color: "#F7DF1E", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { name: "React", img: "./stack/react.svg", color: "#61DAFB", url: "https://react.dev" },
    { name: "Astro", img: "./stack/astro.svg", color: "#FF5D01", url: "https://astro.build" },
  ],
  [
    { name: "Node.js", img: "./stack/node-js.svg", color: "#339933", url: "https://nodejs.org" },
    { name: "Java", img: "./stack/java.svg", color: "#007396", url: "https://www.java.com" },
    { name: "SpringBoot", img: "./stack/spring-boot.svg", color: "#6DB33F", url: "https://spring.io/projects/spring-boot" },
    { name: "PHP", img: "./stack/php01.svg", color: "#777BB4", url: "https://www.php.net" },
    { name: "Laravel", img: "./stack/laravel.svg", color: "#FF2D20", url: "https://laravel.com" },
  ],
  [
    { name: "Docker", img: "./stack/docker.svg", color: "#2496ED", url: "https://www.docker.com" },
    { name: "Git", img: "./stack/git.svg", color: "#F05032", url: "https://git-scm.com" },
    { name: "Hostinger", img: "./stack/hostinger.svg", color: "#673DE6", url: "https://www.hostinger.com" },
    { name: "MySQL", img: "./stack/mysql.svg", color: "#4479A1", url: "https://www.mysql.com" },
    { name: "MongoDB", img: "./stack/mongodb.svg", color: "#47A248", url: "https://www.mongodb.com" },
    { name: "Figma", img: "./stack/figma.svg", color: "#F24E1E", url: "https://www.figma.com" },
  ],
];
  const stackImages = ["/other/web.svg", "/other/gear.svg", "/other/tools.svg"];

  return (
    <section
      aria-labelledby="stack-title"
      className="flex text-white flex-col w-11/12 p-20 "
    >
      <h4 className="text-center text-lg font-stack-sans mb-2">
        {t.stack.section}
      </h4>
      <h2
        id="stack-title"
        className=" text-center tracking-tighter item text-5xl font-stack-sans mb-4 pb-20 pl-22 px-10 flex gap-5 justify-center items-center"
      >
        {t.stack.title}
        <svg
          aria-hidden="true"
          focusable="false"
          className="hover:scale-150 transition duration-300 hover:rotate-180"
          width="25"
          height="25"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.36038 12.7556C2.64979 13.8459 4.04395 15.0623 5.26625 14.4184C6.6341 13.6982 8.40619 14.3143 8.84197 15.6704L8.96681 16.0597C9.32471 17.1738 11.1477 17.1149 11.4098 15.9645C11.7273 14.5673 13.5257 13.873 14.8943 14.626C16.0239 15.2471 17.324 14.0807 16.6061 13.0901C15.7631 11.9272 16.4487 10.3887 17.924 10.0206L18.0693 9.98922C19.3662 9.74152 19.4071 8.12766 18.1428 7.82665L17.7011 7.72164C16.1624 7.35495 15.4417 5.7953 16.2369 4.57511C16.9475 3.48476 15.5533 2.26839 14.331 2.91227C12.963 3.63294 11.1895 3.01681 10.7538 1.66032L10.6297 1.27161C10.2719 0.15729 8.44851 0.216022 8.18679 1.36688C7.86922 2.76403 6.07158 3.45774 4.70293 2.70474C3.57328 2.08331 2.27317 3.24992 2.99115 4.24062C3.86127 5.44092 3.10172 7.04163 1.52721 7.34212C0.230669 7.59003 0.189538 9.20371 1.45373 9.5047L1.89476 9.60906C3.43368 9.97545 4.15529 11.5353 3.36038 12.7556Z"
            fill="#F18744"
            stroke="#FFFFFF"
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
    </section>
  );
};

export default Stack;
