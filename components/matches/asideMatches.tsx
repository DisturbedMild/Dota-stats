"use client";

import { useQuery } from "@tanstack/react-query";

const fetchProPublicMatches = async () => {
  const response = await fetch(
    "https://api.opendota.com/api/publicMatches?min_rank=80"
  );

  if (!response.ok) {
    throw new Error("Something went wrong with heroes");
  }

  return response.json();
};

const AsideMatches = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["heroes"],
    queryFn: fetchProPublicMatches,
  });

  console.log(data);

  return (
    <aside className="bg-neutral-500/20 w-1/3">
      <h2 className="text-center text-white">Latest Pro Publics</h2>
    </aside>
  );
};

export default AsideMatches;
