"use client"
import Apple from '@/public/Apple.jpg'
import Banner from '@/public/Bannar.png'
import { useState } from 'react';
import Image from 'next/image';


const carouselimages = () => {
    const images = [
        Apple,Apple,Banner,Banner
    ]
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
      <div className="flex  items-center gap-5">
         <div className="flex gap-2 overflow-x-auto flex-col justify-center items-center">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${
                selectedImage === image ? 'border-blue-500' : 'border-transparent'
              } hover:border-blue-500 transition-all duration-200`}
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="w-full max-w-lg">
          <Image
            src={selectedImage}
            alt="Selected product"
            className="w-96 h-96 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Thumbnails */}
       
      </div>
    );
}

export default carouselimages