import fs from "fs";
import { NextResponse } from "next/server";
import * as ExifReader from "exifreader";

interface Keywords {
  id: number;
  value: number[];
  description: string;
}

interface Photo {
  orientation: string;
  dateTime: string;
  category: string;
  name: string;
}

export async function GET() {
  const photos = fs.readdirSync(process.cwd() + "/public/photos");
  const photosMetadata = photos.map((photo) => {
    const info = getExif(process.cwd() + "/public/photos/" + photo);
    info.name = photo;
    return info;
  });
  const sortedPhotos = sortPhotosByDate(photosMetadata as Photo[]);
  fs.writeFileSync(
    process.cwd() + "/photosInfo.json",
    JSON.stringify(sortedPhotos),
    {
      encoding: "utf-8",
    }
  );
  return NextResponse.json(sortedPhotos);
}

function getExif(photoPath: string) {
  const buffer = fs.readFileSync(photoPath);
  const tags = ExifReader.load(buffer);
  const info = {
    orientation:
      (tags["Image Height"]?.value as number) >
      (tags["Image Width"]?.value as number)
        ? "vertical"
        : "horizontal",
    dateTime: tags["DateTimeOriginal"]?.description,
    category: (tags["Keywords"] as Keywords)?.description,
    name: "",
  };
  return info;
}

function sortPhotosByDate(photos: Photo[]) {
  const result = photos.sort((first, second) => {
    if (first.dateTime.slice(0, 4) > second.dateTime.slice(0, 4)) {
      return -1;
    }
    if (first.dateTime.slice(0, 4) < second.dateTime.slice(0, 4)) {
      return 1;
    }
    if (first.dateTime.slice(5, 7) > second.dateTime.slice(5, 7)) {
      return -1;
    }
    if (first.dateTime.slice(5, 7) < second.dateTime.slice(5, 7)) {
      return 1;
    }
    if (first.dateTime.slice(8, 10) > second.dateTime.slice(8, 10)) {
      return -1;
    }
    if (first.dateTime.slice(8, 10) < second.dateTime.slice(8, 10)) {
      return 1;
    }
    if (first.dateTime.slice(11, 13) > second.dateTime.slice(11, 13)) {
      return -1;
    }
    if (first.dateTime.slice(11, 13) < second.dateTime.slice(11, 13)) {
      return 1;
    }
    if (first.dateTime.slice(14, 16) > second.dateTime.slice(14, 16)) {
      return -1;
    }
    if (first.dateTime.slice(14, 16) < second.dateTime.slice(14, 16)) {
      return 1;
    }
    if (first.dateTime.slice(17, 19) > second.dateTime.slice(17, 19)) {
      return -1;
    }
    if (first.dateTime.slice(17, 19) < second.dateTime.slice(17, 19)) {
      return 1;
    }
    return 0;
  });
  return result;
}
