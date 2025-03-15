import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Roof Hotel",
    description: "Branding, Signage, Web Design",
    image: "/roof-hotel.jpg",
  },
  {
    title: "Earth Skincare",
    description: "Branding, Packaging, Web Design, Art Direction",
    image: "/earth-skincare.jpg",
  },
  {
    title: "Mattia Restaurant",
    description: "Branding, Art Direction, Web Design",
    image: "/mattia-restaurant.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16">
      <div className="max-w-[2300px] mx-auto">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-[130px]">Rashod Korala</h1>
            <p className="text-4xl text-slate-400 font-light">Software Developer</p>
          </div>
          <button className="text-8xl font-medium">+ Menu</button>
        </header>

      </div>
    </section>
  );
}
