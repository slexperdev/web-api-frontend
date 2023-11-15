import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useAddToCartMutation } from "../../../../Services/CartService";
import { Constant } from "../../../../Constant";
import { getConvertedData } from "../../../../Util/Common";

import { Button, Dropdown, Layout } from "../../../../Components";
import { toast } from "react-toastify";

export default function CruiseDetailView() {
  const { cruise } = useSelector((state) => state.cruise);
  const [addToCart, { error, isLoading }] = useAddToCartMutation();

  const [state, setState] = useState({
    mealPreferences: "",
    cabinSelection: "",
  });

  const handleCart = async () => {
    try {
      const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);
      const data = {
        travelAgentId: agentId,
        cruises: [
          {
            title: cruise.title,
            price: cruise.price,
            mealPreferences: state.mealPreferences,
            cabinSelection: state.cabinSelection,
          },
        ],
      };

      const res = await addToCart({ data });

      if (res.data.status) {
        toast.success("Cruise added to cart");
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 gap-5 lg:p-5">
        <div className="">
          <img
            src="https://afar.brightspotcdn.com/dims4/default/e3b808d/2147483647/strip/false/crop/1024x781+0+0/resize/1024x781!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fea%2F3d%2Fe21e67894ffbbc294c1bb216184c%2Fmv-lara.jpeg"
            alt=""
            className="object-fit"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl capitalize">{cruise.title}</p>

          <p className="text-sm text-gray-600">{cruise.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              Departure Destination :{" "}
              <span className="text-black">{cruise.departureDestination}</span>
            </p>
            <p>
              Arrival Destination :{" "}
              <span className="text-black">{cruise.arrivalDestination}</span>
            </p>
            <p>
              Deck : <span className="text-black">{cruise.deck}</span>
            </p>
            <p>
              Provider : <span className="text-black">{cruise.provider}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Dropdown
              label="Select Cabin"
              placeholder="Cabin"
              name="cabinSelection"
              data={getConvertedData(cruise.cabinClass)}
              onChange={(e) =>
                setState({ ...state, cabinSelection: e.target.value })
              }
            />
            <Dropdown
              label="Select Meal Preference"
              placeholder="Meal Preference"
              name="mealPreference"
              data={Constant.MEAL_PREFERENCES}
              onChange={(e) =>
                setState({ ...state, mealPreferences: e.target.value })
              }
            />
          </div>
          <p className="antialiased text-2xl text-red-400">
            {Constant.CURRENCY} {cruise.price}
          </p>
          <div>
            <Button
              color="secondary"
              title="Add to Cart"
              onClick={handleCart}
              loading={isLoading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
