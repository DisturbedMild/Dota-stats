"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import {convertTime} from "@/common/utils/convertTime";
import {MatchDuration} from "@/types/index";

type MatchesDurationProps = {
  heroMatchesDuration: MatchDuration[]
}

// @ts-expect-error: Unreachable code error
const CustomTooltip = (props) => {
  if (props.active && props.payload && props.payload.length) {
    const {games_played, wins} = props.payload[0].payload;
    const winrate = (wins * 100 / games_played).toFixed(2);
    return (
      <div className="p-2 bg-black/40">
        <p className="label">{props.label} Minutes</p>
        <p className="label">{games_played} Games</p>
        <p className="label">{winrate}% Wins</p>
      </div>
    );
  }

  return null;
}

const MatchesDuration = (({heroMatchesDuration}: MatchesDurationProps) => {
  const newHeroMatchesDuration = heroMatchesDuration.map(match => {
    const {minutes} = convertTime(Number(match.duration_bin))
    return {
      ...match,
      duration_bin: Number(minutes),
    }
  })
  newHeroMatchesDuration.sort((a, b) => a.duration_bin - b.duration_bin);

  return (
    <>
      <h3 className="mb-4 pl-4 text-[#ffffff99] text-xls">
        <span className="font-medium text-[#ffffffde]">Duration</span> Data from professional matches
      </h3>
      <article className="flex">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={newHeroMatchesDuration}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#f5f5f533"/>
            <XAxis dataKey="duration_bin"/>
            <YAxis dataKey="games_played"/>
            <Tooltip
              content={<CustomTooltip active={false} payload={[]} label={""}/>}
              cursor={<Rectangle fill="rgba(255,255,255, 0.2)" stroke="rgba(255,255,255, 0.2)"/>}
            />
            <Bar
              background={false}
              dataKey="games_played"
            >
              {newHeroMatchesDuration.map((match) => (
                <Cell
                  key={match.games_played}
                  fill={(match.wins * 100 / match.games_played) > 50 ? "rgba(34, 197,94, 0.5)" : "rgba(229, 184, 22, 0.5)"}
                  stroke={(match.wins * 100 / match.games_played) > 50 ? "rgba(34, 197,94, 0.8)" : "rgba(229, 184, 22, 0.8)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </article>
    </>
  )
})

export default MatchesDuration
