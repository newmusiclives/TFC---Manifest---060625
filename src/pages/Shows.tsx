import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { FiCalendar, FiMapPin, FiPlus, FiAlertCircle } from 'react-icons/fi'

interface Show {
  id: string;
  venue: string;
  location: string;
  date: string;
  description?: string;
  ticketLink?: string;
  isPublic: boolean;
}

const Shows = () => {
  const { user, isMusician } = useAuthStore()
  
  const [shows, setShows] = useState<Show[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Show>>({
    venue: '',
    location: '',
    date: '',
    description: '',
    ticketLink: '',
    isPublic: true
  })
  
  useEffect(() => {
    const fetchShows = async () => {
      try {
        // In a real app, this would fetch data from Supabase
        // For now, we'll use mock data
        
        // Mock shows data
        const mockShows = [
          {
            id: '1',
            venue: 'The Acoustic Room',
            location: 'Portland, OR',
            date: '2023-11-15T20:00:00',
            description: 'An intimate acoustic set featuring new songs from my upcoming album.',
            ticketLink: 'https://example.com/tickets',
            isPublic: true
          },
          {
            id: '2',
            venue: 'Mountain View Coffee',
            location: 'Seattle, WA',
            date: '2023-11-22T19:30:00',
            description: 'Cozy coffee shop performance with special guest performers.',
            ticketLink: 'https://example.com/tickets',
            isPublic: true
          },
          {
            id: '3',
            venue: 'Folk Festival',
            location: 'Eugene, OR',
            date: '2023-12-05T18:00:00',
            description: 'Performing at the annual Folk Festival alongside other local artists.',
            ticketLink: 'https://example.com/tickets',
            isPublic: true
          },
          {
            id: '4',
            venue: 'Private Event',
            location: 'Vancouver, WA',
            date: '2023-12-12T19:00:00',
            description: 'Private corporate event - not open to the public.',
            isPublic: false
          }
        ]
        
        setShows(mockShows)
      } catch (error) {
        console.error('Error fetching shows:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchShows()
  }, [])
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: checkbox.checked
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // In a real app, this would save to Supabase
      const newShow: Show = {
        id: Date.now().toString(),
        venue: formData.venue || '',
        location: formData.location || '',
        date: formData.date || '',
        description: formData.description,
        ticketLink: formData.ticketLink,
        isPublic: formData.isPublic || false
      }
      
      setShows([...shows, newShow])
      setFormData({
        venue: '',
        location: '',
        date: '',
        description: '',
        ticketLink: '',
        isPublic: true
      })
      setShowForm(false)
    } catch (error) {
      console.error('Error adding show:', error)
    }
  }
  
  const deleteShow = async (id: string) => {
    try {
      // In a real app, this would delete from Supabase
      setShows(shows.filter(show => show.id !== id))
    } catch (error) {
      console.error('Error deleting show:', error)
    }
  }
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }
  
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    })
  }
  
  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Please Log In
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You need to be logged in to view and manage shows.
        </p>
        <Link to="/login" className="btn-primary">
          Log In
        </Link>
      </div>
    )
  }
  
  if (isMusician && !isMusician()) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Musician Account Required
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You need a musician account to manage shows.
        </p>
        <Link to="/dashboard" className="btn-primary">
          Go to Dashboard
        </Link>
      </div>
    )
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">
          Manage Shows
        </h1>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary flex items-center"
        >
          <FiPlus className="mr-2" />
          Add New Show
        </button>
      </div>
      
      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {formData.id ? 'Edit Show' : 'Add New Show'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="venue" className="label">
                  Venue Name *
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="location" className="label">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="City, State"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="date" className="label">
                  Date and Time *
                </label>
                <input
                  type="datetime-local"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="ticketLink" className="label">
                  Ticket Link
                </label>
                <input
                  type="url"
                  id="ticketLink"
                  name="ticketLink"
                  value={formData.ticketLink}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="https://example.com/tickets"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="input h-24"
                  placeholder="Provide details about your show..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPublic"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isPublic" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Make this show public on your profile
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                {formData.id ? 'Update Show' : 'Add Show'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="flex justify-end">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      ) : shows.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <FiCalendar size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            No Shows Scheduled
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You haven't added any shows yet. Click the button above to add your first show.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {shows.map((show) => (
            <div key={show.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {show.venue}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <FiMapPin className="mr-1" />
                      <span>{show.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 flex items-center">
                    <div className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg p-2 mr-3">
                      <FiCalendar size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">
                        {formatDate(show.date)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {formatTime(show.date)}
                      </div>
                    </div>
                  </div>
                </div>
                
                {!show.isPublic && (
                  <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm mb-4">
                    <FiAlertCircle className="mr-1" />
                    <span>Private event - not visible on your public profile</span>
                  </div>
                )}
                
                {show.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {show.description}
                  </p>
                )}
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    {show.ticketLink && (
                      <a
                        href={show.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Get Tickets
                      </a>
                    )}
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex space-x-3">
                    <button
                      onClick={() => {
                        setFormData(show)
                        setShowForm(true)
                      }}
                      className="btn btn-outline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteShow(show.id)}
                      className="btn btn-outline text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shows
