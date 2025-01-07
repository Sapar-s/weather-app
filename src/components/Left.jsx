import { DayLight } from "./Day";

export const LeftSide = ({ selectedCity }) => {
  return (
    <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#F3F4F6]">
      <DayLight selectedCity={selectedCity} />
    </div>
  );
};
