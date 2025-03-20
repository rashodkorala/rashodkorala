import Projects from "@/src/components/main/projects";

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center p-8 ">
            <div className="flex flex-col max-w-4xl w-full space-y-8 gap-10">
                <h1 className="text-5xl font-thin relative pb-4 border-b-2 border-orange-600">
                    About Me
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    Hey, I’m <span className="font-semibold">Rashod Korala</span>,
                    a passionate software developer. Currently finished my undergraduate
                    degree in Computer Science from <span className="font-semibold">Memorial University of Newfoundland</span>,
                </p>

                <div className="border-l-4 border-orange-600 pl-4">
                    <h2 className="text-3xl font-semibold">My Work</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I specialize in full-stack development, with a strong focus on <span className="font-semibold">Next.js,
                            TypeScript, React Native, and AWS</span>. My projects range from SaaS products to personal tools that enhance
                        efficiency in various domains. I founded <span className="font-semibold">Aether</span>, a startup dedicated to
                        <span className="italic"> art authentication using NFC technology</span>. Additionally, I’ve worked on projects
                        like <span className="font-semibold">EntertainMate</span>, a movie and TV show discovery platform, and
                        <span className="font-semibold">Dear Diary</span>, a secure personal diary app built with Flutter and Firebase.
                    </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                    <h2 className="text-3xl font-semibold">Tech & Interests</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        My expertise lies in building scalable, performant applications with a focus on <span className="font-semibold">user experience</span>.
                        I enjoy working with cloud technologies like AWS and leveraging AI to solve real-world problems, such as optimizing snow-clearing
                        operations in <span className="font-semibold">St. John's</span>. Beyond coding, I’m interested in
                        <span className="font-semibold"> product design</span>, fitness, and creating accessories for people in tech.
                    </p>
                </div>

                <p className="text-lg text-gray-700">
                    Feel free to connect with me for collaborations, discussions, or just to chat about tech and ideas!
                </p>
            </div>
        </div>
    );
}
