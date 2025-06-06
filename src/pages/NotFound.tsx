import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link to="/" className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
