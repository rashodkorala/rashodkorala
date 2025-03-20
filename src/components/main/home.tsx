import Navbar from "../navbar1";
import Sidebar from "../sideBar";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="w-full h-full">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-8xl font-light">Rashod Korala</h1>
            <p className="text-4xl text-slate-400 font-light">Software Developer</p>
          </div>
          <Sidebar />

        </header>

      </div>
    </section>
  );
}
