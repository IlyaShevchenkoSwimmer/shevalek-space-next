"use client";

export default function MenuButton() {
  return (
    <button
      className="flex justify-center pb-2 pt-2 pl-3 pr-3 items-center gap-3 absolute rounded-3xl left-5 lg:left-10 transition duration-500 ease-in-out bg-black/0 hover:cursor-pointer hover:bg-black/60"
      onClick={() => {
        const asideMenu = document.getElementById("aside-menu") as HTMLElement;
        asideMenu.classList.toggle("aside-hidden");
      }}
    >
      <div className="w-5 h-3 flex flex-col justify-between">
        <div className="h-[2px] rounded-l bg-amber-50"></div>
        <div className="h-[2px] rounded-l bg-amber-50"></div>
        <div className="h-[2px] rounded-l bg-amber-50"></div>
      </div>
      <h5 className="text-amber-50 hidden md:inline">Меню</h5>
    </button>
  );
}
