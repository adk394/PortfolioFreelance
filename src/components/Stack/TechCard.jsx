import TechArticle from "./TechArticle.jsx";

const TechCard = ({ title, row, images }) => {
  return (
    <article className=" bg-black/15 hover:bg-black/23 transition duration-300  backdrop-blur-md border-2 border-white w-11/12 p-20 rounded-[120px] rounded-tr-[50px]  rounded-bl-[50px]">
      <img className="w-12  pb-5 brightness-0 invert" src={images} alt={`${title} technology category`} />
      <h3 className="pb-10 text-4xl font-stack-sans">{title}</h3>
      <TechArticle row={row} />
    </article>
  );
};

export default TechCard;
