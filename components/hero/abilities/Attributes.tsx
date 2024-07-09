"use client";

import {HeroStats} from "@/types/index";

type AttributesProps = {
  currentHero: HeroStats,
}

const Attributes = ({currentHero}: AttributesProps) => {
  return (
    <div className="mx-auto px-6 py-2 w-3/5 bg-black/45 rounded">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2 items-center">
          <div className="bg-red-700 rounded-full w-2 h-2"></div>
          <div className="text-white text-xs">{currentHero?.base_str} + {currentHero?.str_gain}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-green-600 rounded-full w-2 h-2"></div>
          <div className="text-white text-xs">{currentHero?.base_agi} + {currentHero?.agi_gain}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-blue-700 rounded-full w-2 h-2"></div>
          <div className="text-white text-xs">{currentHero?.base_int} + {currentHero?.int_gain}</div>
        </div>
      </div>
    </div>
  )
}

export default Attributes;
