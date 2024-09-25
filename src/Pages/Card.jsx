/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const {
    id,
    title,
    image,
    category,

    card_color,
    category_background_color,
    text_color,
  } = data;
  return (
    <Link
      to={`/DonationDetails/${data.id}`}
      key={id}
      className=" w-[300px] h-[320px] rounded justify-center mx-auto "
      style={{ backgroundColor: category_background_color }}
    >
      <div className=" flex w-[100%] h-[200px] ">
        <img className="w-full " src={image} />
      </div>

      <h2
        className="block py-1 px-2 w-28 rounded m-4 font-semibold text-xl text-sm"
        style={{ backgroundColor: card_color, color: text_color }}
      >
        {category}
      </h2>
      <h1 className="text-2xl font-bold p-2" style={{ color: text_color }}>
        {title}
      </h1>
    </Link>
  );
};

export default Card;
