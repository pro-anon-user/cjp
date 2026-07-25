import { timeline } from "../data/content";

const tagStyles: Record<string, string> = {
  origin: "text-[#948F82] border-[#948F82]/40",
  escalation: "text-[#E8A324] border-[#E8A324]/40",
  clash: "text-[#D6362E] border-[#D6362E]/40",
  repression: "text-[#8B3A3A] border-[#8B3A3A]/40",
  international: "text-[#5B8FA8] border-[#5B8FA8]/40",
  aftermath: "text-[#F3EFE6] border-[#F3EFE6]/30",
};

const tagLabel: Record<string, string> = {
  origin: "Origin",
  escalation: "Escalation",
  clash: "Clash",
  repression: "Repression",
  international: "International",
  aftermath: "Aftermath",
};

export default function Timeline() {
  return (
    <section id="timeline" className="border-b border-[#2A2620] px-5 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
          01 · The record
        </p>
        <h2 className="mb-12 font-[Anton,sans-serif] text-4xl leading-tight sm:text-5xl">
          How we got from a courtroom remark to a hospital ward
        </h2>

        <ol className="relative border-l border-[#2A2620] pl-8 sm:pl-10">
          {timeline.map((event, i) => (
            <li key={i} className="mb-12 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-[#0B0B0C] bg-[#D6362E]" />
              <div className="flex flex-wrap items-baseline gap-3">
                <time className="font-[IBM_Plex_Mono,monospace] text-sm text-[#948F82]">
                  {event.date}
                </time>
                <span
                  className={`rounded-sm border px-2 py-0.5 font-[IBM_Plex_Mono,monospace] text-[10px] uppercase tracking-wide ${tagStyles[event.tag]}`}
                >
                  {tagLabel[event.tag]}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-[#F3EFE6] sm:text-2xl">
                {event.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-[#C9C5BA]">
                {event.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
