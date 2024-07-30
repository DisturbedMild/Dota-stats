"use client";

import {Skeleton} from "@mui/material";

import {useHeroMatchups} from "@/common/api";
import {Matchup} from "@/common/types";
import {calculateWilsonScore} from "@/common/utils/calculateWilsonScore";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroMatchups from "@/components/hero/matchups/HeroMatchups";

const HeroMatchupsTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroMatchups, error} = useHeroMatchups(currentHero.id);

  const calculatedHeroMatchupsWinrateWithAdvantage = heroMatchups.map((heroMatchup: Matchup) => {
    return {
      winrate: Number((heroMatchup.wins * 100 / heroMatchup.games_played).toFixed(2)),
      advantage: calculateWilsonScore(heroMatchup.wins, heroMatchup.games_played),
      ...heroMatchup
    }
  })

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later...</p>

  return <HeroMatchups calculatedHeroMatchupsWinrateWithAdvantage={calculatedHeroMatchupsWinrateWithAdvantage}/>
}

export default HeroMatchupsTab;
