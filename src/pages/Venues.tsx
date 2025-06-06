import { useState, useRef } from 'react'
import { FiMusic, FiDollarSign, FiCode, FiUsers, FiCheckCircle, FiImage, FiSliders } from 'react-icons/fi'

const Venues = () => {
  const [formCode, setFormCode] = useState<string>('')
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [venueName, setVenueName] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  
  // Form customization states
  const [logoUrl, setLogoUrl] = useState<string>('')
  const [primaryColor, setPrimaryColor] = useState<string>('#0ea5e9')
  const [showCustomizationModal, setShowCustomizationModal] = useState<boolean>(false)
  
  // Calculator states
  const [showAttendees, setShowAttendees] = useState<number>(100)
  const [donationRate, setDonationRate] = useState<number>(50)
  const [avgDonation, setAvgDonation] = useState<number>(20)
  const [referredArtists, setReferredArtists] = useState<number>(5)
  const [secondTierArtists, setSecondTierArtists] = useState<number>(10)
  
  // File input ref
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      // Generate a unique form code (in a real app, this would come from the backend)
      const uniqueCode = `venue-${Math.random().toString(36).substring(2, 10)}`
      setFormCode(uniqueCode)
      setShowCodeModal(true)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const copyEmbedCode = () => {
    // Include customization parameters in the embed code
    const customizationParams = new URLSearchParams()
    if (logoUrl) customizationParams.append('logo', encodeURIComponent(logoUrl))
    customizationParams.append('color', encodeURIComponent(primaryColor.replace('#', '')))
    
    const embedCode = `<iframe src="https://truefans-connect.vercel.app/embed/submission-form/${formCode}?${customizationParams.toString()}" width="100%" height="600" frameborder="0"></iframe>`
    
    navigator.clipboard.writeText(embedCode)
      .then(() => {
        alert('Embed code copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }
  
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, this would upload to a storage service and return a URL
      // For demo purposes, we'll create a local object URL
      const objectUrl = URL.createObjectURL(file)
      setLogoUrl(objectUrl)
    }
  }
  
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }
  
  // Calculate potential earnings
  const calculateMonthlyEarnings = () => {
    // Calculate direct earnings from shows
    const donationsPerShow = showAttendees * (donationRate / 100) * avgDonation
    const directEarningsPerShow = donationsPerShow * 0.025
    
    // Calculate monthly earnings from referred artists (assuming 4 shows per month per artist)
    const referredArtistsEarnings = referredArtists * 4 * donationsPerShow * 0.025
    
    // Calculate monthly earnings from second-tier artists (assuming 4 shows per month per artist)
    const secondTierEarnings = secondTierArtists * 4 * donationsPerShow * 0.025
    
    return {
      directEarningsPerShow,
      referredArtistsEarnings,
      secondTierEarnings,
      totalMonthly: referredArtistsEarnings + secondTierEarnings
    }
  }
  
  const earnings = calculateMonthlyEarnings()

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">For Live Music Venues</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your live music booking process and earn additional revenue through our affiliate program.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMusic className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Streamlined Submissions</h3>
              <p className="text-gray-600">
                Receive organized music submissions through our customizable form that you can embed on your website.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Passive Income</h3>
              <p className="text-gray-600">
                Earn 2.5% commission on all donations received by artists who submit to your venue and join TrueFans CONNECT™.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
              <p className="text-gray-600">
                Connect with more artists and expand your venue's reach in the music community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">1. Sign Up for Free</h3>
                <p className="text-gray-600">
                  Register your venue with TrueFans CONNECT™ at no cost. It only takes a minute to get started.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">2. Customize & Embed Our Submission Form</h3>
                <p className="text-gray-600">
                  Add your logo and match your brand colors. Then add our Live Music Submission form to your website with a simple embed code.
                  Artists can submit their information directly through this form.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">3. Review Submissions</h3>
                <p className="text-gray-600">
                  Access all artist submissions in an organized dashboard. Review details, listen to music samples, and decide which artists to book.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">4. Earn Through Our Affiliate Program</h3>
                <p className="text-gray-600">
                  We automatically follow up with artists who submit to your venue. When they join TrueFans CONNECT™, you earn 2.5% of all donations they receive. Plus, earn 2.5% from artists they refer too!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Your Venue</h2>
            <p className="text-gray-600 mb-6 text-center">
              Get started for FREE and receive your custom submission form
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Venue Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Venue Capacity
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Music Genres (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Rock', 'Pop', 'Jazz', 'Blues', 'Country', 'Electronic', 'Hip Hop', 'Other'].map((genre) => (
                      <div key={genre} className="flex items-center">
                        <input
                          type="checkbox"
                          id={genre}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={genre} className="ml-2 text-sm text-gray-700">
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Get Your Free Submission Form'}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for registering {venueName}. Your submission form is ready to be customized and embedded on your website.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setShowCustomizationModal(true)}
                    className="w-full btn btn-outline py-3 flex items-center justify-center"
                  >
                    <FiSliders className="mr-2" /> Customize Form
                  </button>
                  <button
                    onClick={() => setShowCodeModal(true)}
                    className="w-full btn btn-primary py-3 flex items-center justify-center"
                  >
                    <FiCode className="mr-2" /> Get Embed Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our 2-Tier Affiliate Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Earn commissions from artists who join TrueFans CONNECT™ through your venue's submission form.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Tier 1: Direct Submissions</h3>
              <p className="text-gray-700 mb-4">
                Earn 2.5% commission on all donations received by artists who submit to your venue and join TrueFans CONNECT™.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Example:</span>
                  <span className="font-semibold">$25 monthly commission per artist</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Based on an artist receiving $1,000 in monthly donations
                </p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Tier 2: Artist Referrals</h3>
              <p className="text-gray-700 mb-4">
                Earn an additional 2.5% commission when your referred artists refer other musicians to the platform.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Example:</span>
                  <span className="font-semibold">$25 monthly commission per second-tier artist</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Based on a second-tier artist receiving $1,000 in monthly donations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Earnings Calculator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
            See how much you could earn through our affiliate program based on your venue's shows.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Estimate Your Earnings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Attendees Per Show
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={showAttendees}
                    onChange={(e) => setShowAttendees(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>10</span>
                    <span>{showAttendees}</span>
                    <span>500</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentage of Attendees Who Donate ({donationRate}%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={donationRate}
                    onChange={(e) => setDonationRate(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>10%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Donation Amount (${avgDonation})
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={avgDonation}
                    onChange={(e) => setAvgDonation(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$5</span>
                    <span>$20</span>
                    <span>$50</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Artists You Refer ({referredArtists})
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={referredArtists}
                    onChange={(e) => setReferredArtists(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Second-Tier Artists ({secondTierArtists})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={secondTierArtists}
                    onChange={(e) => setSecondTierArtists(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-center">Potential Monthly Earnings</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Per Show Earnings:</span>
                    <span className="font-semibold">${earnings.directEarningsPerShow.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {showAttendees} attendees, {donationRate}% donation rate, and ${avgDonation} average donation
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">From Referred Artists:</span>
                    <span className="font-semibold">${earnings.referredArtistsEarnings.toFixed(2)}/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {referredArtists} artists performing 4 shows per month
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">From Second-Tier Artists:</span>
                    <span className="font-semibold">${earnings.secondTierEarnings.toFixed(2)}/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {secondTierArtists} second-tier artists performing 4 shows per month
                  </p>
                </div>
                
                <div className="bg-primary-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-primary-800">Total Monthly Earnings:</span>
                    <span className="text-2xl font-bold text-primary-800">${earnings.totalMonthly.toFixed(2)}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  These estimates are based on the parameters you've set and assume each artist performs 4 shows per month.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to start earning passive income from the artists who perform at your venue?
            </p>
            <a href="#venue-signup" className="btn btn-primary px-8 py-3">
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white rounded-3xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Booking Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join TrueFans CONNECT™ today as a venue partner and get your FREE submission form.
          </p>
          <a href="#venue-signup" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Embed Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Your Embed Code</h3>
            <p className="text-gray-600 mb-4">
              Copy and paste this code into your website where you want the submission form to appear:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm">
                {`<iframe src="https://truefans-connect.vercel.app/embed/submission-form/${formCode}${logoUrl ? `?logo=${encodeURIComponent(logoUrl)}` : ''}${primaryColor !== '#0ea5e9' ? `${logoUrl ? '&' : '?'}color=${encodeURIComponent(primaryColor.replace('#', ''))}` : ''}" width="100%" height="600" frameborder="0"></iframe>`}
              </code>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowCodeModal(false)}
                className="btn btn-outline"
              >
                Close
              </button>
              <button
                onClick={copyEmbedCode}
                className="btn btn-primary flex items-center"
              >
                <FiCode className="mr-2" /> Copy Code
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Form Customization Modal */}
      {showCustomizationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Customize Your Form</h3>
            <p className="text-gray-600 mb-6">
              Personalize your submission form to match your venue's branding.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden"
                    style={{ border: '1px dashed #ccc' }}
                  >
                    {logoUrl ? (
                      <img src={logoUrl} alt="Venue logo" className="max-w-full max-h-full object-contain" />
                    ) : (
                      <FiImage className="text-gray-400" size={24} />
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleLogoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="btn btn-outline text-sm py-2"
                    >
                      {logoUrl ? 'Change Logo' : 'Upload Logo'}
                    </button>
                    {logoUrl && (
                      <button
                        type="button"
                        onClick={() => setLogoUrl('')}
                        className="btn btn-text text-sm py-2 ml-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: Square logo, at least 200x200 pixels
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-10 h-10 rounded-lg cursor-pointer"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 text-sm w-24"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  This color will be used for buttons, accents, and highlights
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Form Preview</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-4">
                    {logoUrl && (
                      <img src={logoUrl} alt="Venue logo" className="h-12 object-contain" />
                    )}
                  </div>
                  <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
                  <div className="space-y-4">
                    <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                    <div 
                      className="h-10 rounded-lg w-full flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Submit Application
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowCustomizationModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowCustomizationModal(false)
                  setShowCodeModal(true)
                }}
                className="btn btn-primary"
              >
                Save & Get Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Venues
