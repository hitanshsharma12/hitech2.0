"use client";

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Loader2,
} from "lucide-react";

interface CourseVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  instructor?: string;
}

export default function CourseVideoPlayer({
  src,
  poster,
  title = "Course Introduction",
  instructor = "Hitansh",
}: CourseVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const toggle = async () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      setLoading(true);
      try {
        await videoRef.current.play();
        setPlaying(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const onTimeUpdate = () => {
    if (!videoRef.current) return;
    const vid = videoRef.current;
    setCurrent(vid.currentTime);
    setProgress((vid.currentTime / vid.duration) * 100 || 0);
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const onEnded = () => {
    setPlaying(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = ratio * videoRef.current.duration;
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const fullscreen = () => videoRef.current?.requestFullscreen();

  return (
    /* Gradient border wrapper */
    <div
      className="relative rounded-2xl overflow-hidden select-none"
      style={{
        background:
          "linear-gradient(135deg, #7c3aed 0%, #3b82f6 55%, #06b6d4 100%)",
        padding: "2px",
      }}
    >
      {/* Video container */}
      <div
        className="relative rounded-2xl overflow-hidden bg-black"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full aspect-video object-cover"
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={onEnded}
          playsInline
        />

        {/* Idle / paused overlay */}
        {!playing && (
          <div className="absolute inset-0 bg-black/50 flex flex-col">
            {/* Instructor badge */}
            <div className="flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {instructor[0].toUpperCase()}
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  {title}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{instructor}</p>
              </div>
            </div>

            {/* Center play button */}
            <div className="flex-1 flex items-center justify-center">
              {loading ? (
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              ) : (
                <button
                  onClick={toggle}
                  aria-label="Play video"
                  className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xl shadow-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </button>
              )}
            </div>

            <div className="h-10" />
          </div>
        )}

        {/* Playing controls (shown on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 transition-opacity duration-300 ${
            playing && showControls ? "opacity-100" : playing ? "opacity-0" : "opacity-0"
          }`}
        >
          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-white/25 rounded-full mb-3 cursor-pointer group/progress"
            onClick={seek}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400 relative transition-none"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover/progress:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="text-white hover:text-accent transition-colors"
            >
              {playing ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 fill-white" />
              )}
            </button>

            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="text-white hover:text-accent transition-colors"
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {duration > 0 && (
              <span className="text-white/60 text-xs font-mono">
                {formatTime(current)} / {formatTime(duration)}
              </span>
            )}

            <button
              onClick={fullscreen}
              aria-label="Fullscreen"
              className="ml-auto text-white hover:text-accent transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Click-to-pause when playing (anywhere on video) */}
        {playing && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={toggle}
            style={{ background: "transparent" }}
          />
        )}
      </div>
    </div>
  );
}