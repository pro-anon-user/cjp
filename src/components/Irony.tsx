import { pradhanNote } from "../data/content";

export default function Irony() {
  return (
    <section className="border-b border-[#2A2620] px-5 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-[IBM_Plex_Mono,monospace] text-xs uppercase tracking-widest text-[#E8A324]">
          03 · A parallel worth naming
        </p>
        <h2 className="mb-8 font-[Anton,sans-serif] text-4xl leading-tight sm:text-5xl">
          {pradhanNote.title}
        </h2>
        <div className="rounded-sm border-l-2 border-[#E8A324] bg-[#141317] px-6 py-6 sm:px-8 sm:py-8">
          <p className="leading-relaxed text-[#C9C5BA]">{pradhanNote.body}</p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#948F82]">
          The same man who once protested exam leaks now leads the ministry facing identical accusations.
          The people remember.
        </p>
      </div>
    </section>
  );
}
