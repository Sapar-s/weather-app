export const TempR = ({ coldTemp }) => {
  return (
    <div className=" ml-[40px]">
      <h2 className="text-[104px] h-[197px] font-[700] text-gradient  text-[#F9FAFB]">
        {/* -20°C */}
        {coldTemp}°C
      </h2>
      <h4 className="text-[24px] text-[#777CCE] mb-[48px]">bright</h4>
    </div>
  );
};
