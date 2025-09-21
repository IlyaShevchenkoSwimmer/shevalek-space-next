"use client";

import { useCallback, useEffect, useRef } from "react";

import Image, { StaticImageData } from "next/image";

import { handleScrollImage } from "../helpers/handleScroll";

export default function OnScrollImage({
  imageSrc,
}: {
  imageSrc: StaticImageData;
}) {
  const onScrollImageRef = useRef(null);

  const handleScroll = useCallback(() => {
    const imageSection = document.getElementById(
      "image-section"
    ) as HTMLElement;
    const onScrollImage = onScrollImageRef.current as unknown as HTMLElement;
    handleScrollImage(imageSection, onScrollImage);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div className="w-[85%] md:w-[60%] lg:w-[50%] h-[20vh] md:h-[25vh] lg:h-[30vh]">
      <Image
        src={imageSrc}
        alt="Shevalek.Space"
        priority
        className="w-full h-full object-cover"
        style={{ objectPosition: "50% 0%" }}
        ref={onScrollImageRef}
      />
    </div>
  );
}
