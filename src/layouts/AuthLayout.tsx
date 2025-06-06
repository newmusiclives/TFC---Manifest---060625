import { Outlet, Link } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-500 to-secondary-600">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold text-white">TrueFans CONNECT</h1>
              <p className="text-white/80 mt-2">Support the music you love, directly.</p>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
