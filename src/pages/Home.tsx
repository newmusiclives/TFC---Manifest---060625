import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import MusicianCard from '../components/MusicianCard'
import { FiMusic, FiDollarSign, FiUsers } from 'react-icons/fi'

const Home = () => {
  const [featuredMusicians, setFeaturedMusicians] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchFeaturedMusicians = async () => {
      try {
        const { data, error } = await supabase
          .from('musicians')
          .select(`
            *,
            users!inner(*)
          `)
          .limit(3)
        
        if (error) throw error
        
        // Transform the data to match the MusicianCard props
        const musicians = data.map(musician => ({
          id: musician.id,
          name: musician.stage_name || musician.users.name,
          profilePhoto: musician.users.profile_photo,
          genre: musician.genre || ['Music'],
          location: musician.users.location,
          bio: musician.users.bio,
          songCount: Math.floor(Math.random() * 20) + 1 // Mock data
        }))
        
        setFeaturedMusicians(musicians)
      } catch (error) {
        console.error('Error fetching featured music artists:', error)
        
        // Mock data for development
        setFeaturedMusicians([
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
          }
        ])
      } finally {
        setLoading(false)
      }
    }
    
    fetchFeaturedMusicians()
  }, [])
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 px-4 md:py-20 bg-gradient-to-br from-primary-600 to-secondary-700 rounded-3xl text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Right Now Money and TrueFans Forever
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            TrueFans CONNECT lets you donate directly to the artists you love.
            80% goes straight to the music artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discover" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Discover Music Artists
            </Link>
            <Link to="/register" className="btn bg-secondary-500 text-white hover:bg-secondary-600">
              Join as a Music Artist
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMusic className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Music</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find new music artists or support your favorites. Listen to their music and connect with their stories.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make a Donation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose any amount to donate. 80% goes directly to the music artist within 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Connections</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Send personal messages with your donations. Attend shows and support artists in person.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Music Artists Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Music Artists</h2>
            <Link to="/discover" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
              View All
            </Link>
          </div>
          
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
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
            <div className="grid md:grid-cols-3 gap-8">
              {featuredMusicians.map((musician) => (
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
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fan testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Music Fan</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "I love being able to directly support the indie artists I discover. Knowing that most of my donation goes straight to them makes me feel good about contributing."
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Music Artist testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah J.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Indie Music Artist</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "TrueFans CONNECT has changed how I think about my music career. The direct support from fans has allowed me to focus on creating music instead of worrying about how to pay rent."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-secondary-600 to-primary-700 rounded-3xl text-white mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform How Music Artists Get Paid?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of music artists and fans creating a more sustainable future for music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-secondary-600 hover:bg-gray-100">
              Create Your Account
            </Link>
            <Link to="/discover" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Explore Music Artists
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
