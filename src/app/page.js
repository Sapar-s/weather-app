"use client";

import { LeftSide } from "@/components/Left";
import { RightSide } from "@/components/Right";
import { Search } from "@/components/Search";
import { CircleM } from "@/components/Middle-Circle";
import { useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }

  getData();

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.includes(search);
    });
    setSearched(filtered);
  };

  const handlerSelect = (city) => {
    setSelectedCity(city);
    setSearched([]);
    setSearchValue("");
  };

  // async function getTemp() {
  //   const result = await fetch(
  //     "https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}"
  //   );
  //   const data = await result.json();
  // }
  // getTemp();

  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <Search
        handlerSelect={handlerSelect}
        search={searchHandler}
        searched={searched}
        // setSelectedCity={setSelectedCity}
      />
      <CircleM />
      <LeftSide selectedCity={selectedCity} />
      <RightSide selectedCity={selectedCity} />
    </div>
  );
}
