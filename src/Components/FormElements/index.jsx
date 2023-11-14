import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const TextField = ({
  label,
  type,
  secured = false,
  onClick,
  name,
  ...rest
}) => {
  return (
    <div className="relative flex flex-col gap-2 ">
      {label && (
        <label
          htmlFor={name}
          className="antialiased text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        className="antialiased border border-gray-300 rounded-lg p-2 focus:outline-light-blue-400 placeholder:text-gray-500 font-light"
        name={name}
        type={type}
        {...rest}
      />
      {secured && (
        <a
          className="absolute top-10 right-2 text-xs"
          onClick={() => onClick()}
        >
          {type === "password" ? (
            <EyeIcon className="h-5 w-5 text-gray-700" />
          ) : (
            <EyeSlashIcon className="h-5 w-5 text-gray-700" />
          )}
        </a>
      )}
    </div>
  );
};

export const Dropdown = ({ label, placeholder, data, ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor="departure"
          className="antialiased text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        name="departure"
        id=""
        className="antialiased capitalize p-[10px] rounded-lg border border-gray-300 font-light focus:outline-light-blue-400"
        {...rest}
      >
        <option disabled selected>
          {placeholder}
        </option>
        {data?.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
