import TabList from "@components/ui/tablist/tabList";
import TabItem from "@components/ui/tablist/tabItem";
import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {
  IHeroPlayersRanking,
  IHeroStats,
  IHeroBenchmarks,
  IMatch,
  ISortedHeroMatchup,
  IMatchDuration
} from "@/services/api/endpoints/types";
import HeroRanking from "@components/hero/ranking/heroRanking";
import HeroBenchmarks from "@components/hero/benchmark/heroBenchmarks";
import HeroMatches from "@components/hero/matches/heroMatches";
import HeroMatchups from "@components/hero/matchups/heroMatchups";
import {calculateWilsonScore} from "@/common/utils/calculateWilsonScore";
import MatchesDuration from "@components/hero/match-duration/matchesDuration";

type THeroDetailsNavBar = {
  currentHero: IHeroStats | undefined,
}


const HeroDetailsNavbar = ({currentHero}: THeroDetailsNavBar) => {
  const [heroPlayersRanking, setHeroPlayersRanking] = useState<IHeroPlayersRanking | null>(null);
  const [heroBenchmarks, setHeroBenchmarks] = useState<IHeroBenchmarks | null>(null);
  const [heroMatches, setHeroMatches] = useState<IMatch[] | []>([]);
  const [heroMatchups, setHeroMatchups] = useState<ISortedHeroMatchup[] | []>([]);
  const [heroMatchesDuration, setHeroMatchesDuration] = useState<IMatchDuration[] | []>([]);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroPlayersRanking(currentHero.id)
        .then((data) => setHeroPlayersRanking(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .geHeroBenchmarks(currentHero.id)
        .then((data) => setHeroBenchmarks(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatches(currentHero.id)
        .then((data) => setHeroMatches(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchups(currentHero.id)
        .then((data) => setHeroMatchups(() => {
          return data.map(heroMatchup => {
            return {
              winrate: Number((heroMatchup.wins * 100 / heroMatchup.games_played).toFixed(2)),
              advantage: calculateWilsonScore(heroMatchup.wins, heroMatchup.games_played),
              ...heroMatchup
            }
          })
        }))
        .catch(() => {
        });
    }
  }, [currentHero]);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchDuration(currentHero.id)
        .then((data) => setHeroMatchesDuration(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  return (
    <TabList className="flex gap-12 justify-center mb-10 pb-4 text-white border-b border-gray-700"
             activeTabClasses="relative text-green-500 transition-all after:absolute after:left-2/4 after:-translate-x-1/2 after:-bottom-4 after:bg-green-500 after:w-28 after:h-1"
             activeTabIndex={0}>
      <TabItem className="text-white" label="Rankings">
        {heroPlayersRanking && <HeroRanking rankings={heroPlayersRanking.rankings}/>}
      </TabItem>
      <TabItem className="text-white" label="Benchmarks">
        {heroBenchmarks && <HeroBenchmarks result={heroBenchmarks.result}/>}
      </TabItem>
      <TabItem className="text-white" label="Recent">
        {heroMatches && <HeroMatches matches={heroMatches}/>}
      </TabItem>
      <TabItem className="text-white" label="Matchups">
        {heroMatchups && <HeroMatchups heroMatchups={heroMatchups}/>}
      </TabItem>
      <TabItem className="text-white" label="Durations">
        {heroMatchesDuration && <MatchesDuration heroMatchesDuration={heroMatchesDuration} />}
      </TabItem>
      <TabItem className="text-white" label="Players">
        <p>Tab #5, the last tab.</p>
      </TabItem>
      <TabItem className="text-white" label="Items">
        <p>Tab #6, the last tab.</p>
      </TabItem>
    </TabList>
  )
}

export default HeroDetailsNavbar;
