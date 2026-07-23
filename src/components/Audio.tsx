import { useEffect, useRef } from "react";

const AUDIO_TRACKS = [
  "/dashboard/audio/Naruto - Loneliness Riki リキ Remix.mp3",
  "/dashboard/audio/Naruto Shippuden - Loneliness Chenow Remix.mp3",
];

export default function HeadlessAudioEngine() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const currentTrackIndexRef = useRef(0);
  const isPlayingRef = useRef(false);
  const audioElementsRef = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    // Initialize audio context
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtxRef.current = new AudioContextClass();

    // Create hidden audio elements for each track
    AUDIO_TRACKS.forEach((src) => {
      const audio = new Audio(src);
      audio.loop = false;
      audio.preload = "auto";
      audio.style.display = "none";
      document.body.appendChild(audio);
      audioElementsRef.current.push(audio);
    });

    // Start playback when first track is ready
    const firstAudio = audioElementsRef.current[0];
    firstAudio.addEventListener("canplaythrough", () => {
      if (!isPlayingRef.current) {
        firstAudio.play().catch(e => console.error("Audio play failed:", e));
        isPlayingRef.current = true;
      }
    });

    // Set up track switching
    firstAudio.addEventListener("ended", () => {
      currentTrackIndexRef.current = (currentTrackIndexRef.current + 1) % AUDIO_TRACKS.length;
      const nextAudio = audioElementsRef.current[currentTrackIndexRef.current];
      nextAudio.currentTime = 0;
      nextAudio.play().catch(e => console.error("Audio play failed:", e));
    });

    return () => {
      // Cleanup
      audioElementsRef.current.forEach(audio => {
        audio.pause();
        document.body.removeChild(audio);
      });
      if (audioCtxRef.current?.state !== 'closed') {
        audioCtxRef.current?.close();
      }
    };
  }, []);

  return null;
}
