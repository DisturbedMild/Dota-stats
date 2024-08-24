import {FullMatchInfoPlayer} from "@/common/types";
import AbilitiesTableBody from "@/components/match/tabs/overview/abilities-table/AbilitiesTableBody";
import AbilitiesTableHeading
  from "@/components/match/tabs/overview/abilities-table/AbilitiesTableHeading";


const AbilitiesTable = ({team}: {team: FullMatchInfoPlayer[]}) => {

  return (
    <div className="mb-10">
      <table className="w-full border border-main/40 rounded">
        <AbilitiesTableHeading/>
        <AbilitiesTableBody team={team} />
      </table>
    </div>
  )
}

export default AbilitiesTable
