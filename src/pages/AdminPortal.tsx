import { useState } from 'react'
import { FiBarChart2, FiDollarSign, FiUsers, FiPieChart, FiTrendingUp, FiCalendar, FiSettings, FiImage, FiLink, FiX } from 'react-icons/fi'
import { Line, Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import BrandKitShowcase from '../components/BrandKitShowcase'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showManifestSettings, setShowManifestSettings] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  const { login, user } = useAuthStore()

  // Sample data for charts
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const revenueData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [1200, 1350, 1400, 1650, 1800, 2100, 2300, 2500, 2700, 2900, 3100, 3300],
        borderColor: 'rgb(2, 132, 199)',
        backgroundColor: 'rgba(2, 132, 199, 0.5)',
        tension: 0.3,
      },
    ],
  }
  
  const supportersData = {
    labels: months,
    datasets: [
      {
        label: 'New Supporters',
        data: [25, 30, 28, 32, 36, 40, 45, 52, 58, 62, 68, 72],
        backgroundColor: 'rgba(219, 39, 119, 0.7)',
      },
    ],
  }
  
  const donationTiersData = {
    labels: ['$5', '$10', '$20', '$50'],
    datasets: [
      {
        label: 'Supporters by Donation Tier',
        data: [120, 80, 40, 20],
        backgroundColor: [
          'rgba(124, 58, 237, 0.7)',
          'rgba(219, 39, 119, 0.7)',
          'rgba(2, 132, 199, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const handleDemoLogin = async () => {
    setIsLoggingIn(true)
    setLoginError('')
    
    try {
      // Use the login function from auth store with the correct credentials
      // Note: In the authStore.ts, the password is 'pass123' but here it was using 'password'
      const { error } = await login('admin@example.com', 'pass123')
      
      if (error) {
        console.error('Error logging in with demo credentials:', error)
        setLoginError('Login failed: ' + error.message)
      } else {
        // Navigate to admin portal after successful login
        navigate('/admin')
      }
    } catch (error: any) {
      console.error('Unexpected error during login:', error)
      setLoginError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Admin Portal</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'dashboard' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiBarChart2 className="mr-3" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('finances')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'finances' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiDollarSign className="mr-3" />
                  Finances
                </button>
                <button
                  onClick={() => setActiveTab('supporters')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'supporters' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiUsers className="mr-3" />
                  Supporters
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'analytics' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiPieChart className="mr-3" />
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('brand')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'brand' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiImage className="mr-3" />
                  Brand Kit
                </button>
                <button
                  onClick={() => setActiveTab('integrations')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'integrations' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiLink className="mr-3" />
                  Integrations
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'settings' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FiSettings className="mr-3" />
                  Settings
                </button>
              </nav>
              
              {/* Demo Login Button - Only show if not logged in */}
              {!user && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={handleDemoLogin}
                    disabled={isLoggingIn}
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    {isLoggingIn ? 'Logging in...' : 'Use Demo Admin Credentials'}
                  </button>
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Email: admin@example.com<br />
                    Password: pass123
                  </p>
                  {loginError && (
                    <p className="mt-4 text-xs text-red-500 text-center">
                      {loginError}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-8">
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                        <FiDollarSign size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Monthly Revenue</p>
                        <h3 className="text-2xl font-bold">$3,300</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-green-600 flex items-center">
                      <FiTrendingUp className="mr-1" />
                      <span>+12% from last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mr-4">
                        <FiUsers size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Supporters</p>
                        <h3 className="text-2xl font-bold">546</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-green-600 flex items-center">
                      <FiTrendingUp className="mr-1" />
                      <span>+8% from last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-accent-100 text-accent-600 mr-4">
                        <FiCalendar size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg. Retention</p>
                        <h3 className="text-2xl font-bold">8.3 months</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-green-600 flex items-center">
                      <FiTrendingUp className="mr-1" />
                      <span>+0.5 from last quarter</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                        <FiDollarSign size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg. Donation</p>
                        <h3 className="text-2xl font-bold">$12.40</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-green-600 flex items-center">
                      <FiTrendingUp className="mr-1" />
                      <span>+$0.80 from last month</span>
                    </div>
                  </div>
                </div>
                
                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">Revenue Growth</h3>
                    <div className="h-80">
                      <Line 
                        data={revenueData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                          },
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">New Supporters</h3>
                    <div className="h-80">
                      <Bar 
                        data={supportersData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                          },
                        }} 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
                    <h3 className="text-lg font-bold mb-4">Donation Tiers</h3>
                    <div className="h-64">
                      <Pie 
                        data={donationTiersData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'right',
                            },
                          },
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
                    <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Supporter
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { name: 'Alex Johnson', amount: '$20.00', date: 'Nov 15, 2023', status: 'Completed' },
                            { name: 'Sarah Williams', amount: '$10.00', date: 'Nov 14, 2023', status: 'Completed' },
                            { name: 'Michael Brown', amount: '$50.00', date: 'Nov 12, 2023', status: 'Completed' },
                            { name: 'Emily Davis', amount: '$5.00', date: 'Nov 10, 2023', status: 'Completed' },
                            { name: 'David Wilson', amount: '$20.00', date: 'Nov 8, 2023', status: 'Completed' },
                          ].map((transaction, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{transaction.amount}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{transaction.date}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {transaction.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'finances' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Financial Overview</h1>
                
                {/* Financial Summary */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4">Summary</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Total Revenue (YTD)</p>
                      <h3 className="text-2xl font-bold">$24,350</h3>
                      <p className="text-sm text-green-600 mt-2">+18% from last year</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Your Earnings (YTD)</p>
                      <h3 className="text-2xl font-bold">$19,480</h3>
                      <p className="text-sm text-gray-500 mt-2">80% of total revenue</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Platform Fee (YTD)</p>
                      <h3 className="text-2xl font-bold">$4,870</h3>
                      <p className="text-sm text-gray-500 mt-2">20% of total revenue</p>
                    </div>
                  </div>
                </div>
                
                {/* Revenue Chart */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4">Revenue Trends</h2>
                  <div className="h-96">
                    <Line 
                      data={revenueData} 
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          title: {
                            display: true,
                            text: 'Monthly Revenue (2023)'
                          }
                        },
                      }} 
                    />
                  </div>
                </div>
                
                {/* Recent Transactions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Recent Transactions</h2>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Supporter
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Your Earnings
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { id: 'TXN-38291', name: 'Alex Johnson', amount: '$20.00', earnings: '$16.00', date: 'Nov 15, 2023' },
                          { id: 'TXN-38290', name: 'Sarah Williams', amount: '$10.00', earnings: '$8.00', date: 'Nov 14, 2023' },
                          { id: 'TXN-38285', name: 'Michael Brown', amount: '$50.00', earnings: '$40.00', date: 'Nov 12, 2023' },
                          { id: 'TXN-38279', name: 'Emily Davis', amount: '$5.00', earnings: '$4.00', date: 'Nov 10, 2023' },
                          { id: 'TXN-38275', name: 'David Wilson', amount: '$20.00', earnings: '$16.00', date: 'Nov 8, 2023' },
                          { id: 'TXN-38268', name: 'Jessica Martinez', amount: '$10.00', earnings: '$8.00', date: 'Nov 5, 2023' },
                          { id: 'TXN-38264', name: 'Robert Taylor', amount: '$20.00', earnings: '$16.00', date: 'Nov 3, 2023' },
                          { id: 'TXN-38259', name: 'Jennifer Anderson', amount: '$50.00', earnings: '$40.00', date: 'Nov 1, 2023' },
                        ].map((transaction, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{transaction.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{transaction.amount}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-green-600">{transaction.earnings}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{transaction.date}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'brand' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Brand Kit</h1>
                <BrandKitShowcase />
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Integrations</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Manifest Financial API */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <FiDollarSign className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Manifest Financial API</h3>
                          <p className="text-green-600 text-sm">Connected</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Manage payouts, track earnings, and handle financial transactions with Manifest Financial API.
                      </p>
                      <div className="flex justify-between">
                        <button 
                          className="text-primary-600 font-medium"
                          onClick={() => setShowManifestSettings(true)}
                        >
                          Settings
                        </button>
                        <button className="text-red-600 font-medium">Disconnect</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* BandsInTown API */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <FiCalendar className="text-purple-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">BandsInTown API</h3>
                          <p className="text-gray-500 text-sm">Not connected</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Sync your tour dates and events automatically from BandsInTown to your profile.
                      </p>
                      <button className="btn btn-outline w-full">Connect</button>
                    </div>
                  </div>
                  
                  {/* Spotify API */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <FiDollarSign className="text-green-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Spotify API</h3>
                          <p className="text-gray-500 text-sm">Not connected</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Display your music, albums, and playlists directly from Spotify on your profile.
                      </p>
                      <button className="btn btn-outline w-full">Connect</button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Available Integrations</h2>
                  <p className="text-gray-600 mb-6">
                    Connect with these services to enhance your TrueFans CONNECT experience.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'SoundCloud', category: 'Music', status: 'Coming Soon' },
                      { name: 'Apple Music', category: 'Music', status: 'Coming Soon' },
                      { name: 'YouTube', category: 'Video', status: 'Coming Soon' },
                      { name: 'Instagram', category: 'Social', status: 'Coming Soon' },
                      { name: 'Mailchimp', category: 'Marketing', status: 'Coming Soon' },
                    ].map((integration, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium">{integration.name}</h3>
                          <p className="text-sm text-gray-500">{integration.category}</p>
                        </div>
                        <span className="text-sm text-gray-500">{integration.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder content for other tabs */}
            {activeTab === 'supporters' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Supporters</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p>Supporter management content will appear here.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Analytics</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p>Detailed analytics content will appear here.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Settings</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p>Account settings content will appear here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Manifest Financial API Settings Modal */}
      {showManifestSettings && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setShowManifestSettings(false)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FiDollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Manifest Financial API Settings
                    </h3>
                    <div className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">
                          API Key
                        </label>
                        <input
                          type="text"
                          name="api-key"
                          id="api-key"
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value="••••••••••••••••••••••••••••••"
                          readOnly
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="payout-method" className="block text-sm font-medium text-gray-700">
                          Default Payout Method
                        </label>
                        <select
                          id="payout-method"
                          name="payout-method"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          defaultValue="direct_deposit"
                        >
                          <option value="direct_deposit">Direct Deposit (ACH)</option>
                          <option value="paypal">PayPal</option>
                          <option value="check">Check</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="payout-threshold" className="block text-sm font-medium text-gray-700">
                          Minimum Payout Threshold
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="payout-threshold"
                            id="payout-threshold"
                            className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0.00"
                            defaultValue="50"
                            min="1"
                          />
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          You'll receive payouts when your balance exceeds this amount
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="payout-schedule" className="block text-sm font-medium text-gray-700">
                          Payout Schedule
                        </label>
                        <select
                          id="payout-schedule"
                          name="payout-schedule"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          defaultValue="weekly"
                        >
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowManifestSettings(false)}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowManifestSettings(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPortal
