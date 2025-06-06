import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

const Dashboard = () => {
  const { user, isAdmin } = useAuthStore()
  const navigate = useNavigate()
  
  // Redirect admin users to the admin portal
  useEffect(() => {
    if (isAdmin()) {
      navigate('/admin')
    }
  }, [isAdmin, navigate])

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Welcome Back, Artist</h1>
          
          {/* Dashboard content for regular musicians */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Your Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Monthly Supporters</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Monthly Revenue</p>
                <h3 className="text-2xl font-bold">$320</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Growth</p>
                <h3 className="text-2xl font-bold">+12%</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { name: 'Alex Johnson', action: 'became a supporter', time: '2 hours ago', amount: '$10/month' },
                { name: 'Sarah Williams', action: 'increased their support', time: '1 day ago', amount: '$5 → $10/month' },
                { name: 'Michael Brown', action: 'sent a message', time: '2 days ago', amount: '' },
                { name: 'Emily Davis', action: 'became a supporter', time: '3 days ago', amount: '$5/month' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="font-medium">{activity.name} {activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  {activity.amount && (
                    <span className="text-sm font-medium text-green-600">{activity.amount}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  Create New Post
                </button>
                <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Schedule Content
                </button>
                <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Manage Supporters
                </button>
                <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Update Profile
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Tips to Grow</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-600 mr-3 flex-shrink-0">1</span>
                  <p>Post regular updates to keep your supporters engaged</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-600 mr-3 flex-shrink-0">2</span>
                  <p>Share your supporter link on social media weekly</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-600 mr-3 flex-shrink-0">3</span>
                  <p>Create exclusive content for different support tiers</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-600 mr-3 flex-shrink-0">4</span>
                  <p>Respond to messages from your supporters promptly</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
