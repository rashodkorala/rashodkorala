import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { TailSpin } from 'react-loader-spinner';

interface Image {
  id: number;
  src: string;
  span: string;
  width: number;
  height: number;
}

interface PhotosGalleryProps {
  images: Image[];
}

const PhotosGallery: React.FC<PhotosGalleryProps> = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="gallery" className="w-full bg-transparent">
      {/* Loading screen, etc. */}
      {/* Gallery content */}
      {!isLoading && (
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
          <div className="columns-3 gap-3 mx-auto space-y-3 py-28">
            {images.map((image) => (
              <div key={image.id} className="break-inside-avoid">
                <Image src={image.src} alt={`image ${image.id}`} className={image.span} width={image.width} height={image.height} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosGallery;
