"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GalleryFilterButton from "./GalleryFilterButton";

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

      {photos.map((photo) => {
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
        return (
          <div
            className="h-[40vh] rounded-3xl shadow-2xl transition-all ease-in-out duration-500"
            key={photo.name}
          >
            <Image
              width={1000}
              height={1000}
              src={"/photos/" + photo.name}
              alt="photo"
              className="w-full h-full object-cover rounded-3xl"
            ></Image>
          </div>
        );
      })}
    </section>
  );
}
