import React from "react";
import { useSelector } from "react-redux";

import { useAddToCartMutation } from "../../../../Services/CartService";
import { Constant } from "../../../../Constant";
import { getRatingStar } from "../../../../Util/Common";

import { Button, Layout } from "../../../../Components";
import { toast } from "react-toastify";

export default function PackageDetailView() {
  const { pack } = useSelector((state) => state.pack);
  const [addToCart, { error, isLoading }] = useAddToCartMutation();

  const handleCart = async () => {
    try {
      const agentId = localStorage.getItem(Constant.TRAVEL_AGENT_ID);
      const data = {
        travelAgentId: agentId,
        packages: [
          {
            title: pack.title,
            price: pack.price,
          },
        ],
      };
      const res = await addToCart({ data });

      if (res.data.status) {
        toast.success("Package added to cart");
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
          <p className="text-2xl capitalize">{pack.title}</p>

          <p className="text-lg text-gray-600 capitalize">{pack.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              Destination :{" "}
              <span className="text-black capitalize">{pack.destination}</span>
            </p>
            <p>
              Number of Travelers :{" "}
              <span className="text-black">{pack.numberOfTravelers}</span>
            </p>
            <p>
              Specialty :{" "}
              <span className="text-black capitalize">{pack.speciality}</span>
            </p>
            <p>
              Package Rating :{" "}
              <span className="text-yellow-800">
                {getRatingStar(pack.packageRating)}
              </span>
            </p>
          </div>

          <p className="antialiased text-2xl text-red-400">
            {Constant.CURRENCY} {pack.price.toLocaleString()}
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
