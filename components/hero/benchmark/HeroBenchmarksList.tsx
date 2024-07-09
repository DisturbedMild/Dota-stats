"use client";

import HeroBenchmarksItem from "@/components/hero/benchmark/HeroBenchmarksItem";
import {HeroBenchmarks} from "@/types/index";

type HeroBenchmarksProps = Pick<HeroBenchmarks, "result">;

const HeroBenchmarksList = ({result}: HeroBenchmarksProps) => {
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

export default HeroBenchmarksList;
