"use client";

import {IHeroBenchmarks} from "@/services/api/endpoints/types";
import HeroBenchmarksItem from "@components/hero/benchmark/heroBenchmarksItem";

type THeroBenchmarks = Pick<IHeroBenchmarks, "result">;

const HeroBenchmarks = ({result}: THeroBenchmarks) => {
  const resultKeys = Object.keys(result) as (keyof typeof result)[];

  return (
    <div className="grid grid-cols-3 gap-8">
      {resultKeys.map((key) => <HeroBenchmarksItem key={key} name={key} result={result[key]} />)}
    </div>
  );
}

export default HeroBenchmarks;
