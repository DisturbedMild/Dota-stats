"use client";

import Image from "next/image";

const HeroIcon = ({ name }: { name: string }) => {
  const imageSrc = `/heroes/${name
    .replaceAll(" ", "_")
    .toLocaleLowerCase()}.png`;
  return <Image src={imageSrc} style={{
    width: '100%',
    height: 'auto',
  }}  sizes="(min-width: 375px) 20px, (min-width:768px) 30px, (min-width:1028px) 92px"  quality={100} width={92} height={20} alt={`${name} icon`} />;
};

export default HeroIcon;
