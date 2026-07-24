"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureVideo({
  src,
  label,
  className
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={cn(
        "group relative aspect-video overflow-hidden rounded-[8px] bg-slate-950 shadow-xl",
        className
      )}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        {isPlaying ? <Pause size={17} /> : <Play size={17} className="ml-0.5" />}
      </button>
    </div>
  );
}
