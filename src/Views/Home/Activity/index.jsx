import React, { useState } from "react";
import { ClockLoader } from "react-spinners";

import { useGetActivityQuery } from "../../../Services/ActivityService";
import { useGetDestinationsQuery } from "../../../Services/ConfigService";
import { Constant } from "../../../Constant";

import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function ActivityView() {
  const [filterState, setFilterState] = useState();
  const {
    data: activityData,
    isLoading: isCruiseLoading,
    isFetching,
  } = useGetActivityQuery(filterState);
  const { data: destinations, isLoading: isArrivalLoading } =
    useGetDestinationsQuery();

  const handleSelect = (e) => {
    setFilterState((prevFilterState) => ({
      ...prevFilterState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClear = async () => {
    setFilterState();
  };

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
            label="Activity Type"
            placeholder="Activity Type"
            data={Constant.TYPE_OF_ACTIVITY}
          />

          <TextField type="date" label="Date" />
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
        </form>
      </div>
      {isCruiseLoading || isFetching ? (
        <div className="flex items-center justify-center mt-10">
          <ClockLoader color="#36a6d6" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
          {activityData?.activities.map((item, key) => (
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
