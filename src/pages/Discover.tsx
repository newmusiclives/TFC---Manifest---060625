import { useState, useEffect } from 'react'
import MusicianCard from '../components/MusicianCard'
import SongCard from '../components/SongCard'
import { FiSearch, FiFilter, FiMusic, FiUser } from 'react-icons/fi'

const Discover = () => {
  const [musicians, setMusicians] = useState<any[]>([])
  const [songs, setSongs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'musicians' | 'songs'>('musicians')
  const [genreFilter, setGenreFilter] = useState<string | null>(null)
  const [currentSong, setCurrentSong] = useState<string | null>(null)
  
  const genres = ['Folk', 'Rock', 'Pop', 'Electronic', 'Hip Hop', 'Jazz', 'Classical', 'Country']
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, this would fetch data from Supabase
        // For now, we'll use mock data
        
        // Mock musicians data
        const mockMusicians = [
          {
            id: '1',
            name: 'Sarah Johnson',
            profilePhoto: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Folk', 'Acoustic'],
            location: 'Portland, OR',
            bio: 'Independent folk artist with a passion for storytelling through music.',
            songCount: 12
          },
          {
            id: '2',
            name: 'The Midnight Echo',
            profilePhoto: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Indie Rock', 'Alternative'],
            location: 'Austin, TX',
            bio: 'Four-piece indie rock band creating atmospheric soundscapes.',
            songCount: 8
          },
          {
            id: '3',
            name: 'DJ Pulse',
            profilePhoto: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Electronic', 'House'],
            location: 'Miami, FL',
            bio: 'Electronic music producer specializing in melodic house and techno.',
            songCount: 15
          },
          {
            id: '4',
            name: 'Luna Ray',
            profilePhoto: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Pop', 'R&B'],
            location: 'Los Angeles, CA',
            bio: 'Singer-songwriter blending pop and R&B with soulful vocals.',
            songCount: 10
          },
          {
            id: '5',
            name: 'Brass Roots',
            profilePhoto: 'https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Jazz', 'Funk'],
            location: 'New Orleans, LA',
            bio: 'Brass band bringing the sounds of New Orleans to the world.',
            songCount: 6
          },
          {
            id: '6',
            name: 'Mountain High',
            profilePhoto: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Folk', 'Bluegrass'],
            location: 'Denver, CO',
            bio: 'Acoustic trio inspired by the mountains and traditional American music.',
            songCount: 9
          }
        ]
        
        // Mock songs data
        const mockSongs = [
          {
            id: '1',
            title: 'Autumn Leaves',
            musician: {
              id: '1',
              name: 'Sarah Johnson'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            duration: 180,
            playCount: 1250,
            genre: 'Folk',
            uploadDate: '2023-09-15',
            description: 'A reflective song about change and the passing of seasons.',
            donationCount: 320
          },
          {
            id: '2',
            title: 'Midnight Drive',
            musician: {
              id: '2',
              name: 'The Midnight Echo'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            duration: 210,
            playCount: 980,
            genre: 'Indie Rock',
            uploadDate: '2023-10-02',
            description: 'Inspired by late night drives through the city.',
            donationCount: 275
          },
          {
            id: '3',
            title: 'Electric Dreams',
            musician: {
              id: '3',
              name: 'DJ Pulse'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            duration: 195,
            playCount: 1540,
            genre: 'Electronic',
            uploadDate: '2023-08-28',
            description: 'A journey through electronic soundscapes and pulsing rhythms.',
            donationCount: 410
          },
          {
            id: '4',
            title: 'Starlight',
            musician: {
              id: '4',
              name: 'Luna Ray'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            duration: 225,
            playCount: 1120,
            genre: 'Pop',
            uploadDate: '2023-09-05',
            description: 'An uplifting pop anthem about finding your light in the darkness.',
            donationCount: 350
          },
          {
            id: '5',
            title: 'Second Line',
            musician: {
              id: '5',
              name: 'Brass Roots'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
            duration: 240,
            playCount: 890,
            genre: 'Jazz',
            uploadDate: '2023-10-10',
            description: 'A celebration of New Orleans jazz traditions with a modern twist.',
            donationCount: 290
          },
          {
            id: '6',
            title: 'Rocky Mountain High',
            musician: {
              id: '6',
              name: 'Mountain High'
            },
            audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
            duration: 200,
            playCount: 760,
            genre: 'Folk',
            uploadDate: '2023-09-22',
            description: 'An homage to the majestic beauty of the Rocky Mountains.',
            donationCount: 310
          }
        ]
        
        setMusicians(mockMusicians)
        setSongs(mockSongs)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])
  
  const handlePlaySong = (songId: string) => {
    setCurrentSong(currentSong === songId ? null : songId)
  }
  
  const filteredMusicians = musicians.filter(musician => {
    const matchesSearch = musician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (musician.bio && musician.bio.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesGenre = !genreFilter || 
      (musician.genre && musician.genre.some((g: string) => g.toLowerCase() === genreFilter.toLowerCase()))
    
    return matchesSearch && matchesGenre
  })
  
  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.musician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (song.description && song.description.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesGenre = !genreFilter || 
      (song.genre && song.genre.toLowerCase() === genreFilter.toLowerCase())
    
    return matchesSearch && matchesGenre
  })
  
  return (
    <div className="max-w-6xl mx-auto pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Discover
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Find new musicians to support or discover your next favorite song.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search musicians or songs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10"
            />
          </div>
          
          <div className="relative">
            <select
              value={genreFilter || ''}
              onChange={(e) => setGenreFilter(e.target.value || null)}
              className="input pl-10 appearance-none pr-8"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiFilter className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'musicians'
                ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('musicians')}
          >
            <FiUser className="inline mr-1" />
            Musicians
          </button>
          <button
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'songs'
                ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('songs')}
          >
            <FiMusic className="inline mr-1" />
            Songs
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 h-80 animate-pulse">
              <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {activeTab === 'musicians' && (
            <>
              {filteredMusicians.length === 0 ? (
                <div className="text-center py-12">
                  <FiUser size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    No musicians found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMusicians.map((musician) => (
                    <MusicianCard
                      key={musician.id}
                      id={musician.id}
                      name={musician.name}
                      profilePhoto={musician.profilePhoto}
                      genre={musician.genre}
                      location={musician.location}
                      bio={musician.bio}
                      songCount={musician.songCount}
                    />
                  ))}
                </div>
              )}
            </>
          )}
          
          {activeTab === 'songs' && (
            <>
              {filteredSongs.length === 0 ? (
                <div className="text-center py-12">
                  <FiMusic size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    No songs found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSongs.map((song) => (
                    <SongCard
                      key={song.id}
                      id={song.id}
                      title={song.title}
                      musician={song.musician}
                      audioUrl={song.audioUrl}
                      duration={song.duration}
                      playCount={song.playCount}
                      genre={song.genre}
                      uploadDate={song.uploadDate}
                      description={song.description}
                      donationCount={song.donationCount}
                      onPlay={() => handlePlaySong(song.id)}
                      isPlaying={currentSong === song.id}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Discover
