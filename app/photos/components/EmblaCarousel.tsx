"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Photo } from "./Gallery";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface emblaCarouselProps {
  photos: Photo[];
}

export function EmblaCarousel({ photos }: emblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const logSlidesInView = useCallback(
    (emblaApi: { slidesNotInView(): any; slidesInView: () => any }) => {
      const slidesInView = emblaApi.slidesInView();
      const slidesNotInView = emblaApi.slidesNotInView();

      slidesInView.forEach((slide: number) => {
        const slideDiv = document.getElementById("slide" + slide);
        ((slideDiv as HTMLElement).children[0] as HTMLElement).style.display =
          "block";
      });

      slidesNotInView.forEach((slide: number) => {
        const slideDiv = document.getElementById("slide" + slide);
        ((slideDiv as HTMLElement).children[0] as HTMLElement).style.display =
          "none";
      });
    },
    []
  );

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const media = photos.map((photo, index) => {
    return (
      <div
        className="embla__slide w-full h-full"
        key={photo.name}
        id={"slide" + index}
      >
        <Image
          src={"/photos/" + photo.name}
          alt="slide"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
    );
  });
  return (
    <div className="embla" ref={emblaRef} id="emblaGallery">
      <div className="embla__container h-full w-full">{media}</div>
    </div>
  );
}
