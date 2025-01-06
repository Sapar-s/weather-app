import { LeftSide } from "@/components/Left";
import { RightSide } from "@/components/Right";
import { Search } from "@/components/Search";
import { CircleM } from "@/components/Middle-Circle";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      {/* <div className="absolute">Search</div>
      <div className="absolute ">Middle Circle</div> */}
      <Search />
      <CircleM />
      <LeftSide />
      <RightSide />
    </div>
  );
}
