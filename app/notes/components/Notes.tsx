"use client";

import { useEffect, useState } from "react";

interface Note {
  text: string;
  heading: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <section className="relative left-[2vw] w-[96vw]">
      {notes.map((note) => {
        return (
          <article key={note.heading}>
            <h1 className="text-amber-50">{note.heading}</h1>
            <p className="text-amber-50">{note.text}</p>
          </article>
        );
      })}
    </section>
  );
}
