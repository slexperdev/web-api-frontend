import React, { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import {
  useGetArrivalsQuery,
  useGetDeparturesQuery,
  useGetProvidersQuery,
} from "../../../Services/ConfigService";
import { useGetCruiseQuery } from "../../../Services/CruiseService";
import { setCruise } from "../../../Stores/cruise";
import { Constant } from "../../../Constant";

import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function CruiseView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterState, setFilterState] = useState();

  const {
    data: cruiseData,
    isLoading: isCruiseLoading,
    isFetching,
  } = useGetCruiseQuery(filterState);
  const { data: departures, isLoading: isDepartureLoading } =
    useGetDeparturesQuery();
  const { data: arrival, isLoading: isArrivalLoading } = useGetArrivalsQuery();

  const { data: providers, isLoading: isProviderLoading } =
    useGetProvidersQuery();

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
    dispatch(setCruise(item));
    navigate("/cruise-detail");
  };

  return (
    <Layout>
      <div className="bg-gray-50 p-5 overflow-x-auto ">
        <form action="" className="flex flex-row gap-10 items-end">
          <Dropdown
            label="Departure Destination"
            placeholder="Departure Destination"
            name="departureDestination"
            value={filterState?.departureDestination}
            data={departures?.map(({ departureDestination }) => ({
              value: departureDestination,
              label: departureDestination,
            }))}
            onChange={handleSelect}
          />
          <Dropdown
            label="Arrival Destination"
            placeholder="Arrival Destination"
            name="arrivalDestination"
            data={arrival?.map(({ arrivalDestination }) => ({
              value: arrivalDestination,
              label: arrivalDestination,
            }))}
            onChange={handleSelect}
          />
          <Dropdown
            label="Deck"
            placeholder="Deck"
            name="deck"
            data={Constant.DECK}
            onChange={handleSelect}
          />
          <Dropdown
            label="Cabin Class"
            placeholder="Cabin Class"
            name="cabinClass"
            data={Constant.CABIN_CLASS}
            onChange={handleSelect}
          />
          <TextField
            type="date"
            label="Departure Date"
            name="departureDate"
            onChange={handleSelect}
          />
          <TextField
            type="date"
            label="Arrival Date"
            name="arrivalDate"
            onChange={handleSelect}
          />
        </form>
      </div>
      <div className="bg-gray-50 p-5 mt-5 overflow-x-auto">
        <form action="" className="flex flex-row gap-5 items-center">
          <p className="antialiased text-sm font-semibold text-gray-700">
            Filter by:
          </p>
          <TextField
            placeholder="Price"
            type="number"
            name="price"
            onChange={handleSelect}
          />
          <TextField
            placeholder="Duration"
            type="number"
            name="duration"
            onChange={handleSelect}
          />
          <Dropdown
            placeholder="Provider"
            data={providers?.map(({ provider }) => ({
              value: provider,
              label: provider,
            }))}
            name="provider"
            onChange={handleSelect}
          />
          <Button
            title="Clear Filters"
            color="secondary"
            onClick={handleClear}
          />
        </form>
      </div>
      {isCruiseLoading ||
      isFetching ||
      isDepartureLoading ||
      isArrivalLoading ? (
        <div className="flex items-center justify-center mt-10">
          <ClockLoader color="#36a6d6" />
        </div>
      ) : cruiseData?.cruises.length === 0 ? (
        <div className="text-center text-gray-700 mt-10">
          <p className="antialiased text-xl font-semibold ">
            Sorry! No cruise found :(
          </p>
          <p className="antialiased text-xs">
            We're sorry what you were looking for, Please try again.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
          {cruiseData?.cruises.map((item, key) => (
            <Card
              key={key}
              price={item.price}
              title={item.title}
              onClickHandler={() => onNavigateToDetailView(item)}
              img="https://images.vexels.com/media/users/3/234186/isolated/preview/c040755db6792035b60ec0930aaf2fab-cruise-ship-sailing-cut-out.png"
            />
          ))}
        </div>
      )}
    </Layout>
  );
}
