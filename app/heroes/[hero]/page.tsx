"use client";

import { useParams } from "next/navigation";

const HeroPage = () => {
  const params = useParams();
  return <h1>{params.hero}</h1>;
};

export default HeroPage;
