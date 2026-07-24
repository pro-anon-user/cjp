import { slots } from "../data/content";

export default function Gallery() {
  return (
    <section className="border-b border-[#2A2620] bg-[#111013] px-5 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
          04 · Evidence locker
        </p>
        <h2 className="mb-4 font-[Anton,sans-serif] text-4xl leading-tight sm:text-5xl">
          Footage, not filters
        </h2>
        <p className="mb-10 max-w-2xl leading-relaxed text-[#948F82]">
          Raw footage from the ground. Let the visuals speak.
        </p>

        {true ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot, i) => (
              <figure
                key={i}
                className="group overflow-hidden rounded-sm border border-[#2A2620] bg-[#0B0B0C]"
              >
                {slot.type == "video" ? (
                  <video
                    src={`${encodeURIComponent(slot.label)}`}
                    // autoPlay={true}
                    controls={true}
                    className="h-48 w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-56"
                  />
                ) : (
                  <img
                    src={`${encodeURIComponent(slot.label)}`}
                    alt={`Placeholder — replace with real, rights-cleared footage of: ${slot.label}`}
                    loading="lazy"
                    className="h-48 w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-56"
                  />
                )}
                <figcaption className="flex items-center justify-between border-t border-[#2A2620] px-4 py-3">
                  <span className="text-sm text-[#F3EFE6]">{slot.label}</span>
                  <span className="font-[IBM_Plex_Mono,monospace] text-[10px] uppercase tracking-widest text-[#E8A324]">
                    {slot.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-sm border border-[#2A2620] bg-[#0B0B0C] px-6 py-12 text-center">
            <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
              Coming Soon
            </p>
            <h3 className="mb-2 font-medium text-[#F3EFE6]">
              We are still gathering ground footage
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-[#948F82]">
              This section will be updated as soon as we finish sourcing and carefully fact-checking the videos—including making sure none of them are AI-generated fakes.
            </p>
            <p className="mt-4 font-[IBM_Plex_Mono,monospace] text-xs text-[#E8A324]/80">
              Apologies for the inconvenience!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
