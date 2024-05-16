"use client";

import Image from "next/image";

const HeroIcon = ({ name }: { name: string }) => {
  const imageSrc = `/heroes/${name
    .replaceAll(" ", "_")
    .toLocaleLowerCase()}.png`;
  return <Image src={imageSrc} width={80} height={20} alt={`${name} icon`} />;
};

export default HeroIcon;
