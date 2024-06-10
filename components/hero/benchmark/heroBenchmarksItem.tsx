"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS: Record<string, string> = {
  GOLD_PER_MIN: "#f6fd00",
  XP_PER_MIN: "#4169E1",
  KILLS_PER_MIN: "#a50505",
  LAST_HITS_PER_MIN: "#BCE9EA",
  HERO_DAMAGE_PER_MIN: "#C70039",
  HERO_HEALING_PER_MIN: "#ABE93C",
  TOWER_DAMAGE: "#F06D0C",
}

type CustomTooltipProps = {
  name: string;
  active: boolean;
  payload: any;
  label: string;
}

const CustomTooltip = (props: CustomTooltipProps) => {
  if (props.active && props.payload && props.payload.length) {
    return (
      <div className="p-2 bg-black/40">
        <p className="label">{`${props.label}`}</p>
        <p className="desc capitalize">{props.name.replaceAll("_", " ")}: {props.payload[0].value.toFixed(2)}</p>
      </div>
    );
  }

  return null;
}

type THeroBenchmarksItemProps = {
  percentile: number;
  value: number
}

const HeroBenchmarksItem = ({name, result}: { name: string, result: THeroBenchmarksItemProps[] }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={400}
          height={250}
          data={result}
          id={name}
        >
          <defs>
            <linearGradient id={`${name}-UV`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor={COLORS[name.toUpperCase()]} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={COLORS[name.toUpperCase()]} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianAxis/>
          <XAxis dataKey={(data) => (data.percentile * 100) + "%"}/>
          <YAxis dataKey="value"/>
          <Tooltip content={<CustomTooltip name={name} active={false} payload={[]} label={""} />}/>
          <Area type="linear" dataKey={(data) => data.value} stroke={COLORS[name.toUpperCase()]} fillOpacity={1}
                fill={`url(#${name}-UV)`}/>
        </AreaChart>
      </ResponsiveContainer>
      <div className="py-1 text-gray-400 text-right uppercase text-xls">{name.replaceAll("_", " ")}</div>
    </div>
  );
}

export default HeroBenchmarksItem;
