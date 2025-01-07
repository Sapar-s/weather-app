export const Search = ({ search, searched, handlerSelect }) => {
  return (
    <>
      <div className="flex gap-[16px] absolute top-[84px] left-[4%] z-10 w-[567px] rounded-[48px] py-[16px] px-[24px] bg-[#fff] shadow-[0px 12px 24px 0px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <g opacity="0.2">
            <path
              d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
              fill="black"
            />
          </g>
        </svg>
        <input
          type="text"
          placeholder="Search"
          onChange={search}
          className="w-[100%]"
        />
      </div>
      <div className="absolute left-[4%] top-[180px] z-10 bg-[#fff]/80 w-[567px] rounded-[24px]">
        {searched.length > 0 &&
          searched.slice(0, 10).map((city, index) => (
            <p
              key={index}
              onClick={() => handlerSelect(city)}
              className="flex gap-[10px] items-center px-[24px] py-[8px] cursor-pointer hover:bg-[#f9f9f9] hover:rounded-[24px]"
            >
              <img src="/loc.svg" alt="" />
              {city}
            </p>
          ))}
      </div>
    </>
  );
};
