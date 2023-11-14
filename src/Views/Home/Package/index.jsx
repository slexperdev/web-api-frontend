import React, { useState } from "react";
import { ClockLoader } from "react-spinners";

import { useGetPackageQuery } from "../../../Services/PackageService";
import { useGetDestinationsQuery } from "../../../Services/ConfigService";
import { Constant } from "../../../Constant";

import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function PackageView() {
  const [filterState, setFilterState] = useState();
  const {
    data: packageData,
    isLoading: isPackageLoading,
    isFetching,
  } = useGetPackageQuery(filterState);
  const { data: destinations, isLoading: isArrivalLoading } =
    useGetDestinationsQuery();

  return (
    <Layout>
      <div className="bg-gray-50 p-5">
        <form action="" className="flex flex-row gap-10 items-end">
          <Dropdown
            label="Destination"
            placeholder="Destination"
            data={destinations?.map(({ destination }) => ({
              value: destination,
              label: destination,
            }))}
          />
          <Dropdown
            label="Specialty"
            placeholder="Specialty"
            data={Constant.SPECIALTY}
          />
          <TextField
            label="Number of Travelers"
            placeholder="Number of Travelers"
            type="number"
          />
          <TextField label="Duration" placeholder="Duration" type="number" />
          <Button title="Search" color="secondary" />
        </form>
      </div>
      <div className="bg-gray-50 p-5 mt-5">
        <form action="" className="flex flex-row gap-5 items-center">
          <p className="antialiased text-sm font-semibold text-gray-700">
            Sort by:
          </p>
          <TextField placeholder="Price" type="number" />
          <Dropdown placeholder="Star Rating" data={Constant.RATING} />
          <TextField placeholder="Duration" type="number" />
        </form>
      </div>
      {isPackageLoading || isFetching ? (
        <div className="flex items-center justify-center mt-10">
          <ClockLoader color="#36a6d6" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
          {packageData?.packages.map((item, key) => (
            <Card
              key={key}
              price={item.price}
              title={item.title}
              img="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0e6e651494561.58ef650eda566.png"
            />
          ))}
        </div>
      )}
    </Layout>
  );
}
