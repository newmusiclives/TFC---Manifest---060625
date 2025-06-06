import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi'
import { useAuthStore } from '../stores/authStore'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { user, isMusician } = useAuthStore()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleLogout = () => {
    // In a real app, this would call the clearUser function from the auth store
    // For now, we'll just redirect to the home page
    window.location.href = '/'
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary-600">TrueFans CONNECT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-8">
            <Link to="/discover" className="text-gray-700 hover:text-primary-600 font-medium">
              Discover Artists
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium">
              How It Works
            </Link>
            <Link to="/venues" className="text-gray-700 hover:text-primary-600 font-medium">
              Venue Services
            </Link>
            <Link to="/affiliate-program" className="text-gray-700 hover:text-primary-600 font-medium">
              Affiliate Program
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center text-gray-700 hover:text-primary-600 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <FiUser className="text-primary-600" />
                  </div>
                  <span>Account</span>
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    {isMusician && isMusician() && (
                      <>
                        <Link
                          to="/upload"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Upload Music
                        </Link>
                        <Link
                          to="/shows"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Manage Shows
                        </Link>
                      </>
                    )}
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <FiLogOut className="mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary ml-4">
                  Artists Join
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none mobile-touch-target p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mobile-menu">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/discover" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover Artists
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/venues" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Venue Services
            </Link>
            <Link 
              to="/affiliate-program" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Affiliate Program
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                {isMusician && isMusician() && (
                  <>
                    <Link 
                      to="/upload" 
                      className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Upload Music
                    </Link>
                    <Link 
                      to="/shows" 
                      className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Manage Shows
                    </Link>
                  </>
                )}
                <Link 
                  to="/settings" 
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2 mobile-touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block w-full btn btn-primary btn-mobile-full text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artists Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
