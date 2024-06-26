"use client";

interface ISpinnerProps {
  className?: string;
  w?: number;
  h?: number;
  innerBg?: string;
}

const Spinner = ({ className, w = 8, h = 8, innerBg = "bg-[#242424]" }: ISpinnerProps) => {
  return (
    <div style={{width: `${w}px`, height: `${h}px`}} className={`flex items-center justify-center animate-spin rounded-full p-px ${className && className}`}>
      <div className={`${innerBg} w-[90%] h-[90%] rounded-full`}>

      </div>
    </div>
  )
}

export default Spinner;