import { FiCheck, FiDollarSign, FiMusic, FiUsers, FiArrowRight, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const FanHowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Your Favorite Music Artists</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how your donations create a sustainable future for the music artists you love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiUsers size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-600">
              Discover and follow music artists you love on TrueFans CONNECT.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiDollarSign size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Support</h3>
            <p className="text-gray-600">
              Choose between one-time or recurring monthly donations to directly support your favorite artists.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiHeart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enjoy</h3>
            <p className="text-gray-600">
              Get exclusive content, early access to tickets, and build a personal connection with the artists.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Donation Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support option that works best for you and your favorite music artists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDollarSign size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">One-Time Donation</h3>
                <p className="text-gray-600">Perfect for showing immediate support</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Choose any amount from $5 to $500</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Perfect for special occasions or releases</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Access to exclusive content for 30 days</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Special thank you from the artist</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link to="/discover" className="btn btn-outline w-full">
                  Make a One-Time Donation
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border-2 border-secondary-100 hover:border-secondary-300 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMusic size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Monthly Subscription</h3>
                <p className="text-gray-600">Ongoing support for sustainable income</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Choose a monthly amount ($5, $10, $25, $50)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Continuous access to all exclusive content</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Early access to tickets and merchandise</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Direct communication with the artist</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Recognition as a key supporter</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link to="/discover" className="btn btn-primary w-full">
                  Become a Monthly Supporter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Supporting Artists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support creates a meaningful impact for both you and the artists you love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                  <FiMusic size={20} />
                </span>
                For the Artists
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Sustainable Income</h4>
                    <p className="text-gray-600">80% of all donations go directly to the artist, providing reliable income to focus on creating music.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Creative Freedom</h4>
                    <p className="text-gray-600">Direct support means artists can create the music they want without label pressure or algorithm chasing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Deeper Connections</h4>
                    <p className="text-gray-600">Artists build meaningful relationships with their most supportive fans, creating a community around their music.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mr-3">
                  <FiUsers size={20} />
                </span>
                For You as a Fan
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Exclusive Content</h4>
                    <p className="text-gray-600">Get access to unreleased tracks, behind-the-scenes footage, and special content created just for supporters.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Early Access</h4>
                    <p className="text-gray-600">Be first in line for concert tickets, merchandise, and new releases before they're available to the general public.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Personal Connection</h4>
                    <p className="text-gray-600">Build a real relationship with the artists you support through direct messages and supporter-only events.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <FiCheck className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Meaningful Impact</h4>
                    <p className="text-gray-600">Know that your support is directly helping artists continue to create the music you love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Work */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Your Donations Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency is important to us. Here's exactly how your support reaches the artists.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <p className="text-gray-600 mb-1">Your Monthly Donation</p>
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

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Supporters Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from fans who are already supporting their favorite music artists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Fan testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Jamie Rodriguez</h3>
                  <p className="text-gray-600">Supporting since 2022</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I love knowing that my monthly contribution goes directly to supporting artists I care about. The exclusive content and early access to shows makes me feel like I'm truly part of their journey."
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  alt="Fan testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Michael Thompson</h3>
                  <p className="text-gray-600">Supporting since 2021</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a longtime fan, being able to directly support my favorite artists feels amazing. I've gotten early access to three concerts this year, and the behind-the-scenes content makes me appreciate their art even more."
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                  alt="Fan testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Sophia Chen</h3>
                  <p className="text-gray-600">Supporting since 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I started with a one-time donation during a special album release and loved the experience so much that I became a monthly supporter. The personal thank you message I received from the artist made my day!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions about supporting your favorite music artists? We've got answers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How do I start supporting an artist?</h3>
                <p className="text-gray-600">
                  Simply create an account, find the artist you want to support, and choose either a one-time or monthly donation. You can support multiple artists with different amounts.
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
                <h3 className="text-xl font-bold mb-3">How do I access exclusive content?</h3>
                <p className="text-gray-600">
                  Once you're supporting an artist, you'll automatically get access to their supporter-only content through your dashboard. You'll also receive notifications when new exclusive content is available.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How do I know my donation is going to the music artist?</h3>
                <p className="text-gray-600">
                  Transparency is important to us. You'll receive confirmation when your donation is processed, and 80% of your donation goes directly to the artist. The remaining 20% covers platform fees and payment processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white rounded-3xl mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Support Your Favorite Artists?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of fans already creating a more sustainable future for the music you love.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/discover" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Become a Supporter Today
            </Link>
            <Link to="/discover" className="btn bg-secondary-600 hover:bg-secondary-700 text-white">
              Discover Artists to Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FanHowItWorks
