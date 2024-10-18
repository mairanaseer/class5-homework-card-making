import Image from "next/image";

export default function Home() {
  return (
    <div >
      <nav className="flex w-full bg-white h-35 items center gap-3">
<div className="bg-purple-900 h-60 w-60"></div>
<div className="bg-green-500 h-60 w-60"></div>
<div className="bg-pink-400 h-60 w-60"></div>
      </nav>
      <nav className=" flex bg-white w-full h-35 items down gap-3">
        <div className="bg-orange-700 w-60 h-60 gap-3 "></div>
          <div className="bg-blue-500 w-60 h-60 gap-3"></div>


      </nav>
    </div>
  
  );
}
