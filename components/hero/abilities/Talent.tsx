"use client";

type TalentProps = {
  desc: string
}

const Talent = ({desc}: TalentProps) => {
  return (
    <div className="flex items-center justify-center px-1 h-10 bg-gradient-to-r from-gray-600/20 to-white/10 text-xxs basis-[192px]">{desc}</div>
  )
}

export default Talent;
