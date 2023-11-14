import React from "react";
import { Button, Layout } from "../../../Components";

export default function DetailView() {
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
          <p className="text-2xl">7 Days BAHAMAS</p>

          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              Departure Destination :{" "}
              <span className="text-black">Australia</span>
            </p>
            <p>
              Arrival Destination :{" "}
              <span className="text-black">Australia</span>
            </p>
            <p>
              Deck : <span className="text-black">Australia</span>
            </p>
            <p>
              Cabin Class : <span className="text-black">Australia</span>
            </p>
            <p>
              Provider : <span className="text-black">Australia</span>
            </p>
          </div>
          <p className="antialiased text-2xl text-red-400">$2500</p>
          <div>
            <Button color="secondary" title="Add to Cart" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
