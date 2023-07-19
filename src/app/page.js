import Image from "next/image";
import Navbar from "./components/Navbar";
import Leftsection from "./components/Leftsection";
import Content from "./components/Content";
import Sidebaricons from "./components/Sidebaricons";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 ">
        <Navbar />
      </div>
      <main className="bg-gray-50 flex ">
        <div className="border-r-2 mr-2 mx-2">
          <Sidebaricons />
        </div>
        <Leftsection />
        <Content />
      </main>
    </>
  );
}
