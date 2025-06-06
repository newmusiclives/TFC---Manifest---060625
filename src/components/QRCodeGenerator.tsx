import { useState } from 'react'
import QRCode from 'react-qr-code'
import { FiDownload, FiShare2 } from 'react-icons/fi'

interface QRCodeGeneratorProps {
  showId: string
  musicianId: string
  venueName: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  showId,
  musicianId,
  venueName
}) => {
  const [size, setSize] = useState(256)
  
  // Generate the URL that the QR code will point to
  const qrValue = `${window.location.origin}/show/${showId}?musician=${musicianId}`
  
  const handleDownload = () => {
    const svg = document.getElementById('qr-code')
    if (!svg) return
    
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
    
    const img = new Image()
    img.onload = () => {
      canvas.width = size
      canvas.height = size
      ctx.drawImage(img, 0, 0)
      
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = `truefans-qr-${showId}.png`
      downloadLink.href = pngFile
      downloadLink.click()
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `TrueFans QR Code for ${venueName}`,
          text: 'Scan this QR code to support me at my show!',
          url: qrValue
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(qrValue)
        .then(() => alert('QR code link copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err))
    }
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Show QR Code
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Display this QR code at your show so fans can easily support you.
      </p>
      
      <div className="bg-white p-4 rounded-lg inline-block mb-4">
        <QRCode
          id="qr-code"
          value={qrValue}
          size={size}
          level="H"
          fgColor="#0ea5e9"
        />
      </div>
      
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={handleDownload}
          className="btn-primary flex items-center"
        >
          <FiDownload className="mr-2" />
          Download
        </button>
        
        <button
          onClick={handleShare}
          className="btn-outline flex items-center"
        >
          <FiShare2 className="mr-2" />
          Share
        </button>
      </div>
      
      <div className="mb-4">
        <label htmlFor="size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          QR Code Size
        </label>
        <input
          type="range"
          id="size"
          min="128"
          max="512"
          step="32"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">{size}px</span>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Print this QR code and display it prominently at your merchandise table or stage.
      </p>
    </div>
  )
}

export default QRCodeGenerator
