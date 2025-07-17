/**
 * GateAnimation.tsx
 *
 * Displays a realistic gate opening animation (MP4 video) and plays a memory sound.
 * Calls onComplete when the animation finishes.
 */
'use client';
import React, { useEffect, useRef } from 'react';

interface GateAnimationProps {
  onComplete: () => void;
  duration?: number; // in ms
}

const GateAnimation: React.FC<GateAnimationProps> = ({ onComplete, duration = 3000 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play();
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <video src="/gate-open.mp4" autoPlay muted width={350} height={500} className="object-contain rounded-2xl shadow-lg border border-yellow-300" />
      <audio ref={audioRef} src="/memory-chime.mp3" preload="auto" />
      <div className="mt-6 text-yellow-100 text-lg font-semibold tracking-wide">Opening the Gate...</div>
    </div>
  );
};

export default GateAnimation; 