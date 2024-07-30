"use client";

import HeroBenchmarksTab from "@/components/hero/detail-nav/tabs/HeroBenchmarksTab";
import HeroItemsPopularityTab from "@/components/hero/detail-nav/tabs/HeroItemsPopularityTab";
import HeroMatchesDurationTab from "@/components/hero/detail-nav/tabs/HeroMatchesDurationTab";
import HeroMatchesTab from "@/components/hero/detail-nav/tabs/HeroMatchesTab";
import HeroMatchupsTab from "@/components/hero/detail-nav/tabs/HeroMatchupsTab";
import HeroPlayersTab from "@/components/hero/detail-nav/tabs/HeroPlayersTab";
import HeroRankingTab from "@/components/hero/detail-nav/tabs/HeroRankingTab";
import TabItem from "@/components/ui/tablist/TabItem";
import TabList from "@/components/ui/tablist/TabList";
import { HeroStats } from "@/types/index";

export type HeroDetailsTabList = {
  currentHero: HeroStats;
};

const HeroDetailsTabList = ({ currentHero }: HeroDetailsTabList) => {
  return (
    <TabList
      className="flex gap-12 justify-center mb-10 pb-4 text-white border-b border-gray-700"
      activeTabClasses="relative text-green-500 transition-all after:absolute after:left-2/4 after:-translate-x-1/2 after:-bottom-4 after:bg-green-500 after:w-28 after:h-1"
      activeTabIndex={0}
    >
      <TabItem className="text-white" label="Items">
        <HeroItemsPopularityTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Players">
        <HeroPlayersTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Duration">
        <HeroMatchesDurationTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Ranking">
        <HeroRankingTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Matches">
        <HeroMatchesTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Matchups">
        <HeroMatchupsTab currentHero={currentHero} />
      </TabItem>
      <TabItem className="text-white" label="Benchmarks">
        <HeroBenchmarksTab currentHero={currentHero} />
      </TabItem>
    </TabList>
  );
};

export default HeroDetailsTabList;
