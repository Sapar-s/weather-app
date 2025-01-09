import { DayLocation } from "./DayLoc";
import { Nav } from "./Navbar";
import { TempL } from "./TemperatureL";

export const DayLight = ({ selectedCity, hotTemp, condition }) => {
  return (
    <>
      <div className="absolute top-[1vh] left-[8vw]">
        <img src="/sun.svg" alt="" />
      </div>
      <div className="w-[414px] h-[828px] rounded-[48px] bg-[#ffffff]/75 backdrop-blur-md p-[8px] relative">
        <DayLocation selectedCity={selectedCity} condition={condition} />
        <TempL hotTemp={hotTemp} condition={condition} />
        <Nav />
      </div>
    </>
  );
};
