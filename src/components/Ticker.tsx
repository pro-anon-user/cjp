const items = [
  "20 JUL — Hundreds of protesters harassed and injured by the police",
  "21 JUL — Pellet-gun used against peaceful protesters",
  "21 JUL — Hospital records document puncture wounds on protester Shaikh Irshad",
  "22 JUL — Opposition demands Pradhan's resignation in Rajya Sabha",
  "22 JUL — Supreme Court bench declines to view crackdown video",
  "22 JUL — CJP pauses street marches, citing protester safety",
];

export default function Ticker() {
  const loop = [...items, ...items];

  return (
    <div className="group overflow-hidden border-b border-[#2A2620] bg-[#141317] py-3">
      <div className="flex w-max animate-[ticker_38s_linear_infinite] gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-[IBM_Plex_Mono,monospace] text-xs text-[#948F82] sm:text-sm"
          >
            <span className="text-[#D6362E]">●</span>
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
