import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useAuthStore } from '../../stores/authStore'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useAuthStore()
  
  // Check if we're coming from the admin link
  const isAdminLogin = location.state?.from === '/admin'
  
  // Pre-fill admin credentials if coming from admin link
  useEffect(() => {
    if (isAdminLogin) {
      setEmail('admin@example.com')
      setPassword('password')
    }
  }, [isAdminLogin])
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      // Demo admin login - exact match for credentials
      if (email.trim() === 'admin@example.com' && password === 'password') {
        // Set mock admin user
        const mockAdminUser = {
          id: 'admin-123',
          email: 'admin@example.com',
          user_type: 'admin' as const,
          name: 'Admin User',
          created_at: new Date().toISOString(),
          last_active: new Date().toISOString(),
          account_status: 'active' as const,
          role: 'admin' // Add role property for AdminPortal check
        }
        
        // Set the user in the auth store
        setUser(mockAdminUser)
        
        toast.success('Logged in as Admin successfully!')
        
        // Short delay to ensure state is updated before navigation
        setTimeout(() => {
          navigate('/admin')
        }, 100)
        
        return
      }
      
      // Regular Supabase login for non-admin users
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      toast.success('Logged in successfully!')
      navigate('/dashboard')
    } catch (error: any) {
      setError(error.message || 'An error occurred during login')
      toast.error('Login failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }
  
  const handleDemoAdminLogin = () => {
    // Simply set the form fields with admin credentials
    setEmail('admin@example.com')
    setPassword('password')
  }
  
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {isAdminLogin ? 'Admin Login' : 'Log In to Your Account'}
      </h2>
      
      {isAdminLogin && (
        <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-lg">
          <p className="text-sm">
            <strong>Demo Admin Credentials:</strong><br />
            Email: admin@example.com<br />
            Password: password
          </p>
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start">
          <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleLogin}>
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
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-primary-600 hover:text-primary-500">
              Forgot password?
            </a>
          </div>
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
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3"
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        
        <div className="mt-4">
          <button
            type="button"
            onClick={handleDemoAdminLogin}
            className="w-full btn-secondary py-2"
          >
            Demo Admin Credentials
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:text-primary-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
