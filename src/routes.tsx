import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminPortal from './pages/AdminPortal'
import BrandKitShowcase from './components/BrandKitShowcase'
import HomePage from './pages/HomePage'
import Discover from './pages/Discover'
import HowItWorks from './pages/HowItWorks'
import FanHowItWorks from './pages/FanHowItWorks'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MusicianProfile from './pages/MusicianProfile'
import Signup from './pages/Signup'
import AffiliateProgram from './pages/AffiliateProgram'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ManageShows from './pages/ManageShows'
import Settings from './pages/Settings'
import Venues from './pages/Venues'
import EmbeddedSubmissionForm from './pages/EmbeddedSubmissionForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // Public routes
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/brand-kit',
        element: <BrandKitShowcase />
      },
      {
        path: '/discover',
        element: <Discover />
      },
      {
        path: '/how-it-works',
        element: <HowItWorks />
      },
      {
        path: '/fan-how-it-works',
        element: <FanHowItWorks />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/musician/:id',
        element: <MusicianProfile />
      },
      {
        path: '/affiliate-program',
        element: <AffiliateProgram />
      },
      {
        path: '/venues',
        element: <Venues />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      
      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/admin',
            element: <AdminPortal />
          },
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/manage-shows',
            element: <ManageShows />
          },
          {
            path: '/settings',
            element: <Settings />
          }
        ]
      }
    ]
  },
  // Embedded form route (outside of MainLayout)
  {
    path: '/embed/submission-form/:venueId',
    element: <EmbeddedSubmissionForm />
  }
])

export default router
