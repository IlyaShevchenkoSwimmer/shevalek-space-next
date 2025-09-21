"use client";

import Link from "next/link";
import CloseMenuButton from "./CloseMenuButton";
import Image from "next/image";

export default function AsideMenu() {
  return (
    <aside
      className="fixed top-0 left-0 z-50 flex flex-col justify-between pt-[20vh] pb-[15vh] pl-[10vw] md:pl-[7vw] bg-amber-50 h-lvh w-[100vw] md:w-[60vw] lg:w-[40vw] transition-all ease-in-out duration-500 aside-hidden"
      id="aside-menu"
    >
      <Link
        href="/"
        className="absolute left-8 top-8 text-3xl"
        onClick={() => {
          const asideMenu = document.getElementById(
            "aside-menu"
          ) as HTMLElement;
          asideMenu.classList.toggle("aside-hidden");
        }}
      >
        Shevalek.Space
      </Link>
      <ul className="flex flex-col gap-5 text-2xl">
        <li className="flex items-center gap-2 aside-menu-li">
          <div className="w-2 h-2 bg-black rounded-full opacity-0 transition ease-in-out duration-500"></div>
          <Link
            href="/photos"
            onClick={() => {
              const asideMenu = document.getElementById(
                "aside-menu"
              ) as HTMLElement;
              asideMenu.classList.toggle("aside-hidden");
            }}
          >
            Фото
          </Link>
        </li>
        <li className="flex items-center gap-2 aside-menu-li">
          <div className="w-2 h-2 bg-black rounded-full opacity-0 transition ease-in-out duration-500"></div>
          <Link
            href="/notes"
            onClick={() => {
              const asideMenu = document.getElementById(
                "aside-menu"
              ) as HTMLElement;
              asideMenu.classList.toggle("aside-hidden");
            }}
          >
            Стихи
          </Link>
        </li>
        <li className="flex items-center gap-2 aside-menu-li">
          <div className="w-2 h-2 bg-black rounded-full opacity-0 transition ease-in-out duration-500"></div>
          <Link
            href="/diplomas"
            onClick={() => {
              const asideMenu = document.getElementById(
                "aside-menu"
              ) as HTMLElement;
              asideMenu.classList.toggle("aside-hidden");
            }}
          >
            Дипломы
          </Link>
        </li>
      </ul>
      <div>
        <div className="bg-black w-[90%] h-0.5 mb-5"></div>
        <article className="flex justify-evenly items-center w-[90%]">
          <a
            href="https://t.me/ShevalekSpace"
            target="_blank"
            className="w-14 h-14 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
          >
            <Image
              width={20}
              height={20}
              src="/tg.png"
              alt="TG"
              className="w-[60%]"
            />
          </a>

          <a
            href="https://vk.com/video-224999539_456239022"
            target="_blank"
            className="w-14 h-14 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
          >
            <Image
              width={20}
              height={20}
              src="/vk.png"
              alt="VK"
              className="w-[60%]"
            />
          </a>

          <a
            href="https://music.yandex.ru/artist/22786250"
            target="_blank"
            className="w-14 h-14 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
          >
            <Image
              width={20}
              height={20}
              src="/yandex-music.png"
              alt="yandex-music"
              className="w-[60%]"
            />
          </a>

          <a
            href="https://litres.ru/69551509"
            target="_blank"
            className="w-14 h-14 rounded-full bg-amber-50 flex justify-center items-center hover:scale-105 transition ease-in-out duration-300"
          >
            <Image
              width={20}
              height={20}
              src="/litres.png"
              alt="litres"
              className="w-[60%] rounded-full"
            />
          </a>
        </article>
      </div>
      <CloseMenuButton />
    </aside>
  );
}
