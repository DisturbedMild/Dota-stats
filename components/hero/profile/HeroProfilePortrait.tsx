"use client";

import Image from "next/image";

interface HeroProfilePortraitProps {
  hero: string;
  name: string | null;
}

const HeroProfilePortrait = ({ hero, name }: HeroProfilePortraitProps) => {
  return (
    <Image
      className="rounded-xl"
      src={`/heroes/${hero?.replaceAll(" ", "_").toLocaleLowerCase()}.png`}
      alt={name ? name : "Hero Picture"}
      width={256}
      height={144}
    />
  );
};

export default HeroProfilePortrait;
