"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {calculateWilsonScore} from "@/common/utils/calculateWilsonScore";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroMatchups from "@/components/hero/matchups/HeroMatchups";
import {SortedHeroMatchup} from "@/types/index";

const HeroMatchupsTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroMatchups, error}: {data: SortedHeroMatchup[] | []} =
    useReactQueryRequest("hero-matchups",  `https://api.opendota.com/api/heroes/${currentHero.id}/matchups`)

  const calculatedHeroMatchupsWinrateWithAdvantage = heroMatchups.map(heroMatchup => {
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
