import Image from "next/image";

type SocialMedia = "tg" | "vk" | "ym" | "lt";

interface LinksArticleProps {
  socialMedias: SocialMedia[];
}

export default function LinksArticle({ socialMedias }: LinksArticleProps) {
  return (
    <article className="flex justify-evenly items-center w-[80%] md:w-[60%] lg:w-[40%]">
      {socialMedias.includes("tg") ? (
        <a
          href="https://t.me/ShevalekSpace"
          target="_blank"
          className="w-12 h-12 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
        >
          <Image
            width={20}
            height={20}
            src="/tg.png"
            alt="TG"
            className="w-[60%]"
          />
        </a>
      ) : (
        ""
      )}
      {socialMedias.includes("vk") ? (
        <a
          href="https://vk.com/video-224999539_456239022"
          target="_blank"
          className="w-12 h-12 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
        >
          <Image
            width={20}
            height={20}
            src="/vk.png"
            alt="VK"
            className="w-[60%]"
          />
        </a>
      ) : (
        ""
      )}
      {socialMedias.includes("ym") ? (
        <a
          href="https://music.yandex.ru/artist/22786250"
          target="_blank"
          className="w-12 h-12 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
        >
          <Image
            width={20}
            height={20}
            src="/yandex-music.png"
            alt="yandex-music"
            className="w-[60%]"
          />
        </a>
      ) : (
        ""
      )}
      {socialMedias.includes("lt") ? (
        <a
          href="https://litres.ru/69551509"
          target="_blank"
          className="w-12 h-12 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
        >
          <Image
            width={20}
            height={20}
            src="/litres.png"
            alt="litres"
            className="w-[60%] rounded-full"
          />
        </a>
      ) : (
        ""
      )}
    </article>
  );
}
