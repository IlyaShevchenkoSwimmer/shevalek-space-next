import fs from "fs";
import * as ExifReader from "exifreader";

refreshPhotosInfo();

export async function refreshPhotosInfo() {
  const photos = fs.readdirSync("./public/photos");
  const photosMetadata = photos.map((photo) => {
    const info = getExif("./public/photos/" + photo);
    info.name = photo;
    return info;
  });
  const sortedPhotos = sortPhotosByDate(photosMetadata);
  fs.writeFileSync("./photosInfo.json", JSON.stringify(sortedPhotos), {
    encoding: "utf-8",
  });
  return sortedPhotos;
}

function getExif(photoPath) {
  const buffer = fs.readFileSync(photoPath);
  const tags = ExifReader.load(buffer);
  const info = {
    orientation:
      tags["Image Height"]?.value > tags["Image Width"]?.value
        ? "vertical"
        : "horizontal",
    dateTime: tags["DateTimeOriginal"]?.description,
    category: tags["Keywords"]?.description,
    name: "",
  };
  return info;
}

function sortPhotosByDate(photos) {
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
