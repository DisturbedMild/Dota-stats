"use client";

import { fetchData } from "@/utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

type THeroStats = {
  id: number;
  name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: null;
  cm_enabled: true;
  legs: null;
  day_vision: number;
  night_vision: number;
  localized_name: string;
  // "1_pick": number;
  // "1_win": number;
  // "2_pick": number;
  // "2_win": number;
  // "3_pick": number;
  // "3_win": number;
  // "4_pick": number;
  // "4_win": number;
  // "5_pick": number;
  // "5_win": number;
  // "6_pick": number;
  // "6_win": number;
  // "7_pick": number;
  // "7_win": number;
  // "8_pick": number;
  // "8_win": number;
  // "turbo_picks": number;
  // number: number[];
  // turbo_wins: 114397;
  // turbo_wins_trend:number[],
  // pro_pick: number;
  // pro_win: number;
  // pro_ban: number;
  // pub_pick: number;
  // pub_pick_trend: number[];
  // pub_win: number;
  // pub_win_trend: number[];
};

type TMatchup = {
  hero_id?: number;
  games_played: number;
  wins: number;
};

const getHero = (heroes: THeroStats[], name: string) => {
  if (heroes !== undefined) {
    const hero = heroes?.find((hero: THeroStats) => {
      const heroName = hero.localized_name.replaceAll(" ", "_");

      if (heroName === name) return hero;
    });
    return hero;
  }
};

const heroOverallWinrate = (games: TMatchup[]) => {
  if (games) {
    const gamesPlayed = games.reduce(
      (acc: any, curr: TMatchup) => {
        acc.games += curr.games_played;
        acc.wins += curr.wins;
        return acc;
      },
      { games: 0, wins: 0 }
    );

    return ((gamesPlayed?.wins / gamesPlayed?.games) * 100).toFixed(2);
  }
};

const HeroPage = () => {
  const { hero }: { hero: string } = useParams();
  const {
    isPending: isPendingHeroStats,
    error: errorHeroStats,
    data: dataHeroStats,
  } = useQuery({
    queryKey: ["heroStats"],
    queryFn: () => fetchData("https://api.opendota.com/api/heroStats"),
  });

  const heroStats = getHero(dataHeroStats, hero);

  const { data: dataHeroMatchups } = useQuery({
    queryKey: ["heroMatchups"],
    queryFn: () =>
      fetchData(
        `https://api.opendota.com/api/heroes/${heroStats?.id}/matchups`
      ),
  });

  const winrate = heroOverallWinrate(dataHeroMatchups);

  return (
    <section className="h-screen">
      <div className="flex gap-4">
        <div className="w-2/12">
          <Image
            src={`/heroes/${hero
              ?.replaceAll(" ", "_")
              .toLocaleLowerCase()}.png`}
            alt={`${heroStats?.localized_name}`}
            width={256}
            height={144}
          />
        </div>
        <div className="w-10/12 text-lg text-white">
          <h1 className="text-2xl font-bold">{heroStats?.localized_name}</h1>
          <p>
            {heroStats?.roles.map((role: string) => (
              <span key={role}>{role} </span>
            ))}
          </p>
        </div>
        <div
          className={`${
            Number(winrate) < 50 ? "text-red-500" : "text-green-500"
          }`}
        >
          Winrate:{winrate}%
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
