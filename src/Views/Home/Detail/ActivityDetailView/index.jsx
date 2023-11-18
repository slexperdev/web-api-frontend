import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import { useAddToCartMutation } from "../../../../Services/CartService";
import { Constant } from "../../../../Constant";
import { getRatingStar } from "../../../../Util/Common";

import { Button, Dropdown, Layout, TextField } from "../../../../Components";

export default function ActivityDetailView() {
  const { activity } = useSelector((state) => state.activity);
  const [addToCart, { error, isLoading }] = useAddToCartMutation();

  const [state, setState] = useState({
    numberOfParticipants: "",
    ageOfParticipants: "",
  });

  const handleCart = async () => {
    if (state.numberOfParticipants === "" || state.ageOfParticipants === "") {
      toast.error("Number of participants and Age of participants required!");
    } else {
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
    }
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 gap-5 sm:grid-rows-1 lg:p-5">
        <div className="">
          <img
            src="https://afar.brightspotcdn.com/dims4/default/e3b808d/2147483647/strip/false/crop/1024x781+0+0/resize/1024x781!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fea%2F3d%2Fe21e67894ffbbc294c1bb216184c%2Fmv-lara.jpeg"
            alt=""
            className="object-fit"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl capitalize">{activity.title}</p>

          <p className="text-lg text-gray-600 capitalize">
            {activity.description}
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              Destination :{" "}
              <span className="text-black capitalize">
                {activity.destination}
              </span>
            </p>
            <p>
              Type of Activity :{" "}
              <span className="text-black capitalize">
                {activity.typeOfActivity}
              </span>
            </p>
            <p>
              Star Ratings :{" "}
              <span className="text-yellow-800">
                {getRatingStar(activity.starRating)}
              </span>
            </p>
            <p>
              Date :{" "}
              <span className="text-black">
                {dayjs(activity.date * 1000).format("DD MMM YY")}
              </span>
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
            {Constant.CURRENCY} {activity.price.toLocaleString()}
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
