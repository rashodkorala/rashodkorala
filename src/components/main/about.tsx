"use client";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto p-6 lg:px-12 lg:pb-20">
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-thin mb-8 lg:mb-14 relative">
                About Me
                <span className="absolute left-0 bottom-0 h-1 w-16 lg:w-24 bg-orange-600"></span>
            </h1>

            {/* Introduction */}
            <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose mb-10">
                I’m Rashod Korala, a Computer Science graduate from Memorial University of Newfoundland.
                I have a deep passion for building technology-driven solutions, whether it’s creating seamless web and mobile experiences
                or leveraging AI to solve real-world problems.
            </p>

            {/* Section: What I Do */}
            <div className="mb-16">
                <h2 className="text-3xl lg:text-5xl font-thin mb-6 lg:mb-10 relative">
                    What I Do
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <ul className="space-y-6 lg:space-y-8 text-lg lg:text-2xl leading-relaxed lg:leading-loose">
                    <li>Full-Stack Development – Specializing in Next.js, React Native, TypeScript, and AWS.</li>
                    <li>Design & User Experience – Creating minimalist, mobile-first interfaces with a focus on usability.</li>
                </ul>
            </div>

            {/* Section: My Philosophy */}
            <div className="mb-16">
                <h2 className="text-3xl lg:text-5xl font-thin mb-6 lg:mb-10 relative">
                    My Philosophy
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose">
                    I believe that technology should be both functional and beautiful.
                    My approach blends engineering with design, ensuring that every product I create is efficient, intuitive, and scalable.
                    Whether through AI, web development, or digital authentication, my goal is to enhance how people interact with technology.
                </p>
            </div>

            {/* Section: Let's Connect */}
            <div>
                <h2 className="text-3xl lg:text-5xl font-thin mb-6 lg:mb-10 relative">
                    Let's Connect
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose mb-8">
                    I’m always open to new ideas, collaborations, and projects.
                    If you’d like to work together or just have a chat, feel free to reach out!
                </p>
                <a
                    href="/contact"
                    className="text-xl lg:text-2xl underline hover:text-orange-500 transition">
                    Contact Me →
                </a>
            </div>
        </div>
    );
}
