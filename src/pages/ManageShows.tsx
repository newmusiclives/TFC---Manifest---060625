import React from 'react'
import { FiCalendar, FiMapPin, FiClock, FiDollarSign, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'

const ManageShows = () => {
  // Mock data for shows
  const shows = [
    {
      id: '1',
      title: 'Summer Acoustic Night',
      venue: 'The Blue Note',
      location: 'Portland, OR',
      date: '2023-07-15',
      time: '8:00 PM',
      ticketPrice: 15,
      description: 'An intimate acoustic performance featuring original songs and select covers.'
    },
    {
      id: '2',
      title: 'Downtown Music Festival',
      venue: 'Riverfront Park',
      location: 'Portland, OR',
      date: '2023-08-05',
      time: '4:00 PM',
      ticketPrice: 25,
      description: 'Performing as part of the annual downtown music festival alongside other local artists.'
    },
    {
      id: '3',
      title: 'Coffee House Sessions',
      venue: 'Brew & Bean',
      location: 'Seattle, WA',
      date: '2023-08-20',
      time: '7:00 PM',
      ticketPrice: 10,
      description: 'A cozy evening of music and conversation in a local coffee house setting.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Manage Shows</h1>
        <button className="btn btn-primary flex items-center">
          <FiPlus className="mr-2" />
          Add New Show
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Upcoming Shows</h2>
        
        {shows.length === 0 ? (
          <div className="text-center py-8">
            <FiCalendar className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500 dark:text-gray-400">You don't have any upcoming shows scheduled.</p>
            <button className="btn btn-primary mt-4">Schedule Your First Show</button>
          </div>
        ) : (
          <div className="space-y-4">
            {shows.map((show) => (
              <div key={show.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{show.title}</h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FiMapPin className="mr-2" />
                        <span>{show.venue}, {show.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FiCalendar className="mr-2" />
                        <span>{new Date(show.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FiClock className="mr-2" />
                        <span>{show.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FiDollarSign className="mr-2" />
                        <span>${show.ticketPrice}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{show.description}</p>
                  </div>
                  
                  <div className="flex mt-4 md:mt-0 space-x-2">
                    <button className="btn btn-outline flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                    <button className="btn btn-outline text-red-500 border-red-500 hover:bg-red-50 flex items-center">
                      <FiTrash2 className="mr-1" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Past Shows</h2>
        
        <div className="text-center py-8">
          <FiCalendar className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 dark:text-gray-400">You don't have any past shows to display.</p>
        </div>
      </div>
    </div>
  )
}

export default ManageShows
