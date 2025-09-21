import LinksArticle from "./LinksArticle";
import OnScrollImage from "./OnScrollImage";
import { StaticImageData } from "next/image";

interface ImageSectionProps {
  imageSrc: StaticImageData;
  links?: boolean;
}

export default function ImageSection({ imageSrc, links }: ImageSectionProps) {
  return (
    <section
      className="flex flex-col justify-evenly items-center w-full h-[60vh] bg-gray-700"
      id="image-section"
    >
      <OnScrollImage imageSrc={imageSrc} />
      {links ? <LinksArticle socialMedias={["tg", "vk", "ym", "lt"]} /> : ""}
    </section>
  );
}
