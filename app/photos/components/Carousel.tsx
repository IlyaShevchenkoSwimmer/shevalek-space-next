import Image from "next/image";

import { Photo } from "./Gallery";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  photos: Photo[];
  startingPhoto: number;
}

export default function Carousel({ photos, startingPhoto }: CarouselProps) {
  const carouselRef = useRef(null);
  const currentPhotoRef = useRef(startingPhoto);
  const [initialized, setInitialized] = useState(false);
  const [media, setMedia] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (carouselRef.current && photos.length > 0) {
      const newMedia = photos.map((photo, index) => {
        if (!(index > startingPhoto - 5 && index < startingPhoto + 5)) {
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
      setMedia(newMedia as unknown as ReactNode[]);
    }
  }, [photos]);

  useEffect(() => {
    if (carouselRef.current && media.length > 0) {
      const lastSlideID = (carouselRef.current as HTMLElement).children[
        (carouselRef.current as HTMLElement).children.length - 1
      ].id;
      const firstSlideID = (carouselRef.current as HTMLElement).children[0].id;
      const lastSlide = Number(lastSlideID.slice(8));
      const firstSlide = Number(firstSlideID.slice(8));
      console.log(firstSlide, lastSlide, currentPhotoRef.current);
      (carouselRef.current as HTMLElement).scrollLeft =
        (currentPhotoRef.current - firstSlide + 2) * window.innerHeight;
    }
  }, [media]);

  return (
    <section className="fixed w-[100vw] h-[100vh] top-0 left-0 z-[200]">
      <div
        className="w-[100vw] h-full flex overflow-scroll snap-x snap-mandatory"
        ref={carouselRef}
        onScroll={(event: React.UIEvent<HTMLElement>) => {
          const scrollLeft = Math.floor(
            (event.target as HTMLElement).scrollLeft
          );
          const slideWidth = Math.floor(window.innerWidth);

          if (scrollLeft % slideWidth === 0) {
            const lastSlideID = (event.target as HTMLElement).children[
              (event.target as HTMLElement).children.length - 1
            ].id;
            const firstSlideID = (event.target as HTMLElement).children[0].id;
            const lastSlide = Number(lastSlideID.slice(8));
            const firstSlide = Number(firstSlideID.slice(8));
            const currentSlide = scrollLeft / slideWidth + firstSlide;
            currentPhotoRef.current = currentSlide;

            if (
              lastSlide - currentSlide === 1 &&
              lastSlide < photos.length - 1
            ) {
              const nextMedia = [...media];
              nextMedia.shift();
              nextMedia.push(
                <div
                  className="w-[100vw] min-w-[100vw] h-full snap-center snap-always"
                  id={"carousel" + (lastSlide + 1)}
                  key={photos[lastSlide + 1].name}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/photos/" + photos[lastSlide + 1].name}
                    alt="photo"
                    className="w-full h-full object-contain"
                    draggable={false}
                  ></Image>
                </div>
              );
              setMedia(nextMedia);
            }
            if (currentSlide - firstSlide === 1 && firstSlide > 0) {
              const nextMedia = [...media];
              nextMedia.unshift(
                <div
                  className="w-[100vw] min-w-[100vw] h-full snap-center snap-always"
                  id={"carousel" + (firstSlide - 1)}
                  key={photos[firstSlide - 1].name}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={"/photos/" + photos[firstSlide - 1].name}
                    alt="photo"
                    className="w-full h-full object-contain"
                    draggable={false}
                  ></Image>
                </div>
              );
              setMedia(nextMedia);
            }
          }
        }}
      >
        {media}
      </div>
    </section>
  );
}
