import Artistportfolio4 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/ArtistPortfolio4.png";
import Artistportfolio1 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/ArtistPortfolio1.png";
import Artistportfolio2 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/ArtistPortfolio2.png";
import Artistportfolio3 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/ArtistPortfolio3.png";

import CMS1 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS1.png";
import CMS2 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS2.png";
import CMS3 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS3.png";
import CMS4 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS4.png";
import CMS5 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS5.png";
import CMS6 from "@/public/assets/ProjectsPhotos/ArtistPortfolio/CMS6.png";




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


import squeeKleen1 from "@/public/assets/ProjectsPhotos/squeekleen/squeekleen1.jpeg";
import squeeKleen2 from "@/public/assets/ProjectsPhotos/squeekleen/squeekleen2.jpeg";
import squeeKleen3 from "@/public/assets/ProjectsPhotos/squeekleen/squeekleen3.jpeg";


import imdb1 from "@/public/assets/ProjectsPhotos/imdbClone/imdb1.png";
import imdb2 from "@/public/assets/ProjectsPhotos/imdbClone/imdb2.png";
import imdb3 from "@/public/assets/ProjectsPhotos/imdbClone/imdb3.png";
import imdb4 from "@/public/assets/ProjectsPhotos/imdbClone/imdb4.png";
import imdb5 from "@/public/assets/ProjectsPhotos/imdbClone/imdb5.png";

import dearDiary1 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary1.png";
import dearDiary2 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary2.png";
import dearDiary3 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary3.png";
import dearDiary4 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary4.png";
import dearDiary5 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary5.png";
import dearDiary6 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary6.png";
import dearDiary7 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary7.png";
import dearDiary8 from "@/public/assets/ProjectsPhotos/dearDiary/dearDiary8.png";

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
    image: [squeeKleen1, squeeKleen2, squeeKleen3],
    link: "http://dev.squeekleen.com",
    linkText: "view website",
    tags: ["NextJs", "TailwindCss", "TypeScript", "Web"],
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
    image: [imdb1, imdb2, imdb3, imdb4, imdb5],
    link: "https://github.com/rashodkorala/IMDB-Clone",
    linkText: "view on GitHub",
    tags: ["React", "MondoDb", "Express", "TailwindCss", "Web"],
    Imagewidth: 1500,
    slidesToShow: 1,
  },
  {
    id: 4,
    title: "Dear Diary",
    description: "A personal diary app for recording thoughts, emotions, and experiences.",
    about: "Dear Diary is a personal diary app developed with Flutter, allowing users to record thoughts, emotions, and experiences. Integrated with Firebase for secure authentication and data management, the app provides a safe space for users to express themselves. With a user-friendly interface, Dear Diary offers a seamless diary experience on-the-go, catering to individual needs and preferences. Available as an open-source project on GitHub, Dear Diary represents my commitment to leveraging technology for holistic wellness, offering users a transformative diary journey.",
    image: [dearDiary1, dearDiary2, dearDiary3, dearDiary4, dearDiary5, dearDiary6, dearDiary7, dearDiary8],
    Imagewidth: 400,
    height: 1000,
    link: "https://github.com/rashodkorala/deardiary",
    video: "https://www.youtube-nocookie.com/embed/tLj80oOMzfI?si=UjXYujMuPiv0NfJF",
    linkText: "view on GitHub",
    tags: ["Flutter", "Firebase", "Mobile App"],
    slidesToShow: 3,
  },
  {
    id: 5,
    title: "Artist Portfolio",
    description:
      "Showcase your work, connect with clients, and grow your online presence.",
    about:
      "This project utilizes AWS Amplify as the backend to manage content efficiently. The website, built with Next.js and styled with Tailwind CSS, is responsive and mobile-friendly, designed to provide a seamless user experience. Developed to enhance my skills in AWS and client collaboration, the GitHub repository for this client project is available upon request.",
    image: [Artistportfolio1, Artistportfolio2, Artistportfolio3, CMS1, CMS2, CMS3, CMS4, CMS5, CMS6],
    link: "https://dev.bandumanamperi.com",
    linkText: "view website",
    tags: ["NextJs", "TailwindCss", "TypeScript", "Web", "AWS Amplify", "AWS S3", "Ongoing Project"],
    Imagewidth: 1500,
    slidesToShow: 1,

  }
];
