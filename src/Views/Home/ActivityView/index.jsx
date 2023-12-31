import React, { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { useGetActivityQuery } from "../../../Services/ActivityService";
import { useGetDestinationsQuery } from "../../../Services/ConfigService";
import { setActivity } from "../../../Stores/activity";
import { Constant } from "../../../Constant";

import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function ActivityView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterState, setFilterState] = useState();
  const {
    data: activityData,
    isLoading: isActivityLoading,
    isFetching,
  } = useGetActivityQuery(filterState);
  const { data: destinations, isLoading: isArrivalLoading } =
    useGetDestinationsQuery();

  const handleSelect = (e) => {
    setFilterState((prevFilterState) => {
      let updatedState = { ...prevFilterState };

      if (e.target.type === "date") {
        // Convert departureDate to timestamp using dayjs
        updatedState = {
          ...updatedState,
          [e.target.name]: dayjs(e.target.value).valueOf(),
        };
      } else {
        updatedState = {
          ...updatedState,
          [e.target.name]: e.target.value,
        };
      }

      return updatedState;
    });
  };

  const handleClear = async () => {
    setFilterState();
  };

  const onNavigateToDetailView = (item) => {
    dispatch(setActivity(item));
    navigate("/activity-detail");
  };

  return (
    <Layout>
      <div className="bg-gray-50 p-5 overflow-x-auto">
        <form action="" className="flex flex-row gap-10 items-end">
          <Dropdown
            label="Destination"
            placeholder="Destination"
            data={destinations?.map(({ destination }) => ({
              value: destination,
              label: destination,
            }))}
            name="destination"
            onChange={handleSelect}
          />
          <Dropdown
            label="Activity Type"
            placeholder="Activity Type"
            data={Constant.TYPE_OF_ACTIVITY}
            name="typeOfActivity"
            onChange={handleSelect}
          />

          <TextField
            type="date"
            label="Date"
            name="date"
            onChange={handleSelect}
          />
        </form>
      </div>
      <div className="bg-gray-50 p-5 mt-5 overflow-x-auto">
        <form action="" className="flex flex-row gap-5 items-center">
          <p className="antialiased text-sm font-semibold text-gray-700">
            Sort by:
          </p>
          <TextField
            placeholder="Price"
            type="number"
            name="price"
            onChange={handleSelect}
          />
          <Dropdown
            placeholder="Star Rating"
            name="starRating"
            onChange={handleSelect}
            data={Constant.RATING}
          />
          <Button
            title="Clear Filters"
            color="secondary"
            onChange={handleClear}
          />
        </form>
      </div>

      {isActivityLoading || isFetching ? (
        <div className="flex items-center justify-center mt-10">
          <ClockLoader color="#36a6d6" />
        </div>
      ) : activityData?.activities.length === 0 ? (
        <div className="text-center text-gray-700 mt-10">
          <p className="antialiased text-xl font-semibold ">
            Sorry! No activity found :(
          </p>
          <p className="antialiased text-xs">
            We're sorry what you were looking for, Please try again.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
          {activityData?.activities.map((item, key) => (
            <Card
              key={key}
              price={item.price}
              rating={item.starRating}
              title={item.title}
              onClickHandler={() => onNavigateToDetailView(item)}
              img="https://static.thenounproject.com/png/2757867-200.png"
            />
          ))}
        </div>
      )}
    </Layout>
  );
}
