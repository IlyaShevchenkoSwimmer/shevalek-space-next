import { Photo } from "./Gallery";
import Image from "next/image";

interface GridCardProps {
  photosArr: Photo[];
}

interface gridCoords {
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;
}
export default function GridCard({ photosArr }: GridCardProps) {
  const gridCoordsArr: gridCoords[] = getGridCoordsArr(photosArr);

  const media = photosArr.map((photo, index) => {
    return (
      <div
        className="rounded-3xl shadow-2xl transition-all ease-in-out duration-500"
        style={gridCoordsArr[index]}
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
  });
  return (
    <article className="w-full max-h-[60vh] grid grid-cols-6 grid-rows-2 gap-6">
      {media}
    </article>
  );
}

function getGridCoordsArr(photosArr: Photo[]): gridCoords[] {
  if (photosArr.length < 2) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
    ];
  }
  if (photosArr.length === 2) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "vertical" &&
    photosArr[1].orientation === "vertical" &&
    photosArr[2].orientation === "vertical"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 5, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "vertical" &&
    photosArr[1].orientation === "horizontal" &&
    photosArr[2].orientation === "horizontal"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 3, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 3, gridColumnEnd: 7, gridRowStart: 2, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "horizontal" &&
    photosArr[1].orientation === "horizontal" &&
    photosArr[2].orientation === "vertical"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3 },
      { gridColumnStart: 5, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "horizontal" &&
    photosArr[1].orientation === "vertical" &&
    photosArr[2].orientation === "horizontal"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 5, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "horizontal" &&
    photosArr[1].orientation === "vertical" &&
    photosArr[2].orientation === "vertical"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3 },
      { gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 2, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "vertical" &&
    photosArr[1].orientation === "vertical" &&
    photosArr[2].orientation === "horizontal"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 2 },
      { gridColumnStart: 1, gridColumnEnd: 7, gridRowStart: 2, gridRowEnd: 3 },
    ];
  }
  if (
    photosArr[0].orientation === "vertical" &&
    photosArr[1].orientation === "horizontal" &&
    photosArr[2].orientation === "vertical"
  ) {
    return [
      { gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 2, gridColumnEnd: 6, gridRowStart: 1, gridRowEnd: 3 },
      { gridColumnStart: 6, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
    ];
  }
  return [
    { gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3 },
    { gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 3 },
    { gridColumnStart: 5, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3 },
  ];
}
