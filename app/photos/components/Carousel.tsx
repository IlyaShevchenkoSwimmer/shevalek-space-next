import Image from "next/image";

import { Photo } from "./Gallery";
import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  photos: Photo[];
  startingPhoto: number;
}

export default function Carousel({ photos, startingPhoto }: CarouselProps) {
  const carouselRef = useRef(null);
  const [slide, setSlide] = useState(startingPhoto);
  const handleScroll = useCallback((event: Event) => {
    const scrollLeft = Math.floor((event.target as HTMLElement).scrollLeft);
    const slideWidth = Math.floor(window.innerWidth);
    if (scrollLeft % slideWidth === 0) {
      const currentSlide = scrollLeft / slideWidth;
      const lastSlideID = (event.target as HTMLElement).children[
        (event.target as HTMLElement).children.length - 1
      ].id;
      const firstSlideID = (event.target as HTMLElement).children[0].id;
      const lastSlide = Number(lastSlideID.slice(8));
      const firstSlide = Number(firstSlideID.slice(8));
      if (lastSlide - currentSlide === 1) {
        setSlide(currentSlide);
      }
    }
  }, []);
  useEffect(() => {
    if (carouselRef.current) {
      (carouselRef.current as HTMLElement).addEventListener(
        "scroll",
        handleScroll
      );
    }
  }, [slide]);
  const media = photos.map((photo, index) => {
    if (!(index > slide - 4 && index < slide + 4)) {
      return;
    }
    return (
      <div
        className="w-[100vw] min-w-[100vw] h-full snap-center snap-always"
        id={"carousel" + index}
        key={photo.name}
      >
        <Image
          width={1000}
          height={1000}
          src={"/photos/" + photo.name}
          alt="photo"
          className="w-full h-full object-contain"
          draggable={false}
        ></Image>
      </div>
    );
  });
  return (
    <section className="fixed w-[100vw] h-[100vh] top-0 left-0 z-[200]">
      <div
        className="w-[100vw] h-full flex overflow-scroll snap-x snap-mandatory"
        ref={carouselRef}
      >
        {media}
      </div>
    </section>
  );
}
