import { Nav } from "./Navbar";
import { NightLocation } from "./NightLoc";
import { TempR } from "./TemperatureR";

export const NightDark = () => {
  return (
    <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827bf] backdrop-blur-md p-[8px]">
      {/* <h1>Ulan Bator</h1> */}
      <NightLocation />
      <TempR />
      <Nav />
    </div>
  );
};
