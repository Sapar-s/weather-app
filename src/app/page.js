"use client";

import { LeftSide } from "@/components/Left";
import { RightSide } from "@/components/Right";
import { Search } from "@/components/Search";
import { CircleM } from "@/components/Middle-Circle";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [searchValue, setSearchValue] = useState("");
  const [hotTemperature, setHotTemperature] = useState();
  const [coldTemperature, setColdTemperature] = useState();
  const [dayCondition, setDayCondition] = useState("");
  const [nightCondition, setNightCondition] = useState("");
  const [loading, setLoading] = useState(true);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      let yu = country.cities.map((arr) => {
        return { country: country.country, city: arr };
      });
      return yu;
    });

    // ["Ulannbaatar", "To"]
    // [{country:"Mongolia", city:"Ulaanbat"}, { count}]
    incomeCities = incomeCities.flat();
    console.log(incomeCities);
    setCities(incomeCities);

    // let countries = data.data;
    // let arr = countries.flat();
    // console.log("ulsuud", arr);
  }

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search.toLowerCase());

    const filtered = cities?.filter((city) => {
      if (!search) {
        return false;
      }
      const city1 = city.city;
      return city1.toLowerCase().includes(search);
    });
    setSearched(filtered);
  };

  const handlerSelect = (city) => {
    setSelectedCity(city);
    setSearched([]);
    setSearchValue("");
    getTemp(city);
  };

  async function getTemp(selectedCity) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=35bdba08acb445e7bf421157250801&q=${selectedCity}`
    );

    const data = await result.json();

    // console.log(data);
    let inComeMinTemp = data.forecast.forecastday[0].day.maxtemp_c;
    setHotTemperature(inComeMinTemp);
    // console.log(inComeMinTemp);

    let inComeMaxTemp = data.forecast.forecastday[0].day.mintemp_c;
    setColdTemperature(inComeMaxTemp);
    // console.log(inComeMaxTemp);

    let weatherSituationDay =
      data.forecast.forecastday[0].hour[14].condition.text;
    setDayCondition(weatherSituationDay);
    // console.log(weatherSituationDay);

    let weatherSituationNight =
      data.forecast.forecastday[0].hour[0].condition.text;
    setNightCondition(weatherSituationNight);
    // console.log(weatherSituationNight);
    setLoading(false);
  }

  useEffect(() => {
    getData();

    getTemp(selectedCity);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2000); // Ачаалал 2 секундээр дуусна
  // }, []);
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <Search
        handlerSelect={handlerSelect}
        search={searchHandler}
        searched={searched}
        searchValue={searchValue}
      />
      <CircleM />
      <LeftSide
        selectedCity={selectedCity}
        hotTemp={hotTemperature}
        condition={dayCondition}
        loading={loading}
      />
      <RightSide
        selectedCity={selectedCity}
        coldTemp={coldTemperature}
        condition={nightCondition}
        loading={loading}
      />
    </div>
  );
}
