import {IMatchDuration} from "@/services/api/endpoints/types";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid, Cell,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {convertTime} from "@/common/utils/convertTime";

type TMatchesDurationProps = {
  heroMatchesDuration: IMatchDuration[]
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
];

type BarCustomTooltipProps = {
  active: boolean;
  payload: any;
  label: string;
}

const CustomTooltip = (props: BarCustomTooltipProps) => {
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

const MatchesDuration = (({heroMatchesDuration}: TMatchesDurationProps) => {
  const newHeroMatchesDuration = heroMatchesDuration.map(match => {
    const {minutes} = convertTime(Number(match.duration_bin))
    return {
      ...match,
      duration_bin: Number(minutes),
    }
  })
  newHeroMatchesDuration.sort((a, b) => a.duration_bin - b.duration_bin);
  return (
    <div className="flex justify-center">
      <ResponsiveContainer width="80%" height={400}>
        <BarChart
          data={newHeroMatchesDuration}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
    </div>
  )
})

export default MatchesDuration
