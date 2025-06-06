import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { FiUpload, FiMusic, FiImage, FiInfo, FiCheck } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'

const UploadMusic = () => {
  const { user, isMusician } = useAuthStore()
  const navigate = useNavigate()
  
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [isPublic, setIsPublic] = useState(true)
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const audioInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  
  const genres = [
    'Folk',
    'Rock',
    'Pop',
    'Electronic',
    'Hip Hop',
    'Jazz',
    'Classical',
    'Country',
    'R&B',
    'Blues',
    'Metal',
    'Punk',
    'Reggae',
    'World',
    'Other'
  ]
  
  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Check if file is an audio file
      if (!file.type.startsWith('audio/')) {
        setErrors({
          ...errors,
          audio: 'Please select a valid audio file'
        })
        return
      }
      
      // Check file size (max 20MB)
      if (file.size > 20 * 1024 * 1024) {
        setErrors({
          ...errors,
          audio: 'Audio file must be less than 20MB'
        })
        return
      }
      
      setAudioFile(file)
      setErrors({
        ...errors,
        audio: ''
      })
    }
  }
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        setErrors({
          ...errors,
          image: 'Please select a valid image file'
        })
        return
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          image: 'Image file must be less than 5MB'
        })
        return
      }
      
      setCoverImage(file)
      setErrors({
        ...errors,
        image: ''
      })
    }
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!genre) {
      newErrors.genre = 'Genre is required'
    }
    
    if (!audioFile) {
      newErrors.audio = 'Audio file is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    if (!user || !audioFile) {
      return
    }
    
    setLoading(true)
    
    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval)
            return prev
          }
          return prev + 5
        })
      }, 200)
      
      // In a real app, this would upload to Supabase Storage
      // and create a record in the songs table
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearInterval(interval)
      setUploadProgress(100)
      
      // Simulate success and redirect
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (error) {
      console.error('Error uploading song:', error)
      setErrors({
        ...errors,
        submit: 'Failed to upload song. Please try again.'
      })
      setUploadProgress(0)
    } finally {
      setLoading(false)
    }
  }
  
  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Please Log In
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You need to be logged in to upload music.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="btn-primary"
        >
          Log In
        </button>
      </div>
    )
  }
  
  if (isMusician && !isMusician()) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Music Artist Account Required
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You need a music artist account to upload music.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="btn-primary"
        >
          Go to Dashboard
        </button>
      </div>
    )
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Upload Music
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-6">
              <label htmlFor="title" className="label">
                Song Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`input ${errors.title ? 'border-red-500' : ''}`}
                placeholder="Enter song title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="genre" className="label">
                Genre *
              </label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className={`input ${errors.genre ? 'border-red-500' : ''}`}
              >
                <option value="">Select a genre</option>
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <p className="mt-1 text-sm text-red-600">{errors.genre}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input h-32"
                placeholder="Tell listeners about your song..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="label">
                  Audio File *
                </label>
                <div
                  onClick={() => audioInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    errors.audio
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="file"
                    ref={audioInputRef}
                    onChange={handleAudioChange}
                    accept="audio/*"
                    className="hidden"
                  />
                  
                  {audioFile ? (
                    <div className="flex items-center justify-center">
                      <FiMusic className="text-primary-600 dark:text-primary-400 mr-2" size={20} />
                      <span className="text-gray-800 dark:text-white font-medium truncate">
                        {audioFile.name}
                      </span>
                    </div>
                  ) : (
                    <div className="py-4">
                      <FiUpload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to upload audio file
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        MP3, WAV, FLAC (max 20MB)
                      </p>
                    </div>
                  )}
                </div>
                {errors.audio && (
                  <p className="mt-1 text-sm text-red-600">{errors.audio}</p>
                )}
              </div>
              
              <div>
                <label className="label">
                  Cover Image
                </label>
                <div
                  onClick={() => imageInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    errors.image
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="file"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  {coverImage ? (
                    <div className="flex items-center justify-center">
                      <FiImage className="text-primary-600 dark:text-primary-400 mr-2" size={20} />
                      <span className="text-gray-800 dark:text-white font-medium truncate">
                        {coverImage.name}
                      </span>
                    </div>
                  ) : (
                    <div className="py-4">
                      <FiUpload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to upload cover image
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        JPG, PNG, WEBP (max 5MB)
                      </p>
                    </div>
                  )}
                </div>
                {errors.image && (
                  <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="isPublic" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Make this song public on your profile
                </label>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <FiInfo className="text-blue-500 mr-2 flex-shrink-0" />
              <p>
                By uploading, you confirm that your music doesn't violate any copyright laws and you own all necessary rights to distribute this content.
              </p>
            </div>
            
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                {errors.submit}
              </div>
            )}
            
            {loading && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Uploading...</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {uploadProgress === 100 && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center">
                <FiCheck className="mr-2" />
                Upload complete! Redirecting to your dashboard...
              </div>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="btn btn-outline mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Upload Song'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadMusic
