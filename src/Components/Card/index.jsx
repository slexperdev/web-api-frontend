import { Constant } from "../../Constant";
import { getRatingStar } from "../../Util/Common";

export const Card = ({ price, img, title, rating, onClickHandler }) => {
  return (
    <div className="flex flex-col items-center shadow-lg bg-gray-100 lg:w-[300px] rounded-lg overflow-hidden ">
      <img src={img} alt="" className="h-32" />
      <div className="flex  w-full flex-col px-2">
        <p className="antialiased text-lg text-gray-700 capitalize">{title}</p>
        <p className="text-yellow-800">{getRatingStar(rating)}</p>
      </div>
      <div className="flex w-full flex-row justify-between items-center  p-2 ">
        <p className="antialiased text-xl">
          {Constant.CURRENCY} {price?.toLocaleString()}
        </p>

        <a
          className="bg-yellow-400 p-2 max-w-fit px-4 rounded-lg cursor-pointer"
          onClick={onClickHandler}
        >
          Details
        </a>
      </div>
    </div>
  );
};
