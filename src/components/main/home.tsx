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
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-light">
                Rashod Korala
              </h1>
            </Link>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-orange-700">
              Software Developer
            </p>
          </div>
          <Sidebar />
        </header>
      </div>
    </section>
  );
}
