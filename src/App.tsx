import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { supabase } from './lib/supabase'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import HowItWorks from './pages/HowItWorks'
import AffiliateProgram from './pages/AffiliateProgram'
import MusicianProfile from './pages/MusicianProfile'
import UploadMusic from './pages/UploadMusic'
import ManageShows from './pages/ManageShows'
import Settings from './pages/Settings'
import AdminPortal from './pages/AdminPortal'
import NotFound from './pages/NotFound'

function App() {
  const { setUser, clearUser } = useAuthStore()

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        // Convert Supabase User to our app's User type
        const appUser = {
          id: session.user.id,
          email: session.user.email || '',
          user_metadata: session.user.user_metadata
        }
        setUser(appUser)
      } else {
        clearUser()
      }
    }
    
    checkSession()
    
    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Convert Supabase User to our app's User type
          const appUser = {
            id: session.user.id,
            email: session.user.email || '',
            user_metadata: session.user.user_metadata
          }
          setUser(appUser)
        } else if (event === 'SIGNED_OUT') {
          clearUser()
        }
      }
    )
    
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe()
      }
    }
  }, [setUser, clearUser])

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/musician/:id" element={<MusicianProfile />} />
            <Route path="/upload" element={<UploadMusic />} />
            <Route path="/shows" element={<ManageShows />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
