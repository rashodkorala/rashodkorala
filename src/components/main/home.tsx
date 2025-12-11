import Link from "next/link";
import Sidebar from "../sideBar";

export default function Hero() {
  return (
    <>
      <section className="py-16">
        <div className="w-full h-full">
          <header className="flex justify-between items-start mb-10">
            <div>
              <Link href="/">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-light">
                  Projects
                </h1>
              </Link>
            </div>
            <Sidebar />
          </header>
        </div>
      </section>


    </>
  );
}
