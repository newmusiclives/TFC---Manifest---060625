import { FiCheck, FiDollarSign, FiMusic, FiUsers, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How TrueFans CONNECT Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're creating a sustainable ecosystem where music artists receive direct support from their most dedicated fans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiUsers size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-600">
              Music artists create profiles and upload their music. Fans discover artists they love and follow their work.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiDollarSign size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Support</h3>
            <p className="text-gray-600">
              Fans make monthly donations between $5-$50 to directly support their favorite music artists.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMusic size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Thrive</h3>
            <p className="text-gray-600">
              Music artists receive 80% of all donations, creating sustainable income while building deeper connections with fans.
            </p>
          </div>
        </div>
      </section>

      {/* For Musicians Section */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Music Artists</h2>
              <p className="text-xl text-gray-600 mb-8">
                TrueFans CONNECT gives you the tools to build a sustainable career through direct fan support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Direct Financial Support</h4>
                    <p className="text-gray-600">80% of all donations go directly to you, with weekly payouts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Music Distribution</h4>
                    <p className="text-gray-600">Upload and share your music directly with your supporters.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Show Management</h4>
                    <p className="text-gray-600">Promote your live shows and connect with fans in person.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Analytics Dashboard</h4>
                    <p className="text-gray-600">Track your growth, earnings, and fan engagement over time.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/join-as-musician" className="btn btn-primary">
                  Join as a Music Artist
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg" 
                alt="Music artist in studio" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Fans Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" 
                alt="Fans at concert" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Fans</h2>
              <p className="text-xl text-gray-600 mb-8">
                Support the artists you love directly and get exclusive benefits in return.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Direct Impact</h4>
                    <p className="text-gray-600">Know that your support directly helps artists continue creating music.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Exclusive Content</h4>
                    <p className="text-gray-600">Get early access to new music and behind-the-scenes content.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Show Perks</h4>
                    <p className="text-gray-600">Early access to tickets and special recognition at live shows.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Direct Connection</h4>
                    <p className="text-gray-600">Build a personal relationship with the music artists you support.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/signup" className="btn btn-primary">
                  Become a Supporter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Money Works */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How the Money Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency and fairness. Here's exactly how donations are distributed.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <p className="text-gray-600 mb-1">Monthly Fan Donation</p>
                  <h3 className="text-4xl font-bold text-gray-800">$10.00</h3>
                </div>
                
                <div className="w-full md:w-auto flex justify-center">
                  <FiArrowRight size={32} className="text-gray-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0">
                  <div className="text-center">
                    <div className="w-full h-4 bg-primary-100 rounded-full mb-2">
                      <div className="h-4 bg-primary-600 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-gray-600 mb-1">Music Artist Receives</p>
                    <h4 className="text-2xl font-bold text-primary-600">$8.00</h4>
                    <p className="text-sm text-gray-500">80% of donation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-full h-4 bg-gray-100 rounded-full mb-2">
                      <div className="h-4 bg-gray-400 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <p className="text-gray-600 mb-1">Platform Fee</p>
                    <h4 className="text-2xl font-bold text-gray-600">$2.00</h4>
                    <p className="text-sm text-gray-500">20% of donation</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-3">What the platform fee covers:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-green-600 mt-1 mr-2" />
                    <span className="text-gray-600">Payment processing fees</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-600 mt-1 mr-2" />
                    <span className="text-gray-600">Platform development and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-600 mt-1 mr-2" />
                    <span className="text-gray-600">Customer support</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-600 mt-1 mr-2" />
                    <span className="text-gray-600">Marketing to help music artists reach new fans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How often do music artists get paid?</h3>
                <p className="text-gray-600">
                  Music artists receive weekly payouts for all donations received. Funds are transferred directly to their connected bank account via our integration with Manifest Financial API.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Can I cancel my monthly donation?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel or modify your donation amount at any time from your account settings. Changes will take effect on your next billing date.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">
                  We accept all major credit and debit cards, as well as PayPal. We're working on adding more payment options in the future.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Do music artists need to pay to join?</h3>
                <p className="text-gray-600">
                  No, TrueFans CONNECT is completely free for music artists to join. We only take a percentage of donations received, so there's no upfront cost or monthly fee.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How do I know my donation is going to the music artist?</h3>
                <p className="text-gray-600">
                  Transparency is important to us. You'll receive confirmation when your donation is processed, and music artists can verify their received payments in their dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of music artists and fans already creating a more sustainable future for music.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/join-as-musician" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Join as a Music Artist
            </Link>
            <Link to="/signup" className="btn bg-secondary-600 hover:bg-secondary-700 text-white">
              Join as a Fan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
