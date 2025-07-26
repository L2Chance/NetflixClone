import { useState, useRef, useEffect } from "react";
import NetflixLogo from "../assets/netflix-logo.svg";

const videoUrl =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function ReproductorVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Actualiza tiempo mientras se reproduce
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
    };
  }, []);

  // Play/Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Cambio de progreso (seek)
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const time = Number(e.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  };

  // Formato mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Pantalla completa
  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement;
    if (!videoContainer) return;

    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Control de volumen
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const vol = Number(e.target.value);
    video.volume = vol;
    setVolume(vol);
  };

  // Mostrar controles al mover el mouse
  useEffect(() => {
    if (!showControls) return;

    const timeout = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timeout);
  }, [showControls, currentTime]);

  return (
    <div
      className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden select-none"
      onMouseMove={() => setShowControls(true)}
      onTouchStart={() => setShowControls(true)}
    >
      {/* Logo Netflix arriba a la izquierda */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src={NetflixLogo}
          alt="Netflix Logo"
          className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          draggable={false}
        />
      </div>

      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover bg-black cursor-pointer"
        onClick={togglePlay}
        preload="metadata"
      ></video>

      {/* Controles: solo visibles al hacer hover o tocar */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-3 flex flex-col space-y-2 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Barra de progreso */}
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full appearance-none h-1 bg-gray-700 rounded-lg cursor-pointer accent-red-600"
          aria-label="Progress bar"
        />

        <div className="flex items-center justify-between text-gray-300 text-sm select-none">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="hover:text-red-600 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Tiempo */}
          <div className="font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Volumen */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const video = videoRef.current;
                if (!video) return;
                if (video.muted) {
                  video.muted = false;
                  setVolume(video.volume);
                } else {
                  video.muted = true;
                  setVolume(0);
                }
              }}
              className="hover:text-red-600 transition-colors"
              aria-label="Mute/Unmute"
            >
              {volume > 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M11 5L6 9H3v6h3l5 4V5z" />
                  <path d="M15 9.5a3.5 3.5 0 010 5" />
                  <path d="M17 7a6 6 0 010 10" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M11 5L6 9H3v6h3l5 4V5z" />
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="red"
                    strokeWidth={2}
                  />
                </svg>
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 cursor-pointer accent-red-600"
              aria-label="Volume control"
            />
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="hover:text-red-600 transition-colors"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M18 14v4h-4m0-4v4m-4-8H6v4m0-4v4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M8 3H5a2 2 0 00-2 2v3m13-3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3m13 3h3a2 2 0 002-2v-3" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
