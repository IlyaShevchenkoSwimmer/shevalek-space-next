"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Photo } from "./Gallery";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface emblaCarouselProps {
  photos: Photo[];
  startingIndex: number;
}

export function EmblaCarousel({ photos, startingIndex }: emblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const previousSlides = useRef([]);

  const logSlidesInView = useCallback(
    (emblaApi: { slidesNotInView(): any; slidesInView: () => any }) => {
      const slidesInView = emblaApi.slidesInView();
      const container = document.getElementById("embla-container");
      if (slidesInView.length === 3) {
        console.log(slidesInView);
        if (slidesInView[0] > 2) {
        }
      }
    },
    []
  );

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const media = photos.map((photo, index) => {
    if (index > startingIndex - 5 && index < startingIndex + 5) {
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
    }
  });
  return (
    <div className="embla" ref={emblaRef} id="emblaGallery">
      <div className="embla__container h-full w-full" id="embla-container">
        {media}
      </div>
    </div>
  );
}
