import { Drawer } from "@material-tailwind/react";
import { XMarkIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

import {
  useGetCartQuery,
  useCheckoutMutation,
  useRemoveCartItemMutation,
} from "../../Services/CartService";

import { Button } from "../Button";
import { Constant } from "../../Constant";
import { toast } from "react-toastify";

export const Cart = ({ open, onClose }) => {
  const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);

  const { data, isLoading, refetch } = useGetCartQuery(agentId);
  const [checkout, { error, isLoading: checkoutLoading }] =
    useCheckoutMutation();
  const [
    removeCartItem,
    { error: cartRemoveError, isLoading: isLoadingRemove },
  ] = useRemoveCartItemMutation();

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

  const handleCartItemRemove = async (itemId) => {
    const cartId = data._id;
    const res = await removeCartItem({ cartId, itemId });
    console.log("remove res:", res);
  };

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
      {data?.cruises?.length !== 0 ||
      data?.activities?.length !== 0 ||
      data?.packages?.length !== 0 ? (
        <>
          <div className="mb-6 mt-5 flex flex-col scroll-auto lg:max-h-[600px] sm:max-h-[500px] overflow-y-auto">
            {data?.cruises?.length !== 0 && (
              <div className="mt-5">
                <p className="text-gray-800 uppercase">Cruise Reservations</p>

                <div className="flex justify-between p-4">
                  <p className="text-light-blue-400">Cruise</p>
                  <p className="text-light-blue-400">
                    Price {Constant.CURRENCY}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-1">
                  {data?.cruises.map((item, key) => (
                    <div
                      className="relative flex justify-between px-4 py-2 shadow-lg bg-yellow-400 items-center rounded-lg"
                      key={key}
                    >
                      <a
                        onClick={() => handleCartItemRemove(item._id)}
                        className="absolute left-[-6px] top-[-10px]"
                      >
                        <MinusCircleIcon
                          className="h-6 w-6 text-red-300"
                          strokeWidth={2}
                        />
                      </a>
                      <div className="flex flex-col gap-1">
                        <p className="text-lg capitalize">{item.title}</p>
                        <p className="text-xs max-w-[250px] text-gray-600">
                          Meal Preference : {item.mealPreferences}
                        </p>
                        <p className="text-xs text-gray-600">
                          Cabin Class : {item.cabinSelection}
                        </p>
                      </div>
                      <p className="text-black">
                        {item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data?.activities?.length !== 0 && (
              <div className="mt-5">
                <p className="text-gray-800 uppercase">Activity Reservations</p>

                <div className="flex justify-between p-4">
                  <p className="text-light-blue-400">Activity</p>
                  <p className="text-light-blue-400">
                    Price {Constant.CURRENCY}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-1">
                  {data?.activities.map((item, key) => (
                    <div
                      className="relative flex justify-between px-4 py-2 shadow-lg bg-yellow-400 items-center rounded-lg"
                      key={key}
                    >
                      <a
                        onClick={() => handleCartItemRemove(item._id)}
                        className="absolute left-[-6px] top-[-10px]"
                      >
                        <MinusCircleIcon
                          className="h-6 w-6 text-red-300"
                          strokeWidth={2}
                        />
                      </a>
                      <div className="flex flex-col gap-1">
                        <p className="text-lg capitalize">{item.title}</p>
                        <p className="text-xs text-gray-600">
                          Number of Participants : {item.numberOfParticipants}
                        </p>
                        <p className="text-xs text-gray-600">
                          Age of Participants : {item.ageOfParticipants}
                        </p>
                      </div>
                      <p className="text-black">
                        {item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data?.packages?.length !== 0 && (
              <div className="mt-5 mb-4">
                <p className="text-gray-800 uppercase">Package Reservations</p>
                <div className="flex justify-between p-4">
                  <p className="text-light-blue-400">Package</p>
                  <p className="text-light-blue-400">
                    Price {Constant.CURRENCY}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-1">
                  {data?.packages.map((item, key) => (
                    <div
                      className="relative flex justify-between px-4 py-2 shadow-lg bg-yellow-400 items-center rounded-lg"
                      key={key}
                    >
                      <a
                        onClick={() => handleCartItemRemove(item._id)}
                        className="absolute left-[-6px] top-[-10px]"
                      >
                        <MinusCircleIcon
                          className="h-6 w-6 text-red-300"
                          strokeWidth={2}
                        />
                      </a>
                      <div className="flex flex-col gap-1">
                        <p className="text-lg capitalize ">{item.title}</p>
                      </div>
                      <p className="text-black">
                        {item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex border-t border-t-gray-200 justify-between mb-5 py-2 px-2">
            <p className="text-2xl text-black">Total</p>
            <p className="text-2xl text-red-500">
              {Constant.CURRENCY} {data?.total.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button
              title="CHECKOUT"
              onClick={handleCheckout}
              loading={checkoutLoading}
            />
          </div>
        </>
      ) : (
        <div className="m-8 flex flex-col text-center  items-center justify-center">
          <img
            src="https://www.ruuhbythebrandstore.com/images/cart_is_empty.png"
            alt=""
            className="h-32"
          />
          <p className="text-xs text-gray-600">
            Looks like you have not added anything to you cart.
          </p>
        </div>
      )}
    </Drawer>
  );
};
