import { DayLocation } from "./DayLoc";
import { Nav } from "./Navbar";
import { TempL } from "./TemperatureL";

export const DayLight = ({ selectedCity }) => {
  return (
    <div className="w-[414px] h-[828px] rounded-[48px] bg-[#ffffffbf] backdrop-blur-[12px] p-[8px] relative">
      <DayLocation selectedCity={selectedCity} />
      <TempL />
      <Nav />
    </div>
  );
};
