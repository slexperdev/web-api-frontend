import { Constant } from "../../Constant";

export const Card = ({ price, img, title, onClickHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[300px] shadow-lg">
      <div className="h-[200px] overflow-hidden bg-black">
        <img src={img} alt="" className="object-fit" />
      </div>
      <div className="flex  w-full flex-row p-2">
        <p className="antialiased text-lg text-gray-700">{title}</p>
      </div>
      <div className="flex w-full flex-row justify-between items-center  p-2 ">
        <p className="antialiased text-xl text-red-400">
          {Constant.CURRENCY} {price}
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
