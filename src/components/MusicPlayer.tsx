import { useState, useRef, useEffect } from 'react'
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'

interface MusicPlayerProps {
  audioUrl: string
  title: string
  artist: string
  onDonate?: () => void
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioUrl, title, artist, onDonate }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }
    
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }
    
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])
  
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    
    setIsPlaying(!isPlaying)
  }
  
  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    
    const newTime = parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <div className="flex items-center mb-3">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:outline-none"
        >
          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
        </button>
        
        <div className="ml-3 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{artist}</p>
        </div>
        
        <button
          onClick={toggleMute}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
        >
          {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-600 dark:text-gray-300 w-10 text-right">
          {formatTime(currentTime)}
        </span>
        
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="flex-grow h-2 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #0ea5e9 ${(currentTime / (duration || 1)) * 100}%, #e5e7eb ${(currentTime / (duration || 1)) * 100}%)`
          }}
        />
        
        <span className="text-xs text-gray-600 dark:text-gray-300 w-10">
          {formatTime(duration)}
        </span>
      </div>
      
      {onDonate && (
        <div className="mt-4 text-center">
          <button
            onClick={onDonate}
            className="btn-secondary w-full"
          >
            Support This Artist
          </button>
        </div>
      )}
    </div>
  )
}

export default MusicPlayer
