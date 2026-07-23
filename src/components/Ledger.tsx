import { ledger } from "../data/content";

export default function Ledger() {
  return (
    <section id="ledger" className="border-b border-[#2A2620] bg-[#111013] px-5 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
          02 · The ledger
        </p>
        <h2 className="mb-4 font-[Anton,sans-serif] text-4xl leading-tight sm:text-5xl">
          Two accounts. One record.
        </h2>
        {/*
        <p className="mb-12 max-w-2xl leading-relaxed text-[#948F82]">
          State-sponsored media outlets have claimed that the protests are being covertly orchestrated by foreign adversaries like China and Pakistan to cause unrest. This claim is completely fabricated, absolute garbage, and a textbook example of fake news and state propaganda.
        </p>
        */}
        <div className="rounded-sm border-l-2 border-[#E8A324] bg-[#141317] px-6 py-6 sm:px-8 sm:py-8">
          <p className="leading-relaxed text-[#C9C5BA]">
            State-sponsored media outlets have claimed that the protests are being covertly orchestrated by foreign adversaries like China and Pakistan to cause unrest. This claim is completely fabricated, absolute garbage, and a textbook example of fake news and state propaganda.
          </p>
        </div>

        <p className="mt-4 mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
          Here's what's actually true
        </p>
        <div className="space-y-6">
          {ledger.map((entry, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-sm border border-[#2A2620] bg-[#0B0B0C]"
            >
              <div className="border-b border-[#2A2620] px-5 py-3 sm:px-6">
                <h3 className="font-[IBM_Plex_Mono,monospace] text-sm uppercase tracking-wide text-[#F3EFE6] sm:text-base">
                  {entry.claim}
                </h3>
              </div>
              <div className="grid">
                <div className="border-b border-[#2A2620] px-5 py-5 sm:border-b-0 sm:border-r sm:px-6">
                  <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-widest text-[#D6362E]">
                    We know from Protesters / witnesses that
                  </p>
                  <p className="leading-relaxed text-[#C9C5BA]">
                    {entry.protesterAccount}
                  </p>
                </div>
              </div>
              {entry.sourceNote != null && (
                <div className="border-t border-[#2A2620] bg-[#141317] px-5 py-2 sm:px-6">
                  <p className="font-[IBM_Plex_Mono,monospace] text-[11px] text-[#948F82]">
                    Source: {entry.sourceNote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
