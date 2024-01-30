import Navbar from "@/src/components/navbar";
import Home from "@/src/components/main/home";
import About from "@/src/components/main/about";
import Skills from "@/src/components/main/skills";
import Projects from "@/src/components/main/projects";
import Contact from "@/src/components/main/contact";
import Footer from "@/src/components/footer";

import dynamic from "next/dynamic";
import ParticleComponent from "@/src/components/ParticleComponent";



const DynamicComponentWithNoSSR = dynamic(() => import("@/src/components/MouseGradientAnimation"), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      {/* <ParticleComponent /> */}
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
