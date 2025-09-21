"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { Photo } from "./Gallery";

interface GalleryFilterButtonProps {
  photos: Photo[];
  currentFilter: string;
  setCurrentFilter: Dispatch<SetStateAction<string>>;
}
export default function GalleryFilterButton({
  photos,
  currentFilter,
  setCurrentFilter,
}: GalleryFilterButtonProps) {
  const categoriesSet = new Set<string>();
  const yearsSet = new Set<string>();
  photos.forEach((photo) => {
    categoriesSet.add(photo.category);
    yearsSet.add(photo.dateTime.slice(0, 4));
  });
  const categories = Array.from(categoriesSet);
  const years = Array.from(yearsSet);
  return (
    <button
      onClick={() => {
        const filters = document.getElementById("category-filters");
        filters?.classList.toggle("hidden");
      }}
      className="fixed z-50 top-4 right-6 pt-1 pb-1 pl-5 pr-5 text-amber-50 bg-gray-500 rounded-xl hover:cursor-pointer hover:bg-gray-600 transition-colors duration-500 ease-in-out"
    >
      Фильтры
      <div
        id={"category-filters"}
        className="absolute top-10 w-[60vw] right-2 bg-gray-500 rounded-2xl hidden"
      >
        <div
          className="flex gap-2 justify-center items-center pt-3 pb-2 pl-4 pr-4 border-b-1 border-b-amber-50 filters"
          onClick={() => setCurrentFilter("")}
        >
          <div className="rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"></div>
          Без фильтра
        </div>
        <div className="flex">
          <div className="w-[50%] flex flex-col border-r-1 border-r-amber-50">
            {categories.map((category) => {
              if (category === "Дипломы") {
                return;
              }
              return (
                <div
                  onClick={() => setCurrentFilter(category)}
                  key={category}
                  className="flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters"
                >
                  <div className="rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"></div>
                  {category}
                </div>
              );
            })}
          </div>
          <div className="w-[50%] flex flex-col border-l-1 border-l-amber-50">
            {years.map((year) => {
              return (
                <div
                  onClick={() => setCurrentFilter(year)}
                  key={year}
                  className="flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters"
                >
                  <div className="rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"></div>
                  {year}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </button>
  );
}
