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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-sm border border-[#2A2620] bg-[#0B0B0C]"
            >
              {slot.type == "video" ? (
                <video
                  src={slot.url}
                  data-source={slot.source}
                  controls={true}
                  playsInline={true}
                  className="h-48 w-full object-cover sm:grayscale transition-all duration-300 sm:group-hover:grayscale-0 sm:h-56"
                />
              ) : (
                <img
                  onClick={() => window.open(slot.url, '_blank', 'noopener,noreferrer')}
                  src={slot.url}
                  alt={slot.label}
                  data-source={slot.source}
                  loading="lazy"
                  className="cursor-pointer h-48 w-full object-cover sm:grayscale transition-all duration-300 sm:group-hover:grayscale-0 sm:h-56"
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
      </div>
    </section>
  );
}
