import { Drawer } from "@material-tailwind/react";

import { useGetCartQuery } from "../../Services/CartService";

import { Button } from "../Button";
import { Constant } from "../../Constant";

export const Cart = ({ open, onClose }) => {
  const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);
  const { data, isLoading } = useGetCartQuery(agentId);

  console.log("data", data);
  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      className="p-4 bg-white"
      size={400}
    >
      <p className="text-2xl font-semibold uppercase">Cart</p>
      <div className="mb-6 mt-5 flex flex-col scroll-auto max-h-[600px] overflow-y-auto">
        {/* <p className="text-2xl uppercase">Cart</p> */}
        {data.cruises?.length !== 0 && (
          <div className="mt-5">
            <p className="text-light-blue-400 uppercase">Cruise Reservations</p>
            <div className="border-b border-b-gray-200 mt-2" />
            <div className="flex justify-between p-4">
              <p className="">Cruise</p>
              <p>Price</p>
            </div>
            <div className="flex flex-col gap-2">
              {data?.cruises.map((item, key) => (
                <div className="flex justify-between px-4 py-2 bg-gray-100 items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">7 Days BAHAMAS</p>
                    <p className="text-xs">Meal Preference : Meats</p>
                    <p className="text-xs">Cabin Class : Luxury</p>
                  </div>
                  <p className="text-red-500">$ 200</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.activities?.length !== 0 && (
          <div className="mt-5">
            <p className="text-light-blue-400 uppercase">
              Activity Reservations
            </p>
            <div className="border-b border-b-gray-200 mt-2" />
            <div className="flex justify-between p-4">
              <p className="">Activity</p>
              <p>Price</p>
            </div>
            <div className="flex flex-col gap-2">
              {data?.activities.map((item, key) => (
                <div className="flex justify-between px-4 py-2 bg-gray-100 items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">7 Days BAHAMAS</p>
                    <p className="text-xs">Meal Preference : Meats</p>
                    <p className="text-xs">Cabin Class : Luxury</p>
                  </div>
                  <p className="text-red-500">$ 200</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.packages?.length !== 0 && (
          <div className="mt-5">
            <p className="text-light-blue-400 uppercase">
              Package Reservations
            </p>
            <div className="border-b border-b-gray-200 mt-2" />
            <div className="flex justify-between p-4">
              <p className="">Package</p>
              <p>Price</p>
            </div>
            <div className="flex flex-col gap-2">
              {data?.packages.map((item, key) => (
                <div className="flex justify-between px-4 py-2 bg-gray-100 items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">7 Days BAHAMAS</p>
                    <p className="text-xs">Meal Preference : Meats</p>
                    <p className="text-xs">Cabin Class : Luxury</p>
                  </div>
                  <p className="text-red-500">$ 200</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Button title="Checkout" />
    </Drawer>
  );
};
