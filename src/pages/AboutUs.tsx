import { FiMusic, FiUsers, FiTarget, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About TrueFans CONNECT</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We're building a sustainable future for music by connecting music artists directly with their most dedicated fans.
        </p>
        <div className="relative h-96 rounded-3xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" 
            alt="Concert crowd with hands in the air" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white text-left">
              <h2 className="text-3xl font-bold mb-2">Empowering Music Artists</h2>
              <p className="text-lg max-w-2xl">
                Creating a world where music artists can earn a living doing what they love, supported directly by fans who value their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              TrueFans CONNECT™ was born from a simple observation: the traditional music industry is broken for many music artists. Streaming platforms paid fractions of pennies per play, and record labels took large percentages of revenue.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2024 by a team of tech enthusiasts and industry veterans, we set out to create a platform that would allow music artists to build sustainable careers through direct fan support.
            </p>
            <p className="text-gray-700">
              Our mission is to empower music artists to maintain creative control while earning a living wage from their art, and to give TrueFans a meaningful way to support the music they love while receiving exclusive benefits in return.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" 
              alt="Musicians in a recording studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
              <FiMusic size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Music Artist First</h3>
            <p className="text-gray-600">
              We believe music artists should be fairly compensated for their work and maintain creative control over their music.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-6">
              <FiUsers size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Driven</h3>
            <p className="text-gray-600">
              We foster meaningful connections between music artists and fans, creating communities around the music they love.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-6">
              <FiTarget size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparency</h3>
            <p className="text-gray-600">
              We believe in clear, honest communication about how our platform works and where the money goes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <FiHeart size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We're building a platform that creates long-term, sustainable income for music artists rather than short-term gains.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Paul Saunders - Founder */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Paul Saunders" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Paul Saunders</h3>
            <p className="text-gray-500 mb-3">Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">
              Visionary leader with extensive experience in the music industry and technology innovation.
            </p>
          </div>
          
          {/* Lou Bledsoe - Co-Founder */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Lou Bledsoe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Lou Bledsoe</h3>
            <p className="text-gray-500 mb-3">Co-Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">
              Experienced production leader with expertise in content creation and quality assurance.
            </p>
          </div>
          
          {/* Matthew Wood - Co-Founder */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                alt="Matthew Wood" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Matthew Wood</h3>
            <p className="text-gray-500 mb-3">Co-Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">
              Strategic marketing expert with deep knowledge of digital platforms and audience engagement.
            </p>
          </div>
          
          {/* John Fogg - Co-Founder */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                alt="John Fogg" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">John Fogg</h3>
            <p className="text-gray-500 mb-3">Co-Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">
              Award-winning creative professional with a passion for innovative design and storytelling.
            </p>
          </div>
        </div>
        
        {/* Additional team members */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
          {/* Darryl Saunders - Co-Founder */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                alt="Darryl Saunders" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Darryl Saunders</h3>
            <p className="text-gray-500 mb-3">Co-Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">
              Based in the UK, creating our strategy to expanding our platform to music artists in Europe and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mb-20 bg-gray-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-primary-600 mb-2">1,500+</p>
            <p className="text-xl text-gray-700">Music Artists Supported</p>
          </div>
          
          <div>
            <p className="text-5xl font-bold text-primary-600 mb-2">$2.5M+</p>
            <p className="text-xl text-gray-700">Paid to Music Artists</p>
          </div>
          
          <div>
            <p className="text-5xl font-bold text-primary-600 mb-2">50,000+</p>
            <p className="text-xl text-gray-700">Active Supporters</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-6">
              "TrueFans CONNECT has completely changed how I approach my music career. The direct support from fans has allowed me to quit my day job and focus on creating music full-time. The platform is intuitive and the team is incredibly supportive."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" 
                alt="Music artist testimonial" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Elena Rivera</h4>
                <p className="text-gray-500">Independent Music Artist</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-6">
              "As a fan, I love being able to directly support the music artists I care about. The exclusive content and personal connection make it so much more meaningful than just streaming their music. It feels like I'm part of their journey."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" 
                alt="Fan testimonial" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-gray-500">Music Fan & Monthly Supporter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-primary-600 text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the TrueFans CONNECT Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a music artist looking for sustainable support or a fan wanting to directly impact the future of music, we'd love to have you join us.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/join-as-musician" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Join as a Music Artist
          </Link>
          <Link to="/discover" className="btn bg-secondary-600 hover:bg-secondary-700 text-white">
            Discover Music Artists to Support
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
