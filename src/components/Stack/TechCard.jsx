import TechArticle from "./TechArticle.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const TechCard = ({ title, row, images,rowImage }) => {
  const { t } = useLanguage();

  return (
    <article className="bg-black/15 shadow-2xl hover:bg-black/40 transition-all duration-200 flex flex-col backdrop-blur-md border-2 border-white  hover:border-black/0  w-11/12 max-md:w-full min-w-0 p-10 max-md:p-6 py-20 max-md:py-12 rounded-[120px] max-md:rounded-[3rem] rounded-tr-[50px] rounded-bl-[50px]">
      <img className="w-12  pb-5 brightness-0 invert" src={images} alt={t.stack.technologyCategory.replace("{category}", title)} loading="lazy" decoding="async" />
      <h3 className="pb-10 max-md:pb-6 text-4xl max-md:text-3xl font-stack-sans">{title}</h3>
      <TechArticle row={row} rowImage={rowImage} />
    </article>
  );
};

export default TechCard;
