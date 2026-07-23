import { useEffect, useRef } from "react";

const AUDIO_TRACKS = [
  "/cjp/audio/Naruto - Loneliness Riki リキ Remix.mp3",
  "/cjp/audio/Naruto Shippuden - Loneliness Chenow Remix.mp3",
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
    const elements: HTMLAudioElement[] = [];
    AUDIO_TRACKS.forEach((src) => {
      const audio = new Audio(src);
      audio.loop = false;
      audio.preload = "auto";
      audio.style.display = "none";
      document.body.appendChild(audio);
      elements.push(audio);
    });
    audioElementsRef.current = elements;

    // Start playback when first track is ready
    const firstAudio = audioElementsRef.current[0];
    const handleCanPlayThrough = () => {
      if (!isPlayingRef.current) {
        isPlayingRef.current = true;
        firstAudio.play().catch(e => console.error("Audio play failed:", e));
      }
    };
    firstAudio.addEventListener("canplaythrough", handleCanPlayThrough);

    // Set up track switching for all tracks
    const handleTrackEnded = () => {
      // Pause current track explicitly
      const currentAudio = audioElementsRef.current[currentTrackIndexRef.current];
      currentAudio.pause();
      currentAudio.currentTime = 0;

      // Switch to next track
      currentTrackIndexRef.current = (currentTrackIndexRef.current + 1) % AUDIO_TRACKS.length;
      const nextAudio = audioElementsRef.current[currentTrackIndexRef.current];
      nextAudio.currentTime = 0;
      nextAudio.play().catch(e => console.error("Audio play failed:", e));
    };

    // Attach end listener to all audio elements so the loop continues past track 2
    audioElementsRef.current.forEach((audio) => {
      audio.addEventListener("ended", handleTrackEnded);
    });

    return () => {
      // Cleanup event listeners and DOM elements
      if (elements[0]) {
        elements[0].removeEventListener("canplaythrough", handleCanPlayThrough);
      }
      elements.forEach(audio => {
        audio.removeEventListener("ended", handleTrackEnded);
        audio.pause();
        if (document.body.contains(audio)) {
          document.body.removeChild(audio);
        }
      });
      audioElementsRef.current = [];

      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return null;
}
