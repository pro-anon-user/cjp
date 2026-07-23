import { sources } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 font-[Anton,sans-serif] text-3xl leading-tight sm:text-4xl">
          Don't take our word for it either.
        </h2>
        <p className="mb-8 max-w-xl leading-relaxed text-[#948F82]">
          Follow the sourcing, check it against other outlets, and update your
          own view as facts firm up — this record will keep changing as the
          story does.
        </p>

        <div className="mb-10 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate border-b border-transparent py-1 text-sm text-[#C9C5BA] hover:border-[#E8A324] hover:text-[#E8A324]"
            >
              → {s.label}
            </a>
          ))}
        </div>

        <div className="border-t border-[#2A2620] pt-6">
          <p className="mb-1 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#D6362E]">
            Independent Citizen Record • Pro-CJP Voice
          </p>

          <p className="text-sm leading-relaxed text-[#6E6A60]">
            This is an independent, citizen-built record compiled from public
            reporting as of 23 July 2026. Facts here are attributed to named
            sources; disputed claims are marked as disputed rather than settled.
            Events are still developing — check the linked sources for updates
            before treating anything here as final.
          </p>
        </div>
      </div>
    </footer>
  );
}
