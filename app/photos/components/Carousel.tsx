"use client";

import Image from "next/image";

import { Photo } from "./Gallery";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface CarouselProps {
  photos: Photo[];
  startingPhoto: number;
  carouselVisibility: "hidden" | "visible";
  setCarouselVisibility: Dispatch<SetStateAction<"hidden" | "visible">>;
}

export default function Carousel({
  photos,
  startingPhoto,
  carouselVisibility,
  setCarouselVisibility,
}: CarouselProps) {
  const carouselRef = useRef(null);
  const [slideInView, setSlideInView] = useState(startingPhoto);

  useEffect(() => {
    setSlideInView(startingPhoto);
  }, [startingPhoto]);

  const carouselMedia = photos.map((photo, index) => {
    if (!(index > slideInView - 5 && index < slideInView + 5)) {
      return;
    }
    return (
      <div
        className="w-[100vw] min-w-[100vw] h-full snap-center snap-always"
        id={"carousel" + index}
        key={photo.name}
      >
        <Image
          id={photo.name}
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

  const resizeCallback = () => {
    if (carouselRef.current && photos.length > 0) {
      if ((carouselRef.current as HTMLElement).children.length > 0) {
        const firstSlideID = (carouselRef.current as HTMLElement).children[0]
          .id;
        const firstSlide = Number(firstSlideID.slice(8));
        (carouselRef.current as HTMLElement).scrollLeft =
          (slideInView - firstSlide) * window.innerWidth;
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current && photos.length > 0) {
      if ((carouselRef.current as HTMLElement).children.length > 0) {
        const firstSlideID = (carouselRef.current as HTMLElement).children[0]
          .id;
        const firstSlide = Number(firstSlideID.slice(8));
        (carouselRef.current as HTMLElement).scrollLeft =
          (slideInView - firstSlide) * window.innerWidth;
      }
    }
    window.addEventListener("resize", resizeCallback);
    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, [slideInView, carouselMedia]);

  return (
    <section
      className="fixed w-[100vw] h-[100dvh] top-0 left-0 z-[200] bg-black"
      id="carouselSection"
      style={{ visibility: carouselVisibility }}
    >
      <div
        className="no-scrollbar w-[100vw] h-full flex overflow-scroll snap-x snap-mandatory"
        ref={carouselRef}
        onScroll={(event: React.UIEvent<HTMLElement>) => {
          const scrollLeft = (event.target as HTMLElement).scrollLeft;
          const slideWidth = window.innerWidth;

          if (scrollLeft % slideWidth === 0) {
            const firstSlideID = (event.target as HTMLElement).children[0].id;
            const firstSlide = Number(firstSlideID.slice(8));
            const currentSlide = scrollLeft / slideWidth + firstSlide;
            setSlideInView(currentSlide);
          }
        }}
      >
        {carouselMedia}
      </div>
      <div
        className="absolute top-10 right-10 w-10 h-10 flex justify-center items-center hover:cursor-pointer"
        onClick={() => {
          setCarouselVisibility("hidden");
        }}
      >
        <div className="absolute bg-amber-50 w-full h-0.5 rotate-45"></div>
        <div className="absolute bg-amber-50 w-full h-0.5 rotate-135"></div>
      </div>
    </section>
  );
}
