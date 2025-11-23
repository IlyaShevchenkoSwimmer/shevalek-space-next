"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { useEffect, useState } from "react";
import { text } from "stream/consumers";

interface Note {
  text: string[];
  heading: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <section className="relative w-[100vw]">
      <Swiper spaceBetween={30} slidesPerView={1.4} centeredSlides className="">
        {notes.map((note) => {
          return (
            <SwiperSlide
              key={note.heading}
              className="bg-amber-50 text-gray-700 max-h-[80dvh] min-h-[80dvh] h-[80dvh] overflow-scroll p-6 rounded-4xl"
            >
              <h1 className="text-center text-2xl font-bold mb-3">
                {note.heading}
              </h1>
              {note.text.map((textString, index) => {
                return (
                  <p
                    key={textString + index}
                    className="text-center italic min-h-2.5"
                  >
                    {textString}
                  </p>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
