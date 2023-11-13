import React from "react";
import { Button, Card, Dropdown, Layout, TextField } from "../../../Components";

export default function CruiseView() {
  return (
    <Layout>
      <div className="bg-gray-50 p-5">
        <form action="" className="flex flex-row gap-10 items-end">
          <Dropdown
            label="Departure Destination"
            placeholder="Departure Destination"
            data={[{ value: "Select", label: "Select" }]}
          />
          <Dropdown
            label="Arrival Destination"
            placeholder="Arrival Destination"
          />
          <Dropdown
            label="Deck and Cabin Class"
            placeholder="Deck and Cabin Class"
          />
          <TextField type="date" label="Departure Date" />
          <TextField type="date" label="Arrival Date" />
          <Button title="Search" color="secondary" />
        </form>
      </div>
      <div className="bg-gray-50 p-5 mt-5">
        <form action="" className="flex flex-row gap-10 items-center">
          <p className="antialiased text-sm font-semibold text-gray-700">
            Sort by:
          </p>
          <Dropdown placeholder="Price" />
          <Dropdown placeholder="Duration" />
          <Dropdown placeholder="Provider" />
        </form>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-rows-1 lg:p-5 mt-5 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
