"use client";

import {HeroStats} from "@/types/index";

type HeroDetailsProps = {
  currentHero: HeroStats,
}

const calcBaseDamage = (attr: string, str: number, int: number, agi: number) => {
  if (attr === "all") {
    return (str + int + agi) * 0.7
  } else if (attr === "int") {
    return int
  } else if (attr === "str") {
    return str
  } else if (attr === "agi") {
    return agi
  }
}

const heroDetails = ({currentHero}: HeroDetailsProps) => {
  let baseAttack;
  if (currentHero) {
    baseAttack = calcBaseDamage(currentHero.primary_attr, currentHero.base_str, currentHero.base_int, currentHero.base_agi)
  }

  return (
    <div className="flex justify-center items-start my-12 w-full gap-4 text-white uppercase text-xs">
      {currentHero && <>
        <div className="w-1/4">
          {baseAttack &&
            <>
              <div className="flex justify-between bg-secondary/30 px-4 py-3">
                <span>Base attack:</span>
                <span>{(baseAttack + currentHero.base_attack_min).toFixed(0)} - {(baseAttack + currentHero.base_attack_max).toFixed(0)}</span>
              </div>
              <div className="flex justify-between  bg-secondary/70 px-4 py-3">
                <span>Attack range:</span>
                <span>{currentHero.attack_range}</span>
              </div>
              <div className="flex justify-between  bg-secondary/30 px-4 py-3">
                <span>Attack speed:</span>
                <span>{currentHero.base_attack_time + currentHero.base_agi}</span>
              </div>
              <div className="flex justify-between  bg-secondary/70 px-4 py-3">
                <span>Projectile speed:</span>
                <span>{currentHero.projectile_speed}</span>
              </div>
            </>}
        </div>
        <div className="w-1/4">
          <div className="flex justify-between bg-secondary/30 px-4 py-3">
            <span>Health:</span>
            <span>{currentHero.base_health + currentHero.base_str * 22}</span>
          </div>
          <div className="flex justify-between bg-secondary/70 px-4 py-3">
            <span>Health regen:</span>
            <span>{(currentHero.base_health_regen + currentHero.base_str * 0.09).toFixed(1)}</span>
          </div>
          <div className="flex justify-between bg-secondary/30 px-4 py-3">
            <span>Mana:</span>
            <span>{currentHero.base_mana + currentHero.base_int * 12}</span>
          </div>
          <div className="flex justify-between bg-secondary/70 px-4 py-3">
            <span>Mana regen:</span>
            <span>{(currentHero.base_mana_regen + currentHero.base_int * 0.05).toFixed(1)}</span>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex justify-between bg-secondary/30 px-4 py-3">
              <span>Base armor:</span>
              <span>{(currentHero.base_armor + currentHero.base_agi * 0.167).toFixed(1)}</span>
          </div>
          <div className="flex justify-between bg-secondary/70 px-4 py-3">
              <span>MAGIC RESISTANCE:</span>
              <span>{currentHero.base_mr + currentHero.base_int * 0.1}%</span>
          </div>
          <div className="flex justify-between bg-secondary/30 px-4 py-3">
              <span>MOVE SPEED:</span>
              <span>{currentHero.move_speed}</span>
          </div>
          <div className="flex justify-between bg-secondary/70 px-4 py-3">
              <span>TURN SPEED:</span>
              <span>{currentHero.turn_rate ? currentHero.turn_rate : ""}</span>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex justify-between bg-secondary/30 px-4 py-3">
              <span>NUMBER OF LEGS:</span>
              <span>{currentHero.legs}</span>
          </div>
          <div className="flex justify-between bg-secondary/70 px-4 py-3">
              <span>CM ENABLED:</span>
              <span>{currentHero.cm_enabled ? "yes" : "no"}</span>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default heroDetails;
