import Image from "next/image";
import Navbar from "./components/Navbar";
import Leftsection from "./components/Leftsection";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 ">
        <Navbar />
      </div>
      <main className="bg-gray-50 flex ">
        <Leftsection />
        <Content />
      </main>
    </>
  );
}
