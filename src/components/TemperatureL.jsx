export const TempL = ({ hotTemp }) => {
  return (
    <div className=" ml-[40px]">
      <h2 className="text-[104px] h-[197px] font-[700] text-gradient  text-gray-900 ">
        {/* 26°C */}
        {hotTemp}°C
      </h2>
      <h4 className="text-[24px] text-[#FF8E27] mb-[48px]">bright</h4>
    </div>
  );
};
