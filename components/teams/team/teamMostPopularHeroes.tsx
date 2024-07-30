import { ITeamMostPopularHero } from "@/common/types";
import TeamMostPopularHero from "@/components/teams/team/TeamMostPopularHero";

interface TeamMostPopularHeroesProps {
  heroes: ITeamMostPopularHero[];
}

const TeamMostPopularHeroes = ({ heroes }: TeamMostPopularHeroesProps) => {
  return (
    <div className="flex flex-col mb-6">
      <h2 className="mb-2">Heroes Played</h2>
      <div className="flex px-6 py-2 rounded-t text-xls text-white uppercase bg-gradient-to-r from-secondary to-teal">
        <div className="w-8/12">HERO</div>
        <div className="w-2/12 text-center">Games</div>
        <div className="w-2/12 text-center">Winrate</div>
      </div>
      {heroes?.map(
        (hero, index) =>
          index <= 10 && <TeamMostPopularHero key={hero.hero_id} {...hero} />,
      )}
    </div>
  );
};

export default TeamMostPopularHeroes;
