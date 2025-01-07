export const NightLocation = ({ selectedCity }) => {
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
  return (
    <div className="bg-gradient-to-b from-gray-800 to-transparent rounded-[42px] w-[398px] flex flex-col items-center">
      <div className="flex px-[40px] justify-between items-center w-[100%] mt-[56px] mb-[24px]">
        <div>
          <div className=" flex gap-[5px]">
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{month}</h4>
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{date},</h4>
            <h4 className="text-[18px] font-medium text-[#9CA3AF]">{year}</h4>
          </div>
          <h3 className="text-5xl font-[600] text-[#fff] ">{selectedCity}</h3>
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
          src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilshppMFSARTdI1JWeQOlhakbR1JVeDnbcra4a6UILH9hOqrOoCAtl1W4QCfJBX8QN8jBc0aBR2laFKsYYbX3DIVpT7gp0OQ5OJ0YcM~wtgba2vJbMijNX75QG5qEkqEwBMCKUbJ1Sh2zXf10p47EdFvLuCjNqjlQQbOPGqZfayGYgkORpy06dIoegj-ZsLR26hq8uC4Z4BFUGfViQs7gsJDOuTYydKGOnIJ9lV7oUp8MkUm4GoDtziY4Zr~CxiAzjBqlTLi~MEdcm0FW4pxSOaZVi4xmsibabFOHqIO5-PSKt5ZOJ1aBVv066oao3IBoMM6X~V-Iqvhb-O8aHIi9A__"
          alt=""
        />
      </div>
    </div>
  );
};
