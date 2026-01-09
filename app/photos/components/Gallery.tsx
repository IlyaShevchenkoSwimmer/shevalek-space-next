"use client";

import { useEffect, useState } from "react";
import GalleryFilterButton from "./GalleryFilterButton";
import { gridPhotosArray } from "@/app/helpers/gridPhotosArray";
import GridCard from "./GridCard";
import Carousel from "./Carousel";

export interface Photo {
  name: string;
  orientation: string;
  dateTime: string;
  category: string;
}

interface GalleryVersion {
  version: string;
}

export default function Gallery({ version }: GalleryVersion) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentFilter, setCurrentFilter] =
    useState<string>("Небесная жемчужина");
  const [startingPhoto, setStartingPhoto] = useState<number>(0);
  const [carouselVisibility, setCarouselVisibility] = useState<
    "hidden" | "visible"
  >("hidden");

  useEffect(() => {
    fetch("/api/photos/refresh");
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("#gallery div");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.scale = "1";
          }

          if (!entry.isIntersecting) {
            (entry.target as HTMLElement).style.scale = "0.3";
          }
        });
      },
      { threshold: 0.5 }
    );

    for (let i = 0; i < targets.length; i++) {
      observer.observe(targets[i]);
    }
  }, [photos, currentFilter]);

  const gridLayout = gridPhotosArray(photos, currentFilter, version);

  const media = gridLayout.map((photosArr) => {
    return <GridCard photosArr={photosArr} key={photosArr[0].name} />;
  });

  const carouselPhotos = [];
  for (const photo of photos) {
    if (photo.category === "Дипломы" && version !== "diplomas") {
      continue;
    }
    if (photo.category !== "Дипломы" && version === "diplomas") {
      continue;
    }
    if (currentFilter !== "") {
      if (
        photo.category !== currentFilter &&
        photo.dateTime.slice(0, 4) !== currentFilter
      ) {
        continue;
      }
    }
    carouselPhotos.push(photo);
  }

  return (
    <>
      <section
        id="gallery"
        className="relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6"
        onClick={(event) => {
          const galleryWrapper = document.getElementById(
            "gallery"
          ) as HTMLElement;

          let counter = 0;
          for (const elem of galleryWrapper.children) {
            for (const photoDiv of (elem as HTMLElement).children) {
              if (event.target === photoDiv.children[0]) {
                if (version === "diplomas") {
                  setStartingPhoto(counter);
                } else {
                  setStartingPhoto(counter - 3);
                }

                setCarouselVisibility("visible");
              }
              counter++;
            }
          }
        }}
      >
        {version === "diplomas" ? (
          <></>
        ) : (
          <GalleryFilterButton
            photos={photos}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        )}

        {media}
      </section>

      <Carousel
        photos={carouselPhotos}
        startingPhoto={startingPhoto}
        carouselVisibility={carouselVisibility}
        setCarouselVisibility={setCarouselVisibility}
      />
    </>
  );
}
