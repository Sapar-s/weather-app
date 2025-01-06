import { DayLocation } from "./DayLoc";
import { Nav } from "./Navbar";
import { TempL } from "./TemperatureL";

export const DayLight = () => {
  return (
    <div className="w-[414px] h-[828px] rounded-[48px] bg-[#ffffffbf] backdrop-blur-[12px] p-[8px] relative">
      {/* <h1>Ulan Bator</h1> */}
      <DayLocation />
      <TempL />
      <Nav />
    </div>
  );
};

// dsadfasdfasdf
