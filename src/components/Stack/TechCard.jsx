import TechArticle from "./TechArticle.jsx";

const TechCard = ({ title, row, images,rowImage }) => {
  return (
    <article className=" bg-black/15  hover:bg-black/40 transition-all duration-200 flex flex-col backdrop-blur-md border-2 border-white hover:w-full hover:justify-center hover:py-24 hover:p-9   w-11/12 p-10 py-20 rounded-[120px] rounded-tr-[50px]  rounded-bl-[50px]">
      <img className="w-12  pb-5 brightness-0 invert" src={images} alt={`${title} technology category`} />
      <h3 className="pb-10 text-4xl font-stack-sans">{title}</h3>
      <TechArticle row={row} rowImage={rowImage} />
    </article>
  );
};

export default TechCard;
