import { useEffect, useRef } from "react";

const AUDIO_TRACKS = [
  "/audio/Naruto - Loneliness Riki リキ Remix.mp3",
  "/audio/Naruto Shippuden - Loneliness Chenow Remix.mp3",
];

export default function HeadlessAudioEngine() {
  const trackIndexRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const currentSourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtxRef.current = new AudioContextClass();

    gainNodeRef.current = audioCtxRef.current.createGain();
    gainNodeRef.current.connect(audioCtxRef.current.destination);
    gainNodeRef.current.gain.setValueAtTime(1, audioCtxRef.current.currentTime);

    streamAndDecodeTrack(trackIndexRef.current);

    return () => {
      haltCurrentBuffer();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const streamAndDecodeTrack = async (index: number) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    try {
      const response = await fetch(AUDIO_TRACKS[index]);
      const arrayBuffer = await response.arrayBuffer();

      const audioBuffer = await audioCtxRef.current.decodeAudioData(arrayBuffer);

      haltCurrentBuffer();

      const sourceNode = audioCtxRef.current.createBufferSource();
      sourceNode.buffer = audioBuffer;

      sourceNode.connect(gainNodeRef.current);
      currentSourceNodeRef.current = sourceNode;

      sourceNode.onended = () => {
        const nextIndex = (trackIndexRef.current + 1) % AUDIO_TRACKS.length;
        trackIndexRef.current = nextIndex;
        streamAndDecodeTrack(nextIndex);
      };

      sourceNode.start(0);
    } catch (error) {
      console.error(error)
    }
  };

  const haltCurrentBuffer = () => {
    if (currentSourceNodeRef.current) {
      try {
        currentSourceNodeRef.current.stop();
        currentSourceNodeRef.current.disconnect();
      } catch (e) {
        console.error(e)
      }
      currentSourceNodeRef.current = null;
    }
  };

  return null;
}
