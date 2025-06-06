import React, { useState } from 'react'
import { FiUser, FiDollarSign, FiLock, FiGlobe, FiBell, FiCreditCard, FiTrash2 } from 'react-icons/fi'
import { useAuthStore } from '../stores/authStore'

const Settings = () => {
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState('profile')
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Account Settings</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'profile' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiUser className="mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'payment' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiDollarSign className="mr-3" />
                  Payment Settings
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'security' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiLock className="mr-3" />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'notifications' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiBell className="mr-3" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'billing' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiCreditCard className="mr-3" />
                  Billing
                </button>
                <button
                  onClick={() => setActiveTab('account')}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                    activeTab === 'account' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiTrash2 className="mr-3" />
                  Account
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input"
                      defaultValue={user?.user_metadata?.name || ''}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input"
                      defaultValue={user?.email || ''}
                      disabled
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Your email address is used for login and cannot be changed.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="input"
                      placeholder="Tell your supporters about yourself..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="input"
                      placeholder="e.g., Portland, OR"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Website
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                        <FiGlobe />
                      </span>
                      <input
                        type="text"
                        id="website"
                        className="input rounded-l-none"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              )}
              
              {activeTab === 'payment' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Payment Settings</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Configure how you receive payments from your supporters.
                  </p>
                  
                  {/* Payment method content would go here */}
                  <div className="text-center py-8">
                    <FiDollarSign className="mx-auto text-gray-400 h-12 w-12 mb-4" />
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Payment settings coming soon
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We're working on integrating payment processing capabilities.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    
                    <div className="mb-4">
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        className="input"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        className="input"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="input"
                      />
                    </div>
                    
                    <button className="btn btn-primary">Update Password</button>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <button className="btn btn-outline">Enable 2FA</button>
                  </div>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email-new-supporter"
                          name="email-new-supporter"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-new-supporter" className="font-medium text-gray-700 dark:text-gray-300">
                          New supporter notifications
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Get notified when someone becomes your supporter.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email-donation"
                          name="email-donation"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-donation" className="font-medium text-gray-700 dark:text-gray-300">
                          Donation notifications
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Get notified when you receive a donation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email-marketing"
                          name="email-marketing"
                          type="checkbox"
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-marketing" className="font-medium text-gray-700 dark:text-gray-300">
                          Marketing emails
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive tips, product updates, and inspiration from TrueFans CONNECT.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="btn btn-primary">Save Preferences</button>
                  </div>
                </div>
              )}
              
              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
                  
                  <div className="text-center py-8">
                    <FiCreditCard className="mx-auto text-gray-400 h-12 w-12 mb-4" />
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
                      No billing information
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      You're currently on the free plan. Upgrade to access premium features.
                    </p>
                    <button className="btn btn-primary">Upgrade Plan</button>
                  </div>
                </div>
              )}
              
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Account Management</h2>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-6">
                    <h3 className="text-lg font-medium text-red-800 dark:text-red-400 mb-2">
                      Danger Zone
                    </h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="btn btn-danger">Delete Account</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
