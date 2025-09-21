"use client";

export default function CloseMenuButton() {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center absolute right-6 top-6 hover:cursor-pointer hover:bg-black/20 rounded-full transition duration-500 ease-in-out"
      onClick={() => {
        const asideMenu = document.getElementById("aside-menu") as HTMLElement;
        asideMenu.classList.toggle("aside-hidden");
      }}
    >
      <div className="absolute h-[2px] w-6 rotate-45 rounded-l bg-black"></div>
      <div className="absolute h-[2px] w-6 rotate-135 rounded-l bg-black"></div>
    </button>
  );
}
