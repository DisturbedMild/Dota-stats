"use client";

import {IHeroBenchmarks} from "@/services/api/endpoints/types";
import HeroBenchmarksItem from "@components/hero/benchmark/HeroBenchmarksItem";

type THeroBenchmarks = Pick<IHeroBenchmarks, "result">;

const HeroBenchmarks = ({result}: THeroBenchmarks) => {
  const resultKeys = Object.keys(result) as (keyof typeof result)[];

  return (
    <>
      <h3 className="mb-4 text-[#ffffff99] text-xls">
        <span className="font-medium text-[#ffffffde]">Benchmark</span> Data from professional matches
      </h3>
      <article className="grid grid-cols-3 gap-8">
        {resultKeys.map((key) => <HeroBenchmarksItem key={key} name={key} result={result[key]}/>)}
      </article>
    </>
  )
    ;
}

export default HeroBenchmarks;
