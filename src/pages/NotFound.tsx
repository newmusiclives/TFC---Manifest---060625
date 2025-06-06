import { Link } from 'react-router-dom'
import { FiHome, FiSearch } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/"
          className="btn-primary flex items-center justify-center"
        >
          <FiHome className="mr-2" />
          Return Home
        </Link>
        <Link
          to="/discover"
          className="btn-outline flex items-center justify-center"
        >
          <FiSearch className="mr-2" />
          Discover Musicians
        </Link>
      </div>
    </div>
  )
}

export default NotFound
