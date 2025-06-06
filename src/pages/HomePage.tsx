import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiMusic, FiDollarSign, FiUsers } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Right Now Money and TrueFans Forever
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Connect directly with your favorite music artists. Support their art with monthly donations and get exclusive content in return.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup?type=musician" className="btn btn-primary text-center px-8 py-3 text-lg">
                  Join as a Music Artist
                </Link>
                <Link to="/how-it-works" className="btn btn-outline text-center px-8 py-3 text-lg flex items-center justify-center">
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" 
                alt="Concert crowd with hands in the air" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TrueFans CONNECT creates a direct financial relationship between music artists and their most dedicated fans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="text-gray-600">
                Find your favorite music artists or discover new artists on our platform.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiDollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-600">
                Choose a monthly donation amount between $5-$50 to support their work.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMusic size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Enjoy</h3>
              <p className="text-gray-600">
                Get exclusive content, early access to tickets, and special perks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Music Artists</h2>
              <div className="h-[72px]"> {/* Fixed height container for description */}
                <p className="text-xl text-gray-600 mb-8">
                  TrueFans CONNECT helps you build sustainable income and deeper connections with your fans.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>80% of all donations go directly to you</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Weekly payouts via Manifest Financial API</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Detailed analytics on your supporter base</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Tools to share exclusive content with supporters</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/signup?type=musician" className="btn btn-primary">
                  Join as a Music Artist
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Fans</h2>
              <div className="h-[72px]"> {/* Fixed height container for description */}
                <p className="text-xl text-gray-600 mb-8">
                  Support the artists you love directly and help them grow as music artists and get exclusive benefits in return.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Exclusive content from your favorite music artists</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Early access to concert tickets and merchandise</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Direct communication with artists you support</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3" size={20} />
                  <span>Recognition as a key supporter in the community</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/signup?type=fan" className="btn btn-primary">
                  Become a Supporter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Artists</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of the talented music artists already using TrueFans CONNECT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                genre: "Indie Folk",
                image: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
                supporters: 248
              },
              {
                name: "The Midnight Crew",
                genre: "Alternative Rock",
                image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
                supporters: 372
              },
              {
                name: "DJ Electra",
                genre: "Electronic",
                image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
                supporters: 185
              },
              {
                name: "Marcus Rivera",
                genre: "Jazz Fusion",
                image: "https://images.pexels.com/photos/4472061/pexels-photo-4472061.jpeg",
                supporters: 293
              }
            ].map((artist, index) => (
              <div key={index} className="card overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                  <p className="text-gray-600 mb-3">{artist.genre}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{artist.supporters} supporters</span>
                    <Link to={`/musician/${index + 1}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/discover" className="btn btn-outline">
              Discover More Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from music artists and fans who are already part of our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Music Artist testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Alex Chen</h3>
                  <p className="text-gray-600">Indie Singer-Songwriter</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "TrueFans CONNECT has completely changed how I think about my music career. I now have a steady monthly income from my supporters, which gives me the freedom to create without worrying about booking gigs constantly. The direct connection with my fans is priceless."
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Fan testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Jamie Rodriguez</h3>
                  <p className="text-gray-600">Music Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I love knowing that my monthly contribution goes directly to supporting artists I care about. The exclusive content and early access to shows makes me feel like I'm truly part of their journey. It's so much more meaningful than just streaming their music."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a music artist looking for sustainable support or a fan wanting to connect with your favorite artists, TrueFans CONNECT is for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup?type=musician" className="btn bg-white text-primary-600 hover:bg-gray-100 text-center px-8 py-3 text-lg">
              Join as a Music Artist
            </Link>
            {/* Fan signup button removed */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
