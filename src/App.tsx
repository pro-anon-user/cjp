import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Timeline from "./components/Timeline";
import Ledger from "./components/Ledger";
import Irony from "./components/Irony";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import HeadlessAudioEngine from "./components/Audio";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F3EFE6] font-[IBM_Plex_Sans,sans-serif] selection:bg-[#D6362E] selection:text-[#F3EFE6]">
      <Hero />
      <Ticker />
      <main>
        <Timeline />
        <Ledger />
        <Irony />
        <Gallery />
      </main>
      <Footer />
      <HeadlessAudioEngine />
    </div>
  );
}
