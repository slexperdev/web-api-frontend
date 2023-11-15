import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useAddToCartMutation } from "../../../../Services/CartService";
import { Constant } from "../../../../Constant";
import { getConvertedData } from "../../../../Util/Common";

import { Button, Dropdown, Layout, TextField } from "../../../../Components";

export default function ActivityDetailView() {
  const { activity } = useSelector((state) => state.activity);
  const [addToCart, { error, isLoading }] = useAddToCartMutation();

  const [state, setState] = useState({
    numberOfParticipants: "",
    ageOfParticipants: "",
  });

  const handleCart = async () => {
    try {
      const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);
      const data = {
        travelAgentId: agentId,
        activities: [
          {
            title: activity.title,
            price: activity.price,
            numberOfParticipants: state.numberOfParticipants,
            ageOfParticipants: state.ageOfParticipants,
          },
        ],
      };

      const res = await addToCart({ data });

      if (res.data.status) {
        toast.success("Activity added to cart");
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 lg:p-5">
        <div className="">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0e6e651494561.58ef650eda566.png"
            alt=""
            className="object-fit max-h-[600px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl capitalize">{activity.title}</p>

          <p className="text-sm text-gray-600">{activity.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              Destination :{" "}
              <span className="text-black">{activity.destination}</span>
            </p>
            <p>
              Type of Activity :{" "}
              <span className="text-black">{activity.typeOfActivity}</span>
            </p>
            <p>
              Star Ratings :{" "}
              <span className="text-black">{activity.starRating}</span>
            </p>
            <p>
              Date : <span className="text-black">{activity.date}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <TextField
              placeholder="Number of Participants"
              label="Number of Participants"
              type="number"
              value={state.numberOfParticipants}
              onChange={(e) =>
                setState({ ...state, numberOfParticipants: e.target.value })
              }
            />
            <TextField
              placeholder="Age of Participants"
              label="Age of Participants"
              type="number"
              value={state.ageOfParticipants}
              onChange={(e) =>
                setState({ ...state, ageOfParticipants: e.target.value })
              }
            />
          </div>
          <p className="antialiased text-2xl text-red-400">
            {Constant.CURRENCY} {activity.price}
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
