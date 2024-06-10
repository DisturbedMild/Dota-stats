import HeroMatchesItem from "@components/hero/matches/heroMatchesItem";

import {IMatch} from "@/services/api/endpoints/types";

type THeroMatchesProp = {
  matches: IMatch[]
}

const HeroMatches = ({matches}: THeroMatchesProp) => {
  console.log(matches);
  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">Recent</span>   Data from professional matches</h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-3/12 text-base">account id</div>
          <div className="w-2/12 text-base">duration</div>
          <div className="w-4/12 text-base">result</div>
          <div className="flex w-3/12 text-base">
            <div className="w-4/12">k</div>
            <div className="w-4/12">d</div>
            <div className="w-4/12">a</div>
          </div>
        </header>
        {matches.map((match: IMatch) => <HeroMatchesItem key={match.match_id} match={match} />)}
      </article>
    </>
  )
}

export default HeroMatches
