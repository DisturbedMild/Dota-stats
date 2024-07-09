"use client";

import Image from "next/image";

const HeroIcon = ({ name }: { name: string }) => {
  const imageSrc = `/heroes/${name
    .replaceAll(" ", "_")
    .toLocaleLowerCase()}.png`;
  return (
    <div className="w-1/5">
      <Image src={imageSrc} className="object-cover" width={92} height={20} alt={`${name} icon`} />
    </div>
  );
};

export default HeroIcon;
