import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";

import { useGetPackageQuery } from "../../../Services/PackageService";
import { useGetDestinationsQuery } from "../../../Services/ConfigService";
import { setPackage } from "../../../Stores/package";
import { Constant } from "../../../Constant";

import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function PackageView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterState, setFilterState] = useState();
  const {
    data: packageData,
    isLoading: isPackageLoading,
    isFetching,
  } = useGetPackageQuery(filterState);
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

  const onNavigateToDetailView = (item) => {
    dispatch(setPackage(item));
    navigate("/package-detail");
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
            label="Specialty"
            placeholder="Specialty"
            data={Constant.SPECIALTY}
            name="speciality"
            onChange={handleSelect}
          />
          <TextField
            label="Number of Travelers"
            placeholder="Number of Travelers"
            type="number"
            name="numberOfTravelers"
            onChange={handleSelect}
          />
          <TextField
            label="Duration"
            placeholder="Duration"
            type="number"
            name="duration"
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
            data={Constant.RATING}
            name="packageRating"
            onChange={handleSelect}
          />
          <TextField
            placeholder="Duration"
            type="number"
            name="duration"
            onChange={handleSelect}
          />
          <Button title="Clear" color="secondary" onChange={handleClear} />
        </form>
      </div>

      {isPackageLoading || isFetching ? (
        <div className="flex items-center justify-center mt-10">
          <ClockLoader color="#36a6d6" />
        </div>
      ) : packageData?.packages.length === 0 ? (
        <div className="text-center text-gray-700 mt-10">
          <p className="antialiased text-xl font-semibold ">
            Sorry! No package found :(
          </p>
          <p className="antialiased text-xs">
            We're sorry what you were looking for, Please try again.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
          {packageData?.packages.map((item, key) => (
            <Card
              key={key}
              price={item.price}
              title={item.title}
              onClickHandler={() => onNavigateToDetailView(item)}
              img="https://cdn3.vectorstock.com/i/1000x1000/56/97/colorful-travel-icon-set-vector-48265697.jpg"
            />
          ))}
        </div>
      )}
    </Layout>
  );
}
