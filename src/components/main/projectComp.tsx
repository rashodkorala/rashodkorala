import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/public/assets/data/projectData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const ProjectComp = () => {
  const router = useRouter();
  const { projectId } = router.query;
  // Find project by projectId
  const project = projectData.find(
    (project) => project.id === Number(projectId)
  );

  // Render project details if projectId is valid
  if (project) {
    const sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidetoStart: 1,
      slidesToScroll: 1,
      slidesToShow: 3,
      customPaging: function (i: number) {
        return (
          <a className="hidden md:inline-block">
            <Image src={project.image[i]} alt="" />
          </a>
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            Arrows: false,
          },
        },
      ],
    };

    return (
      <div className="w-full md:h-screen bg-transparent md:pt-[120px]">
        <div className="max-w-[1500px] mx-auto p-4 flex flex-col h-full xsm:px-5 justify-center md:items-center ">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-[48px] font-bold">{project.title}</h1>
            <div className=" flex flex-wrap gap-4 pl-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-white ring-2 ring-blue-500 px-2 py-1 rounded-3xl text-center bg-transparent hover:scale-110 transition-all duration-1000 ease-in-out min-w-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-systemGray pl-4">{project.about}</p>
          </div>

          <div className="max-w-[1000px] justify-center items-center pb-10">
            <Slider
              {...sliderSettings}
              className="text-white brightness-90 justify-center items-center flex"
            >
              {project.image.map((image, index) => (
                <Image
                  src={image}
                  alt=""
                  key={index}
                  className="p-7 max-w-[700px]"
                />
              ))}
            </Slider>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-[200px] flex justify-center bg-transparent px-2 py-2 rounded-3xl ring-2 ring-blue-500 m-4 hover:scale-110 transition-all duration-1000 ease-in-out "
            >
              View on GitHub
            </Link>
            <Link href="/#Projects">back to projects</Link>
          </div>
        </div>
      </div>
    );
  } else {
    console.log("Project not found");
    return (
      <div className="flex justify-center items-center h-screen w-full">
        Project not found
      </div>
    );
  }
};

export default ProjectComp;
