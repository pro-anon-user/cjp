export default function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLedger = () => {
    document.getElementById("ledger")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative overflow-hidden border-b border-[#2A2620] px-5 pt-10 pb-14 sm:px-10 sm:pt-16 sm:pb-20">
      {/* Ambient texture: a faint stamped grid, like a case-board corkboard */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F3EFE6 1px, transparent 1px), linear-gradient(90deg, #F3EFE6 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#D6362E]/50 bg-[#D6362E]/10 px-3 py-1 font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-widest text-[#E8A324]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6362E]" />
          Updated 23 July 2026
        </div>

        <h1 className="font-[Anton,sans-serif] text-[15vw] leading-[0.85] tracking-tight text-[#F3EFE6] sm:text-7xl md:text-8xl">
          THE COCKROACHES
          <br />
          <span className="text-[#D6362E]">WON'T</span> BE SWEPT.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#948F82] sm:text-lg">
          A rigged exam system. Students on ventilators. A government in denial.
          This is the independent record of the Cockroach Janta Party's fight against a system that crushes its youth.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToTimeline}
            className="rounded-sm bg-[#D6362E] px-6 py-3 font-[IBM_Plex_Mono,monospace] text-sm font-medium uppercase tracking-wide text-[#F3EFE6] transition-transform hover:-translate-y-0.5 hover:bg-[#C22B24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A324]"
          >
            Read the timeline
          </button>
          <a
            onClick={scrollToLedger}
            className="cursor-pointer font-[IBM_Plex_Mono,monospace] text-sm uppercase tracking-wide text-[#E8A324] underline decoration-[#E8A324]/40 underline-offset-4 hover:decoration-[#E8A324]"
          >
            Read verified facts →
          </a>
        </div>
      </div>
    </header>
  );
}
