import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '@/public/assets/data/projectData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {}

const ProjectComp = () => {
  
    const router = useRouter();
    const { projectId } = router.query;
    // Find project by projectId
    const project = projectData.find((project) => project.id === Number(projectId));
  
    // Render project details if projectId is valid
    if (!project) {
      console.log('Project not found');
      return <div className='flex justify-center items-center h-screen w-full'>Project not found</div>;
    }
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
  
    return (
      <div className="h-screen w-full bg-transparent">
         <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full xsm:px-5">
          <h1 className="text-[48px] font-bold mb-4 over">{project.title}</h1>
          <p className="text-lg mb-4 text-systemGray">{project.about}</p>
          <div className='max-w-[1000px] p-4'>
          <Slider {...sliderSettings} className=' text-white p-4'>
            {project.image.map((image, index) => (
              <div key={index}>
                {/* <Image src={image} width={300} height={300} alt='' /> */}
                <Image src={image} width={1000} height={300} alt='' />
              </div>
            ))}
          </Slider>
          </div>
          
          <div className='flex flex-col justify-center items-center'>
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className=" w-[200px] flex justify-center bg-transparent px-2 py-2 rounded-3xl ring-2 ring-blue-500 m-4 hover:scale-110 transition-all duration-1000 ease-in-out ">
            View on GitHub
          </Link>
            <Link href="/#Projects">
              
            back to projects
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ProjectComp