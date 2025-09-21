import AnimationLogo from "./AnimationLogo";
import MenuButton from "./MenuButton";

export default function FixedHeader() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-center items-center bg-black/70">
      <MenuButton />
      <AnimationLogo logoText="Shevalek.Space" />
    </header>
  );
}
