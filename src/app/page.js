import { LeftSide } from "@/components/Left";
import { RightSide } from "@/components/Right";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      {/* <div className="absolute">Search</div>
      <div className="absolute ">Middle Circle</div> */}
      {/* <Search/>
      <Middle-Circle/> */}
      <LeftSide />
      <RightSide />
    </div>
  );
}
