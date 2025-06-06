import { Link } from 'react-router-dom'
import { FiMapPin, FiMusic, FiDollarSign } from 'react-icons/fi'

interface MusicianCardProps {
  id: string
  name: string
  profilePhoto?: string
  genre: string[]
  location?: string
  bio?: string
  songCount: number
}

const MusicianCard: React.FC<MusicianCardProps> = ({
  id,
  name,
  profilePhoto,
  genre,
  location,
  bio,
  songCount
}) => {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation to profile page
    // In a real app, this would open a donation modal or redirect to a donation page
    alert(`Support ${name} with a donation! 80% goes directly to the artist.`)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/musician/${id}`} className="block">
        <div className="h-40 bg-gradient-to-r from-primary-500 to-secondary-500 relative">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{name}</h3>
          
          <div className="flex flex-wrap gap-1 mb-2">
            {genre.map((g, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
          
          {location && (
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center mb-2">
              <FiMapPin className="mr-1" size={14} />
              {location}
            </p>
          )}
          
          {bio && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {bio}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <FiMusic className="mr-1" size={14} />
              <span className="text-xs">{songCount} {songCount === 1 ? 'song' : 'songs'}</span>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Donation button - outside of the Link component to prevent navigation */}
      <div className="px-4 pb-4">
        <button 
          onClick={handleDonateClick}
          className="w-full py-2 px-4 bg-secondary-600 hover:bg-secondary-700 text-white rounded-md flex items-center justify-center text-sm transition-colors"
        >
          <FiDollarSign className="mr-1" />
          Support Artist
        </button>
      </div>
    </div>
  )
}

export default MusicianCard
