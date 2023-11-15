import { Drawer } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import {
  useGetCartQuery,
  useCheckoutMutation,
} from "../../Services/CartService";

import { Button } from "../Button";
import { Constant } from "../../Constant";
import { toast } from "react-toastify";

export const Cart = ({ open, onClose }) => {
  const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);

  const { data, isLoading, refetch } = useGetCartQuery(agentId);
  const [checkout, { error, isLoading: checkoutLoading }] =
    useCheckoutMutation();

  const handleCheckout = async () => {
    try {
      const data = {
        travelAgentId: agentId,
      };
      const res = await checkout({ data });

      if (res.data.status) {
        toast.success("Checkout Successful ");
        refetch();
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  console.log("data", data);
  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      className="p-4 bg-white"
      size={400}
    >
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold uppercase">Cart</p>
        <a onClick={onClose}>
          <XMarkIcon className="h-8 w-8" />
        </a>
      </div>
      <div className="mb-6 mt-5 flex flex-col scroll-auto max-h-[600px] overflow-y-auto">
        {/* <p className="text-2xl uppercase">Cart</p> */}
        {data?.cruises?.length !== 0 && (
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
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs">
                      Meal Preference : {item.mealPreferences}
                    </p>
                    <p className="text-xs">
                      Cabin Class : {item.cabinSelection}
                    </p>
                  </div>
                  <p className="text-red-500">
                    {Constant.CURRENCY} {item.price}
                  </p>
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
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs">
                      Number of Participants : {item.numberOfParticipants}
                    </p>
                    <p className="text-xs">
                      Age of Participants : {item.ageOfParticipants}
                    </p>
                  </div>
                  <p className="text-red-500">
                    {" "}
                    {Constant.CURRENCY} {item.price}
                  </p>
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
                    <p className="text-sm">{item.title}</p>
                  </div>
                  <p className="text-red-500">
                    {" "}
                    {Constant.CURRENCY} {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between mb-3 px-2">
        <p className="text-2xl text-black">Total</p>
        <p className="text-2xl text-light-blue-500">
          {Constant.CURRENCY} {data?.total}
        </p>
      </div>
      <Button
        title="Checkout"
        onClick={handleCheckout}
        loading={checkoutLoading}
      />
    </Drawer>
  );
};
