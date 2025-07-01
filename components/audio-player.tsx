"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface AudioPlayerProps {
  audioUrl?: string
  title?: string
}

export default function AudioPlayer({ audioUrl, title = "Our Special Song" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const src = audioUrl || "/selamat-ulang-tahun.mp3"

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      // Auto replay
      audio.currentTime = 0
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("canplaythrough", () => setIsLoaded(true))

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("canplaythrough", () => setIsLoaded(true))
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log("Audio play error:", error)
      setIsPlaying(false)
    }
  }

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    const newTime = (value[0] / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = value[0]
    setVolume(newVolume)
    audio.volume = newVolume / 100
  }

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg">
      <audio ref={audioRef} preload="auto" loop>
        <source src={src} type="audio/mpeg" />
        Browser kamu tidak mendukung pemutar audio.
      </audio>

      <div className="text-center mb-6">
        <div className="text-6xl mb-4 animate-pulse">🎵</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{isLoaded ? "Lagu cinta kita siap diputar 💕" : "Memuat lagu... 🎶"}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <Slider
          value={[progress]}
          onValueChange={handleSeek}
          max={100}
          step={1}
          className="w-full"
          disabled={!isLoaded}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <Button
          onClick={togglePlay}
          size="lg"
          disabled={!isLoaded}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </Button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2">
        <Volume2 className="w-4 h-4 text-gray-600" />
        <Slider
          value={[volume]}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
          className="flex-1"
          disabled={!isLoaded}
        />
        <span className="text-xs text-gray-600 w-8">{volume}%</span>
      </div>

      <p className="text-xs text-center text-gray-500 mt-4">🎧 Lagu ini akan terus menemani perjalanan cinta kita...</p>
    </div>
  )
}
