import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-12 px-10 border-t font-light hidden lg:block">
        <div className="mb-8 w-full h-full flex justify-between items-center border-b pb-8 border-white">
          <h2 className="text-6xl font-light">Contact Me</h2>
          <h2 className="text-6xl font-light">Follow</h2>

        </div>
        <div className=" mx-auto grid md:grid-cols-3 gap-6 items-start text-left">
          {/* Left Section */}
          <div>
            <nav className="mt-4 space-y-2 text-3xl">
              <Link href="/projects" className="block">Projects</Link>
              <Link href="/about" className="block">About</Link>
              <Link href="/contact" className="block">Contact</Link>
            </nav>
          </div>

          {/* Center Section */}
          <div className="text-center flex flex-col items-center justify-between w-full h-full font-light">
            <p className="text-3xl">Got a project in mind? <Link href="/contact" className="underline">Say hi</Link></p>
            <p className="text-sm mt-4">&copy; 2025 by Rashod Korala. All Rights Reserved.</p>
          </div>

          {/* Right Section */}
          <div className="text-right font-light">
            <nav className="mt-4 space-y-2 text-3xl">
              <Link href="https://instagram.com" className="block">Instagram</Link>
              <Link href="https://linkedin.com" className="block">LinkedIn</Link>
              <Link href="https://behance.net" className="block">Behance</Link>
            </nav>
          </div>
        </div>
      </footer>

      <footer className="py-12 px-10 border-t font-light block lg:hidden">
        <div className="mb-8 w-full h-full flex justify-between items-center border-b pb-8 border-forground">
          {/* <h2 className="text-6xl font-light">Contact Me</h2> */}
          <div className="font-light gap-4 flex flex-col items-start">
            <h2 className="text-6xl font-light">Contact Me</h2>
            <p className="text-3xl">Got a project in mind? <Link href="/contact" className="underline">Say hi</Link></p>

          </div>
        </div>
        <div className="mb-8 w-full h-full flex flex-col border-b pb-8 Border-b border-forground">
          <h2 className="text-6xl font-light">Follow</h2>
          <nav className="mt-4 space-y-2 text-3xl">
            <Link href="https://instagram.com" className="block">Instagram</Link>
            <Link href="https://linkedin.com" className="block">LinkedIn</Link>
            <Link href="https://behance.net" className="block">Behance</Link>
          </nav>
        </div>
        <div className="mb-8 w-full h-full flex flex-col border-b pb-8 Border-b border-forground">
          <nav className="mt-4 space-y-2 text-3xl">
            <Link href="/projects" className="block">Projects</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/contact" className="block">Contact</Link>
          </nav>
        </div>
        <div className="text-center flex flex-col items-center justify-between w-full h-full font-light">
          <p className="text-sm mt-4">&copy; 2025 by Rashod Korala</p>
        </div>
      </footer>
    </>
  );
}
