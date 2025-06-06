import { useState } from 'react'
import { FiPlay, FiPause, FiHeart, FiDollarSign, FiClock, FiCalendar, FiMusic } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AudioPlayerPopup from './AudioPlayerPopup'

interface SongCardProps {
  id: string
  title: string
  musician: {
    id: string
    name: string
  }
  audioUrl: string
  duration: number
  playCount: number
  genre: string
  uploadDate: string
  description?: string
  donationCount: number
  onPlay: () => void
  isPlaying: boolean
  onDonate: (() => void) | null
}

const SongCard: React.FC<SongCardProps> = ({
  id,
  title,
  musician,
  audioUrl,
  duration,
  playCount,
  genre,
  uploadDate,
  description,
  donationCount,
  onPlay,
  isPlaying,
  onDonate
}) => {
  const [showAudioPlayerPopup, setShowAudioPlayerPopup] = useState(false)
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  
  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowAudioPlayerPopup(true)
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <button
            onClick={handlePlayClick}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:outline-none mr-4 flex-shrink-0"
          >
            {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
          </button>
          
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {title}
            </h3>
            
            <Link
              to={`/musician/${musician.id}`}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-2 inline-block"
            >
              {musician.name}
            </Link>
            
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {description}
              </p>
            )}
            
            <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <span>{formatDuration(duration)}</span>
              </div>
              
              <div className="flex items-center">
                <FiMusic className="mr-1" />
                <span>{genre}</span>
              </div>
              
              <div className="flex items-center">
                <FiCalendar className="mr-1" />
                <span>{formatDate(uploadDate)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FiHeart className="mr-1" />
            <span>{playCount.toLocaleString()} plays</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FiDollarSign className="mr-1" />
            <span>{donationCount.toLocaleString()} donations</span>
          </div>
        </div>
      </div>
      
      {/* Audio Player Popup */}
      <AudioPlayerPopup 
        isOpen={showAudioPlayerPopup} 
        onClose={() => setShowAudioPlayerPopup(false)}
        musicianName={musician.name}
        songTitle={title}
      />
    </div>
  )
}

export default SongCard
