import Link from "next/link";

interface AnimationLogoProps {
  logoText: string;
}

export default function AnimationLogo({ logoText }: AnimationLogoProps) {
  const logoArr = Array.from(logoText).map((letter, index) => {
    return (
      <span
        className="text-amber-50 text-2xl relative"
        style={{
          animation: `logoLetterAnimation 2s ease-in-out ${index * 50}ms`,
        }}
        key={"letter" + index}
      >
        {letter}
      </span>
    );
  });
  return (
    <Link href="/" className="absolute hover:cursor-pointer">
      {logoArr}
    </Link>
  );
}
