"use client";

type TalentProps = {
  desc: string
}

const Talent = ({desc}: TalentProps) => {
  return (
    <div className="flex items-center justify-center p-1 h-10 bg-gradient-to-r from-gray-600/20 to-white/10 text-xs basis-[185px]">{desc}</div>
  )
}

export default Talent;
