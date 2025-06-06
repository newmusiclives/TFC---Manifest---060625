import { useState, useEffect } from 'react'
import { FiCheckCircle, FiMusic } from 'react-icons/fi'
import { useParams, useLocation } from 'react-router-dom'

interface EmbeddedSubmissionFormProps {
  venueId?: string
}

const EmbeddedSubmissionForm = ({ venueId: propVenueId }: EmbeddedSubmissionFormProps) => {
  const { venueId: paramVenueId } = useParams<{ venueId: string }>()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  
  const venueId = propVenueId || paramVenueId
  
  // Get customization options from URL parameters
  const logoUrl = queryParams.get('logo') || ''
  const primaryColor = queryParams.get('color') ? `#${queryParams.get('color')}` : '#0ea5e9'
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [artistName, setArtistName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [showTrueFansPromo, setShowTrueFansPromo] = useState<boolean>(false)
  
  // Apply custom styles
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style')
    styleEl.innerHTML = `
      .btn-primary, .bg-primary-100, .text-primary-600, .focus-ring-primary-500, .focus-border-primary-500 {
        --primary-color: ${primaryColor};
      }
      .btn-primary {
        background-color: var(--primary-color);
      }
      .bg-primary-100 {
        background-color: ${primaryColor}15;
      }
      .text-primary-600, .btn-primary:hover {
        color: var(--primary-color);
      }
      .focus-ring-primary-500:focus {
        box-shadow: 0 0 0 3px ${primaryColor}40;
      }
      .focus-border-primary-500:focus {
        border-color: var(--primary-color);
      }
    `
    document.head.appendChild(styleEl)
    
    return () => {
      document.head.removeChild(styleEl)
    }
  }, [primaryColor])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setShowTrueFansPromo(true)
    }, 1500)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="text-center mb-8">
        {logoUrl ? (
          <div className="mb-4">
            <img 
              src={logoUrl} 
              alt="Venue logo" 
              className="max-h-16 mx-auto object-contain"
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiMusic className="text-primary-600" size={28} style={{ color: primaryColor }} />
          </div>
        )}
        <h1 className="text-2xl font-bold mb-2">Live Music Submission Form</h1>
        <p className="text-gray-600">
          Submit your information to be considered for a live performance opportunity
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Artist/Band Name*
            </label>
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
              style={{ borderColor: `${primaryColor}40` }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
              style={{ borderColor: `${primaryColor}40` }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
              style={{ borderColor: `${primaryColor}40` }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Music Genre*
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
              style={{ borderColor: `${primaryColor}40` }}
            >
              <option value="">Select a genre</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="jazz">Jazz</option>
              <option value="blues">Blues</option>
              <option value="country">Country</option>
              <option value="electronic">Electronic</option>
              <option value="hip-hop">Hip Hop</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Music Links (SoundCloud, Spotify, YouTube, etc.)*
            </label>
            <input
              type="url"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="https://"
              required
              style={{ borderColor: `${primaryColor}40` }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Social Media Links
            </label>
            <input
              type="url"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 mb-2"
              placeholder="Instagram: https://"
              style={{ borderColor: `${primaryColor}40` }}
            />
            <input
              type="url"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Facebook: https://"
              style={{ borderColor: `${primaryColor}40` }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Performance Dates
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">From</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  style={{ borderColor: `${primaryColor}40` }}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">To</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  style={{ borderColor: `${primaryColor}40` }}
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tell us about your act and previous performance experience
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              rows={4}
              style={{ borderColor: `${primaryColor}40` }}
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
              required
              style={{ borderColor: `${primaryColor}40` }}
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to be contacted about this submission and to receive information about TrueFans CONNECT™, a platform that helps musicians monetize their fanbase.
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full btn btn-primary py-3"
            disabled={isSubmitting}
            style={{ backgroundColor: primaryColor }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCheckCircle className="text-green-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Submission Successful!</h3>
          <p className="text-gray-600 mb-6">
            Thank you, {artistName}! Your submission has been received. The venue will review your information and contact you if interested.
          </p>
          
          {showTrueFansPromo && (
            <div className="bg-primary-50 p-6 rounded-xl mt-8" style={{ backgroundColor: `${primaryColor}10` }}>
              <h3 className="text-lg font-semibold mb-2">Grow Your Music Career with TrueFans CONNECT™</h3>
              <p className="text-gray-700 mb-4">
                Join thousands of musicians who are monetizing their fanbase and building sustainable careers with TrueFans CONNECT™.
              </p>
              <ul className="text-left text-gray-700 mb-4 space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" style={{ color: primaryColor }} />
                  <span>Direct fan funding without platform fees</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" style={{ color: primaryColor }} />
                  <span>Powerful tools to engage with your audience</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" style={{ color: primaryColor }} />
                  <span>Affiliate program to earn additional income</span>
                </li>
              </ul>
              <a 
                href={`https://truefans-connect.vercel.app/signup?type=musician&ref=${venueId}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
                style={{ backgroundColor: primaryColor }}
              >
                Join TrueFans CONNECT™ Free
              </a>
            </div>
          )}
        </div>
      )}
      
      <div className="text-center text-xs text-gray-500 mt-8">
        Powered by <a href="https://truefans-connect.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary-600" style={{ color: primaryColor }}>TrueFans CONNECT™</a>
      </div>
    </div>
  )
}

export default EmbeddedSubmissionForm
