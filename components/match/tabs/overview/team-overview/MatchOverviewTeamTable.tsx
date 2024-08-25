import MatchOverviewTeam from "@/components/match/tabs/overview/team-overview/MatchOverviewTeam";
import {FullMatchInfoPlayer} from "@/types/index";

const MatchOverviewTeamTable = ({team}: {team: FullMatchInfoPlayer[]}) => {
  return (
    <div className="mb-6">
      <table className="w-full border border-main/40 rounded">
        <thead className="px-6 py-2 text-white text-xls uppercase bg-gradient-to-r from-secondary to-teal">
        <tr>
          <th scope="col" className="px-6 py-3 w-[290px] rounded-tl-lg">Player</th>
          <th scope="col" className="px-6 py-3 w-[40px]">LVL</th>
          <th scope="col" className="px-6 py-3 w-[40px]">K</th>
          <th scope="col" className="px-6 py-3 w-[40px]">D</th>
          <th scope="col" className="px-6 py-3 w-[40px]">A</th>
          <th scope="col" className="px-6 py-3 w-[80px]">LH/DN</th>
          <th scope="col" className="px-6 py-3 w-[40px]">NET</th>
          <th scope="col" className="px-6 py-3 w-[80px]">GPM/XPM</th>
          <th scope="col" className="px-6 py-3 w-[40px]">HD</th>
          <th scope="col" className="px-6 py-3 w-[40px]">TD</th>
          <th scope="col" className="px-6 py-3 w-[40px]">HH</th>
          <th scope="col" className="px-6 py-3 w-[210px]">ITEMS</th>
          <th scope="col" className="px-6 py-3 w-[30px]"></th>
          <th scope="col" className="px-6 py-3 w-[30px]"></th>
          <th scope="col" className="px-6 py-3 w-[40px] rounded-tr-lg">BUFFS</th>
        </tr>
        </thead>
        <tbody>
        <MatchOverviewTeam team={team} />
        </tbody>
      </table>
    </div>
  )
}

export default MatchOverviewTeamTable
