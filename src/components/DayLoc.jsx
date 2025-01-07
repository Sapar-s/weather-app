export const DayLocation = ({ selectedCity }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()];
  // let month = new Date().getMonth();

  let date = new Date().getDate();
  // console.log(date);
  let year = new Date().getFullYear();
  // console.log(year);

  // months.map((month)=>{
  //   if(date === month.){

  //   }
  // })

  return (
    <div className="bg-[#F9FAFB] rounded-[42px] w-[100%]  flex flex-col items-center">
      <div className="flex px-[40px] justify-between items-center w-[100%]  mt-[56px] mb-[49px]">
        <div>
          <div className=" flex gap-[5px]">
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{month}</h4>
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{date},</h4>
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{year}</h4>
          </div>

          <h3 className="text-5xl font-[600] text-[#111827]">{selectedCity}</h3>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="16"
              cy="13"
              r="2"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <img
          className="w-[262.1px] h-[262.1px]"
          src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pra0N4Cxxv-ewi0qhKIEJwVG-qSQezH7Q6S1fZm9xI5CbB4rFJvfCDeC0E8xxsaek9gkYMBfhocmMCEiHaXpnXaoMAmib~KnIUzRk97v1ljdZrQDtNb-10iL18XqBFdH-S0nPWiBZ4MRUVItu4ZDz7HLXsHPdNFM4YniGfm5wMKFIzIUxNEluKrLxvjqzRPaU1G2K1lgL~yYnISdOqpxgPTqMa31xhRyyuQlEJLrl1CYAcr4z0PjoeujFyuAM5LF3YsBVVMwoTNQmzqmttZsjNH3pNXDsRbuwxG9ThwApw1TvsuCs8oDJ2n0DwihR6EOmMBw6jpJgXxmKfM1lxmWsw__"
          alt=""
        />
      </div>
    </div>
  );
};
