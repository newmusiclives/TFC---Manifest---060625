import { useState, useRef, useEffect } from 'react'
import { FiX, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'

interface AudioPlayerPopupProps {
  isOpen: boolean
  onClose: () => void
  musicianName: string
  songTitle?: string
}

const AudioPlayerPopup: React.FC<AudioPlayerPopupProps> = ({ 
  isOpen, 
  onClose, 
  musicianName,
  songTitle = "Demo Track" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  // Demo track URL - using SoundHelix for demo purposes
  const demoTrackUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  
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
  
  useEffect(() => {
    // Reset player state when modal is opened/closed
    if (!isOpen) {
      setIsPlaying(false)
      setCurrentTime(0)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isOpen])
  
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
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <FiX size={24} />
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Now Playing
                </h3>
                
                <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <audio ref={audioRef} src={demoTrackUrl} preload="metadata" />
                  
                  <div className="flex items-center mb-3">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:outline-none"
                    >
                      {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                    </button>
                    
                    <div className="ml-3 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{songTitle}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{musicianName}</p>
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
                      className="flex-grow h-2 rounded-full bg-gray-200 dark:bg-gray-600 appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #0ea5e9 ${(currentTime / (duration || 1)) * 100}%, #e5e7eb ${(currentTime / (duration || 1)) * 100}%)`
                      }}
                    />
                    
                    <span className="text-xs text-gray-600 dark:text-gray-300 w-10">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    This is a demo track. The full music player functionality will be available soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayerPopup
