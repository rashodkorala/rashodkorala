import React from 'react';
import PhotosGallery from "@/src/components/gallery/gallery";

// Define the structure of each image object
interface Image {
  id: number;
  src: string;
  span: string;
  width: number;
  height: number;
}

// Define the props structure for the Gallery component
interface GalleryProps {
  images: Image[];
}

// Gallery component
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return <PhotosGallery images={images} />;
}

// Fetching or generating the images data at build time
export async function getStaticProps() {
  const images = Array.from({ length: 86 }).map((_, i) => ({
    id: i,
    src: `/photography/img${i + 1}.jpg`,
    span: "span-2",
    width: 600,
    height: 400
  }));

  return {
    props: {
      images,
    },
  };
}

export default Gallery;
