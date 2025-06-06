import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore()
  const location = useLocation()

  // If still loading auth state, show nothing (or could add a loading spinner)
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // If trying to access admin route but not an admin
  if (location.pathname === '/admin') {
    // For demo purposes, allow access to admin portal
    // In a real app, you would check if the user is an admin
    // For example: if (!user.is_admin) { ... }
    return <Outlet />
  }

  // User is authenticated, render the protected route
  return <Outlet />
}

export default ProtectedRoute
