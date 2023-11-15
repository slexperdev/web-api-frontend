import { Spinner } from "@material-tailwind/react";
import React from "react";

export const Button = ({ loading, title, color = "Primary", ...rest }) => {
  return (
    <button
      className={`${
        color === "Primary"
          ? "bg-light-blue-400 text-white"
          : "bg-yellow-400 text-black"
      } p-2 min-w-[150px] rounded-lg flex justify-center items-center`}
      {...rest}
    >
      {loading ? <Spinner className="h-6 w-6" color="white" /> : title}
    </button>
  );
};
