import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectComp from '@/src/components/main/projectComp';
import { useRouter } from 'next/router';

const ProjectDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <>
      <ProjectComp/>
    </>
  );
};

export default ProjectDetails;
