import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { FiMail, FiLock, FiUser, FiMapPin, FiAlertCircle } from 'react-icons/fi'
import toast from 'react-hot-toast'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [userType, setUserType] = useState<'fan' | 'musician'>('fan')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })
      
      if (authError) throw authError
      
      if (authData.user) {
        // Create user profile
        const { error: profileError } = await supabase
          .from('users')
          .insert({
            id: authData.user.id,
            email,
            name,
            location: location || null,
            user_type: userType,
            account_status: 'active'
          })
        
        if (profileError) throw profileError
        
        // If user is a musician, create musician profile
        if (userType === 'musician') {
          const { error: musicianError } = await supabase
            .from('musicians')
            .insert({
              id: authData.user.id,
              stage_name: name,
              genre: ['Music'], // Default genre
              manifest_financial_account_id: `mf_${Math.random().toString(36).substring(2, 15)}`, // Mock account ID
              monthly_goal: 500 // Default monthly goal
            })
          
          if (musicianError) throw musicianError
        }
        
        toast.success('Account created successfully!')
        navigate('/dashboard')
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during registration')
      toast.error('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create Your Account
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start">
          <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className={`px-6 py-3 rounded-lg ${
              userType === 'fan'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => setUserType('fan')}
          >
            Join as Fan
          </button>
          <button
            type="button"
            className={`px-6 py-3 rounded-lg ${
              userType === 'musician'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => setUserType('musician')}
          >
            Join as Musician
          </button>
        </div>
      </div>
      
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {userType === 'musician' ? 'Artist/Band Name' : 'Full Name'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-400" />
            </div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input pl-10"
              placeholder={userType === 'musician' ? 'Your artist or band name' : 'Your name'}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input pl-10"
              placeholder="you@example.com"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMapPin className="text-gray-400" />
            </div>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input pl-10"
              placeholder="City, State"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input pl-10"
              placeholder="••••••••"
              minLength={6}
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 6 characters long
          </p>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3"
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
