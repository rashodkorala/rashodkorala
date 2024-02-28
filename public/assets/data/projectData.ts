import Artistportfolio from "@/public/assets/ProjectsPhotos/ArtistPortfolio.png";

import getFit1 from "@/public/assets/ProjectsPhotos/getFit/getFit1.png";
import getFit2 from "@/public/assets/ProjectsPhotos/getFit/getFit2.png";
import getFit3 from "@/public/assets/ProjectsPhotos/getFit/getFit3.png";
import getFit4 from "@/public/assets/ProjectsPhotos/getFit/getFit4.png";
import getFit5 from "@/public/assets/ProjectsPhotos/getFit/getFit5.png";
import getFit6 from "@/public/assets/ProjectsPhotos/getFit/getFit6.png";
import getFit7 from "@/public/assets/ProjectsPhotos/getFit/getFit7.png";
import getFit8 from "@/public/assets/ProjectsPhotos/getFit/getFit8.png";
import getFit9 from "@/public/assets/ProjectsPhotos/getFit/getFit9.png";
import getFit10 from "@/public/assets/ProjectsPhotos/getFit/getFit10.png";


import squeeKleen1 from "@/public/assets/ProjectsPhotos/squeekleen/squeeKleen1.png";


export const projectData = [
  {
    id: 1,
    title: "GetFit",
    description:
      "Track workouts, plan meals, and achieve fitness goals on-the-go.",
    about:
      "getFit is a mobile fitness app developed with Flutter, allowing users to track workouts, plan meals, and set fitness goals. Integrated with Firebase for secure authentication and data management, the app also utilizes ChatGPT's API for personalized workout creation. With a user-friendly interface, getFit provides a seamless fitness experience on-the-go, catering to individual needs and preferences. Available as an open-source project on GitHub, getFit represents my commitment to leveraging technology for holistic wellness, offering users a transformative fitness journey.",
    image: [
      getFit1,
      getFit2,
      getFit3,
      getFit4,
      getFit5,
      getFit6,
      getFit7,
      getFit8,
      getFit9,
      getFit10,
    ],
    Imagewidth: 400,
    height: 1000,
    link: "https://github.com/rashodkorala/Getfit",
    linkText: "view on GitHub",
    tags: ["Flutter", "Firebase", "ChatGPT", "Mobile App"],
    slidesToShow: 3,
  },

  {
    id: 2,
    title: "Small business Website",
    description:
      "Digital storefront for showcasing products, services, and engaging customers.",
    about:
      "developed for a small business, this website serves as a digital storefront for showcasing products, services, and engaging customers. Built with NextJs and styled with TailWindCSS, the website is responsive and mobile-friendly.",
    image: [squeeKleen1, Artistportfolio, Artistportfolio, Artistportfolio, Artistportfolio],
    link: "http://dev.squeekleen.com",
    linkText: "view website",
    tags: ["NextJs", "TailWindCss", "TypeScript", "Web"],
    Imagewidth: 1500,
    slidesToShow: 1,

  },
  {
    id: 3,
    title: "Movie database website",
    description:
      "Discover, explore, and engage with your favorite movies and TV shows.",
    about:
      "This is a website that helps users discover, explore, and engage with their favorite movies and TV shows. Built with React as the frontend, Express as the backend, and MongoDB as the database, the website is designed to provide a seamless user experience. Styled with TailWindCSS, the website is responsive and mobile-friendly. Developed for a Final group project of a web development course at Memorial Univeristy of Newfoundland. Refer to the GitHub repository for more details. This projects is done to showcase my skills in handling API's, and working with databases as well as to showcase my skills in web development.",
    image: [Artistportfolio, Artistportfolio, Artistportfolio, Artistportfolio, Artistportfolio],
    link: "https://github.com/rashodkorala/IMDB-Clone",
    linkText: "view on GitHub",
    tags: ["React", "MondoDb","Express","TailWindCss", "Web"],
    Imagewidth: 1500,
    slidesToShow: 1,
  },
];
