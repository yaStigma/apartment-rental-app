import { useState } from "react";
import type { Photo } from "@/types/apartment";

interface ImageSliderProps {
  photos: Photo[];
}

export default function ImageSlider({ photos }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-80 h-60 overflow-hidden rounded-xl">
      <img
        src={photos[currentSlide].url}
        className="w-full h-full object-cover"
        alt={`Apartment photo ${currentSlide + 1}`}
      />
      <div className="absolute left-0 right-0 top-1/2 flex justify-between transform -translate-y-1/2 px-2">
        <button
          onClick={handlePrev}
          className="btn btn-circle size-8 bg-white/70 hover:bg-white"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle size-8 bg-white/70 hover:bg-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
}