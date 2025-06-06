import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FiUser, FiMusic, FiMail, FiLock, FiEye, FiEyeOff, FiCheck, FiDollarSign, FiBarChart2, FiGlobe, FiCreditCard, FiHeadphones, FiUsers } from 'react-icons/fi'

const Signup = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [accountType, setAccountType] = useState<'fan' | 'musician'>('musician')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Set account type based on URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const type = params.get('type')
    if (type === 'musician') {
      setAccountType('musician')
    }
  }, [location.search])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Basic validation
    if (!email || !password || !confirmPassword || !name) {
      setError('All fields are required')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    
    try {
      setLoading(true)
      
      // In a real app, this would call Supabase to create a user
      // For demo purposes, we'll simulate a successful signup
      
      setTimeout(() => {
        // Redirect to dashboard after successful signup
        navigate('/dashboard')
      }, 1500)
      
    } catch (err) {
      console.error('Signup error:', err)
      setError('An error occurred during signup. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Music Artists Join Here</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Signup Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Artist/Band Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your artist or band name"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMusic className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your email address"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pl-10 pr-10"
                    placeholder="Create a password"
                    required
                    minLength={8}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input pl-10 pr-10"
                    placeholder="Confirm your password"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Musician Account'}
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
                <p className="text-primary-800 font-medium text-center">
                  "TrueFans CONNECT has transformed how I connect with my audience and monetize my music."
                </p>
                <p className="text-primary-600 text-center mt-2">— Sarah J., Independent Artist</p>
              </div>
              
              <div className="text-center text-sm">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
          
          {/* Benefits Summary */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Why Join TrueFans CONNECT?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiDollarSign className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Higher Earnings</h3>
                    <p className="text-primary-700">Keep 80% of all donations from your fans - one of the highest rates in the industry.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiCreditCard className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Fast Payouts</h3>
                    <p className="text-primary-700">In most cases payout as soon as the next day with no minimum threshold.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiBarChart2 className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Detailed Analytics</h3>
                    <p className="text-primary-700">Understand your audience with comprehensive data on your supporters and engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiGlobe className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Venue Connections</h3>
                    <p className="text-primary-700">Get discovered by venues looking for artists through our venue partnership program.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiHeadphones className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Music Distribution</h3>
                    <p className="text-primary-700">Share your music directly with fans and build a loyal following.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <FiUsers className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 text-lg">Community Support</h3>
                    <p className="text-primary-700">Join a network of musicians and industry professionals to grow your career.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
