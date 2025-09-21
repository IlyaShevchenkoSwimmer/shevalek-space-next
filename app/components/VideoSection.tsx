import Link from "next/link";

interface VideoSectionProps {
  videoSrc: string;
  sectionName?: string;
  sectionHeader: string;
  description?: string;
  linkHref: string;
  linkHeader: string;
}

export default function VideoSection({
  videoSrc,
  sectionName,
  sectionHeader,
  description,
  linkHref,
  linkHeader,
}: VideoSectionProps) {
  return (
    <section className="w-full h-[60vh] md:h-fit relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4"></source>
      </video>
      <div className="absolute w-full h-full top-0 left-0 text-amber-50 bg-black/30 flex flex-col justify-center items-center gap-5">
        <h5 className="text-sm">
          {sectionName ? sectionName.toUpperCase() : ""}
        </h5>
        <h1 className="text-3xl">{sectionHeader}</h1>
        <p className="w-[90%] md:w-[50%] text-center">{description ?? ""}</p>
        <Link
          href={linkHref}
          className="block bg-amber-50 text-black rounded-3xl py-2 pl-8 pr-8 text-xl hover:scale-105 transition ease-in-out duration-300"
        >
          {linkHeader}
        </Link>
      </div>
    </section>
  );
}
