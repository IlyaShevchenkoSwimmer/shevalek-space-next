"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GalleryFilterButton from "./GalleryFilterButton";
import { gridPhotosArray } from "@/app/helpers/gridPhotosArray";
import GridCard from "./GridCard";
import { EmblaCarousel } from "./EmblaCarousel";

export interface Photo {
  name: string;
  orientation: string;
  dateTime: string;
  category: string;
}

interface GalleryVersion {
  version: string;
}

const emblaClasses = ["embla", "embla__container", "embla__slide"];

export default function Gallery({ version }: GalleryVersion) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("");
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
          if (
            entry.isIntersecting &&
            !emblaClasses.includes(entry.target.classList[0])
          ) {
            (entry.target as HTMLElement).style.scale = "1";
          }

          if (
            !entry.isIntersecting &&
            !emblaClasses.includes(entry.target.classList[0])
          ) {
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
  console.log(gridLayout);
  const media = gridLayout.map((photosArr) => {
    return <GridCard photosArr={photosArr} key={photosArr[0].name} />;
  });

  return (
    <section
      id="gallery"
      className="relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6"
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

      {photos.map((photo, index) => {
        if (photo.category === "Дипломы" && version !== "diplomas") {
          return;
        }
        if (photo.category !== "Дипломы" && version === "diplomas") {
          return;
        }
        if (currentFilter !== "") {
          if (
            photo.category !== currentFilter &&
            photo.dateTime.slice(0, 4) !== currentFilter
          ) {
            return;
          }
        }
        return media[index];
      })}
      <EmblaCarousel photos={photos} />
    </section>
  );
}
