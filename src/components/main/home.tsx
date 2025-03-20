import Link from "next/link";
import Navbar from "../navbar1";
import Sidebar from "../sideBar";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="w-full h-full">
        <header className="flex justify-between items-start mb-10">
          <div>
            <Link href="/">
              <h1 className="text-6xl md:text-7xl font-light">Rashod Korala</h1>
            </Link>
            <p className="text-3xl md:text-5xl text-orange-700 font-light">
              Software Developer
            </p>
          </div>
          <Sidebar />
        </header>
      </div>
    </section>
  );
}
