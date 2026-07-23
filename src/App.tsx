import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Timeline from "./components/Timeline";
import Ledger from "./components/Ledger";
import Irony from "./components/Irony";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import HeadlessAudioEngine from "./components/Audio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/Dialog";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F3EFE6] font-[IBM_Plex_Sans,sans-serif] selection:bg-[#D6362E] selection:text-[#F3EFE6]">
      <Dialog defaultOpen={true} open={open}>
        <DialogContent showCloseButton={false} className="sm:max-w-md bg-[#1A1A1A] border border-[#333] text-[#F3EFE6]">
          <DialogHeader>
            <DialogTitle className="text-[#F3EFE6] font-bold">Legal Notice & Peaceful Protest Policy</DialogTitle>
            <DialogDescription className="text-[#A0A0A0] mt-4">
              <span>If you are a <strong>government official</strong>, <strong>agency representative</strong>, or <strong>legal entity</strong> and have concerns regarding any information presented on this site, we encourage <em>peaceful dialogue</em> over legal action.</span>
              <br />
              <br />
              <span>Rather than pursuing lawsuits or legal cases, please contact us at <a className="text-[#E8A324]" href="mailto:legal.overspend976@passinbox.com">legal.overspend976@passinbox.com</a> with your concerns. We are committed to open dialogue and will promptly evaluate any requests to remove content that you find objectionable, in accordance with principles of peaceful protest and mutual respect.</span>
              <br />
              <br />
              <span>We believe in the power of <em>constructive communication</em> and are happy to work toward a resolution that respects all parties involved.</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-2 mt-4">
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#D6362E] text-[#F3EFE6] hover:bg-[#B82A22] h-10 px-4 py-2 mt-2 sm:mt-0"
            >
              Continue
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Hero />
      <Ticker />
      <main>
        <Timeline />
        <Ledger />
        <Irony />
        <Gallery />
      </main>
      <Footer />
      {open == false && (
        <HeadlessAudioEngine />
      )}
    </div>
  );
}
