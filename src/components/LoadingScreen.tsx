import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Loading TrueFans CONNECT...
        </h2>
      </div>
    </div>
  )
}

export default LoadingScreen
