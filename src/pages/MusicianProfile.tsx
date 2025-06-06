import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiMusic, FiCalendar, FiMapPin, FiDollarSign, FiHeart, FiShare2, FiExternalLink } from 'react-icons/fi'
import SongCard from '../components/SongCard'
import { useAuthStore } from '../stores/authStore'
import TicketPopup from '../components/TicketPopup'
import AudioPlayerPopup from '../components/AudioPlayerPopup'

const MusicianProfile = () => {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  
  const [musician, setMusician] = useState<any>(null)
  const [songs, setSongs] = useState<any[]>([])
  const [shows, setShows] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentSong, setCurrentSong] = useState<string | null>(null)
  const [isFollowing, setIsFollowing] = useState(false)
  const [donationAmount, setDonationAmount] = useState<number>(5)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [showTicketPopup, setShowTicketPopup] = useState(false)
  const [showAudioPlayerPopup, setShowAudioPlayerPopup] = useState(false)
  const [currentSongTitle, setCurrentSongTitle] = useState<string>("")
  
  useEffect(() => {
    const fetchMusicianData = async () => {
      try {
        // In a real app, this would fetch data from Supabase
        // For now, we'll use mock data based on the music artist ID
        
        // Mock music artists data
        const mockMusicians = {
          '1': {
            id: '1',
            name: 'Sarah Johnson',
            stageName: 'Sarah J',
            profilePhoto: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Folk', 'Acoustic'],
            location: 'Portland, OR',
            bio: 'Independent folk artist with a passion for storytelling through music. Sarah has been writing and performing for over 10 years, drawing inspiration from the natural beauty of the Pacific Northwest and the stories of the people she meets along the way.',
            followers: 1250,
            totalDonations: 8750,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          },
          '2': {
            id: '2',
            name: 'The Midnight Echo',
            stageName: 'The Midnight Echo',
            profilePhoto: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Indie Rock', 'Alternative'],
            location: 'Austin, TX',
            bio: 'Four-piece indie rock band creating atmospheric soundscapes. Formed in 2018, The Midnight Echo has been building a dedicated following through their energetic live shows and emotionally resonant recordings.',
            followers: 980,
            totalDonations: 6200,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          },
          '3': {
            id: '3',
            name: 'DJ Pulse',
            stageName: 'DJ Pulse',
            profilePhoto: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Electronic', 'House'],
            location: 'Miami, FL',
            bio: 'Electronic music producer specializing in melodic house and techno. With roots in the Miami club scene, DJ Pulse has been crafting infectious beats and immersive soundscapes for over a decade, performing at major festivals across North America.',
            followers: 1540,
            totalDonations: 9200,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          },
          '4': {
            id: '4',
            name: 'Luna Ray',
            stageName: 'Luna Ray',
            profilePhoto: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Pop', 'R&B'],
            location: 'Los Angeles, CA',
            bio: 'Singer-songwriter blending pop and R&B with soulful vocals. Luna Ray has been making waves in the LA music scene with her powerful voice and honest, vulnerable lyrics that connect with listeners on a deeply emotional level.',
            followers: 1120,
            totalDonations: 7500,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          },
          '5': {
            id: '5',
            name: 'Brass Roots',
            stageName: 'Brass Roots',
            profilePhoto: 'https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Jazz', 'Funk'],
            location: 'New Orleans, LA',
            bio: 'Brass band bringing the sounds of New Orleans to the world. Formed by a group of childhood friends who grew up in the musical melting pot of New Orleans, Brass Roots combines traditional jazz with modern funk and hip-hop influences.',
            followers: 890,
            totalDonations: 5400,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          },
          '6': {
            id: '6',
            name: 'Mountain High',
            stageName: 'Mountain High',
            profilePhoto: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            coverPhoto: 'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            genre: ['Folk', 'Bluegrass'],
            location: 'Denver, CO',
            bio: 'Acoustic trio inspired by the mountains and traditional American music. Mountain High brings together three virtuosic instrumentalists who share a love for bluegrass, folk, and the natural beauty of the Rocky Mountains.',
            followers: 760,
            totalDonations: 4800,
            socialLinks: {
              website: 'https://example.com',
              instagram: 'https://instagram.com',
              spotify: 'https://spotify.com',
              youtube: 'https://youtube.com'
            }
          }
        }
        
        // Get the music artist data based on ID
        const selectedMusician = mockMusicians[id as keyof typeof mockMusicians]
        
        // Mock songs data for each music artist
        const mockSongsMap = {
          '1': [
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
              title: 'Mountain Trail',
              musician: {
                id: '1',
                name: 'Sarah Johnson'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
              duration: 210,
              playCount: 980,
              genre: 'Folk',
              uploadDate: '2023-08-22',
              description: 'Inspired by hiking in the Cascade Mountains.',
              donationCount: 275
            },
            {
              id: '3',
              title: 'City Lights',
              musician: {
                id: '1',
                name: 'Sarah Johnson'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
              duration: 195,
              playCount: 1100,
              genre: 'Folk',
              uploadDate: '2023-07-10',
              description: 'A song about finding peace in the chaos of urban life.',
              donationCount: 290
            },
            {
              id: '4',
              title: 'River Song',
              musician: {
                id: '1',
                name: 'Sarah Johnson'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              duration: 225,
              playCount: 850,
              genre: 'Folk',
              uploadDate: '2023-06-05',
              description: 'Inspired by the Columbia River and its journey to the sea.',
              donationCount: 210
            }
          ],
          '2': [
            {
              id: '5',
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
              id: '6',
              title: 'Neon Lights',
              musician: {
                id: '2',
                name: 'The Midnight Echo'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
              duration: 195,
              playCount: 850,
              genre: 'Indie Rock',
              uploadDate: '2023-09-10',
              description: 'A song about the vibrant nightlife of Austin.',
              donationCount: 220
            },
            {
              id: '7',
              title: 'Echoes',
              musician: {
                id: '2',
                name: 'The Midnight Echo'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              duration: 240,
              playCount: 720,
              genre: 'Alternative',
              uploadDate: '2023-08-15',
              description: 'Our signature song about memories that linger.',
              donationCount: 190
            }
          ],
          '3': [
            {
              id: '8',
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
              id: '9',
              title: 'Miami Nights',
              musician: {
                id: '3',
                name: 'DJ Pulse'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              duration: 225,
              playCount: 1320,
              genre: 'House',
              uploadDate: '2023-07-15',
              description: 'Inspired by the vibrant nightlife of South Beach.',
              donationCount: 380
            },
            {
              id: '10',
              title: 'Sunrise',
              musician: {
                id: '3',
                name: 'DJ Pulse'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
              duration: 240,
              playCount: 1150,
              genre: 'Electronic',
              uploadDate: '2023-06-20',
              description: 'An uplifting track for those magical sunrise moments.',
              donationCount: 320
            }
          ],
          '4': [
            {
              id: '11',
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
              id: '12',
              title: 'Heartbeat',
              musician: {
                id: '4',
                name: 'Luna Ray'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
              duration: 240,
              playCount: 980,
              genre: 'R&B',
              uploadDate: '2023-08-12',
              description: 'A soulful ballad about the rhythm of love.',
              donationCount: 290
            },
            {
              id: '13',
              title: 'City Dreams',
              musician: {
                id: '4',
                name: 'Luna Ray'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
              duration: 200,
              playCount: 850,
              genre: 'Pop',
              uploadDate: '2023-07-20',
              description: 'A song about chasing your dreams in the big city.',
              donationCount: 240
            }
          ],
          '5': [
            {
              id: '14',
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
              id: '15',
              title: 'Bourbon Street',
              musician: {
                id: '5',
                name: 'Brass Roots'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
              duration: 200,
              playCount: 780,
              genre: 'Funk',
              uploadDate: '2023-09-15',
              description: 'Inspired by the energy and spirit of the French Quarter.',
              donationCount: 250
            },
            {
              id: '16',
              title: 'Mardi Gras',
              musician: {
                id: '5',
                name: 'Brass Roots'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
              duration: 220,
              playCount: 720,
              genre: 'Jazz',
              uploadDate: '2023-08-20',
              description: 'A lively celebration of the biggest party in New Orleans.',
              donationCount: 230
            }
          ],
          '6': [
            {
              id: '17',
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
            },
            {
              id: '18',
              title: 'Appalachian Trail',
              musician: {
                id: '6',
                name: 'Mountain High'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
              duration: 220,
              playCount: 680,
              genre: 'Bluegrass',
              uploadDate: '2023-08-15',
              description: 'Inspired by hiking through the ancient Appalachian mountains.',
              donationCount: 270
            },
            {
              id: '19',
              title: 'Campfire Tales',
              musician: {
                id: '6',
                name: 'Mountain High'
              },
              audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
              duration: 190,
              playCount: 620,
              genre: 'Folk',
              uploadDate: '2023-07-10',
              description: 'Stories and melodies shared around the campfire under starry skies.',
              donationCount: 240
            }
          ]
        }
        
        // Get songs for the selected music artist
        const selectedSongs = mockSongsMap[id as keyof typeof mockSongsMap] || []
        
        // Mock shows data for each music artist
        const mockShowsMap = {
          '1': [
            {
              id: '1',
              venue: 'The Acoustic Room',
              location: 'Portland, OR',
              date: '2023-11-15T20:00:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '2',
              venue: 'Mountain View Coffee',
              location: 'Seattle, WA',
              date: '2023-11-22T19:30:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '3',
              venue: 'Folk Festival',
              location: 'Eugene, OR',
              date: '2023-12-05T18:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ],
          '2': [
            {
              id: '4',
              venue: 'The Continental Club',
              location: 'Austin, TX',
              date: '2023-11-18T21:00:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '5',
              venue: 'House of Blues',
              location: 'Dallas, TX',
              date: '2023-11-25T20:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ],
          '3': [
            {
              id: '6',
              venue: 'Club Space',
              location: 'Miami, FL',
              date: '2023-11-20T23:00:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '7',
              venue: 'Electric Festival',
              location: 'Orlando, FL',
              date: '2023-12-10T22:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ],
          '4': [
            {
              id: '8',
              venue: 'The Troubadour',
              location: 'Los Angeles, CA',
              date: '2023-11-12T20:30:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '9',
              venue: 'The Roxy',
              location: 'West Hollywood, CA',
              date: '2023-11-28T21:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ],
          '5': [
            {
              id: '10',
              venue: 'Preservation Hall',
              location: 'New Orleans, LA',
              date: '2023-11-14T19:00:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '11',
              venue: 'Jazz & Heritage Festival',
              location: 'New Orleans, LA',
              date: '2023-12-03T16:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ],
          '6': [
            {
              id: '12',
              venue: 'Red Rocks Amphitheatre',
              location: 'Morrison, CO',
              date: '2023-11-19T19:00:00',
              ticketLink: 'https://example.com/tickets'
            },
            {
              id: '13',
              venue: 'Bluebird Cafe',
              location: 'Denver, CO',
              date: '2023-12-08T20:00:00',
              ticketLink: 'https://example.com/tickets'
            }
          ]
        }
        
        // Get shows for the selected music artist
        const selectedShows = mockShowsMap[id as keyof typeof mockShowsMap] || []
        
        setMusician(selectedMusician)
        setSongs(selectedSongs)
        setShows(selectedShows)
      } catch (error) {
        console.error('Error fetching music artist data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    if (id) {
      fetchMusicianData()
    }
  }, [id])
  
  const handlePlaySong = (songId: string) => {
    const song = songs.find(s => s.id === songId)
    if (song) {
      setCurrentSongTitle(song.title)
      setShowAudioPlayerPopup(true)
    }
  }
  
  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
    // In a real app, this would update the database
  }
  
  const handleDonate = () => {
    setShowDonationModal(true)
  }
  
  const completeDonation = () => {
    // In a real app, this would process the payment
    setShowDonationModal(false)
    alert(`Thank you for your donation of $${donationAmount} to ${musician.name}!`)
  }
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }
  
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    })
  }
  
  const handleTicketClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowTicketPopup(true)
  }
  
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl mb-8"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            </div>
            <div className="md:w-2/3">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
              <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!musician) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Music Artist Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The music artist you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/discover" className="btn-primary">
          Discover Music Artists
        </Link>
      </div>
    )
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Cover Photo */}
      <div className="relative h-64 md:h-80 rounded-b-xl overflow-hidden">
        <img
          src={musician.coverPhoto}
          alt={`${musician.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Profile Image - Using the new CSS classes */}
      <div className="profile-image-container">
        <div className="profile-image">
          <img
            src={musician.profilePhoto}
            alt={musician.name}
          />
        </div>
      </div>
      
      <div className="px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left Column - Profile Info */}
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {musician.stageName || musician.name}
                </h1>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiMapPin className="mr-1" />
                  <span>{musician.location}</span>
                </div>
                
                <div className="flex justify-center space-x-2 mb-6">
                  {musician.genre.map((genre: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      {musician.followers.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      ${musician.totalDonations.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Donations</div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={toggleFollow}
                    className={`btn ${
                      isFollowing ? 'btn-outline' : 'btn-primary'
                    } w-full flex items-center justify-center`}
                  >
                    <FiHeart className="mr-2" />
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                  
                  {/* Single donation button with updated text */}
                  <button
                    onClick={handleDonate}
                    className="btn btn-secondary w-full flex items-center justify-center"
                  >
                    <FiDollarSign className="mr-2" />
                    Donate to Artist
                  </button>
                  
                  <button className="btn btn-outline w-full flex items-center justify-center">
                    <FiShare2 className="mr-2" />
                    Share Profile
                  </button>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(musician.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
                    >
                      <FiExternalLink className="mr-1" />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Upcoming Shows */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Upcoming Shows
                </h3>
              </div>
              
              <div className="p-6">
                {shows.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                    No upcoming shows scheduled.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {shows.map((show) => (
                      <div
                        key={show.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                      >
                        <div className="flex items-start">
                          <div className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg p-3 mr-4">
                            <FiCalendar size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white">
                              {show.venue}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              {show.location}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                              {formatDate(show.date)} at {formatTime(show.date)}
                            </p>
                            <a
                              href={show.ticketLink}
                              onClick={handleTicketClick}
                              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                            >
                              Get Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column - Bio and Songs */}
          <div className="md:w-2/3">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                About
              </h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {musician.bio}
              </p>
            </div>
            
            {/* Songs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Songs
                </h2>
              </div>
              
              <div className="p-6">
                {songs.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                    No songs available.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {songs.map((song) => (
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
                        onDonate={null}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Support {musician.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your donation helps this artist continue creating music. 80% goes directly to the artist.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Donation Amount
              </label>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[5, 10, 20, 50].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationAmount(amount)}
                    className={`py-2 px-4 rounded-md ${
                      donationAmount === amount
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-500 dark:text-gray-400 mr-2">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 0))}
                  className="input"
                  min="1"
                  step="1"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowDonationModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={completeDonation}
                className="btn btn-primary"
              >
                Donate ${donationAmount}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Ticket Popup */}
      <TicketPopup 
        isOpen={showTicketPopup} 
        onClose={() => setShowTicketPopup(false)} 
      />
      
      {/* Audio Player Popup */}
      <AudioPlayerPopup 
        isOpen={showAudioPlayerPopup} 
        onClose={() => setShowAudioPlayerPopup(false)}
        musicianName={musician?.name || ""}
        songTitle={currentSongTitle}
      />
    </div>
  )
}

export default MusicianProfile
