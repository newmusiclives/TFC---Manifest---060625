import { useState } from 'react'
import { FiCopy } from 'react-icons/fi'

const BrandKitShowcase = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label)
      setTimeout(() => setCopiedText(null), 2000)
    })
  }

  // Brand colors
  const colors = [
    { name: 'Primary', shades: [
      { name: '50', hex: '#f0f9ff', var: '--color-primary-50' },
      { name: '100', hex: '#e0f2fe', var: '--color-primary-100' },
      { name: '200', hex: '#bae6fd', var: '--color-primary-200' },
      { name: '300', hex: '#7dd3fc', var: '--color-primary-300' },
      { name: '400', hex: '#38bdf8', var: '--color-primary-400' },
      { name: '500', hex: '#0ea5e9', var: '--color-primary-500' },
      { name: '600', hex: '#0284c7', var: '--color-primary-600' },
      { name: '700', hex: '#0369a1', var: '--color-primary-700' },
      { name: '800', hex: '#075985', var: '--color-primary-800' },
      { name: '900', hex: '#0c4a6e', var: '--color-primary-900' },
    ]},
    { name: 'Secondary', shades: [
      { name: '50', hex: '#fdf2f8', var: '--color-secondary-50' },
      { name: '100', hex: '#fce7f3', var: '--color-secondary-100' },
      { name: '200', hex: '#fbcfe8', var: '--color-secondary-200' },
      { name: '300', hex: '#f9a8d4', var: '--color-secondary-300' },
      { name: '400', hex: '#f472b6', var: '--color-secondary-400' },
      { name: '500', hex: '#ec4899', var: '--color-secondary-500' },
      { name: '600', hex: '#db2777', var: '--color-secondary-600' },
      { name: '700', hex: '#be185d', var: '--color-secondary-700' },
      { name: '800', hex: '#9d174d', var: '--color-secondary-800' },
      { name: '900', hex: '#831843', var: '--color-secondary-900' },
    ]},
    { name: 'Accent', shades: [
      { name: '50', hex: '#f5f3ff', var: '--color-accent-50' },
      { name: '100', hex: '#ede9fe', var: '--color-accent-100' },
      { name: '200', hex: '#ddd6fe', var: '--color-accent-200' },
      { name: '300', hex: '#c4b5fd', var: '--color-accent-300' },
      { name: '400', hex: '#a78bfa', var: '--color-accent-400' },
      { name: '500', hex: '#8b5cf6', var: '--color-accent-500' },
      { name: '600', hex: '#7c3aed', var: '--color-accent-600' },
      { name: '700', hex: '#6d28d9', var: '--color-accent-700' },
      { name: '800', hex: '#5b21b6', var: '--color-accent-800' },
      { name: '900', hex: '#4c1d95', var: '--color-accent-900' },
    ]},
  ]

  // Typography
  const typography = [
    { name: 'Heading 1', class: 'text-4xl font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Heading 2', class: 'text-3xl font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Heading 3', class: 'text-2xl font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Heading 4', class: 'text-xl font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Heading 5', class: 'text-lg font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Heading 6', class: 'text-base font-bold', fontFamily: 'Montserrat', weight: '700' },
    { name: 'Body', class: 'text-base', fontFamily: 'Inter', weight: '400' },
    { name: 'Body Small', class: 'text-sm', fontFamily: 'Inter', weight: '400' },
    { name: 'Caption', class: 'text-xs', fontFamily: 'Inter', weight: '400' },
  ]

  // Components
  const components = [
    { name: 'Primary Button', class: 'btn btn-primary', example: 'Join Now' },
    { name: 'Secondary Button', class: 'btn btn-secondary', example: 'Learn More' },
    { name: 'Accent Button', class: 'btn btn-accent', example: 'Get Started' },
    { name: 'Outline Button', class: 'btn btn-outline', example: 'Cancel' },
    { name: 'Card', class: 'card p-6', example: 'Card Content' },
  ]

  // Images
  const images = [
    { 
      name: 'Hero Image', 
      url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      description: 'Concert crowd with hands in the air'
    },
    { 
      name: 'Artist Profile', 
      url: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
      description: 'Female musician with guitar'
    },
    { 
      name: 'Band Image', 
      url: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg',
      description: 'Rock band performing on stage'
    },
    { 
      name: 'DJ Image', 
      url: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
      description: 'DJ performing at a concert'
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Brand Colors</h2>
        <div className="space-y-8">
          {colors.map((colorGroup) => (
            <div key={colorGroup.name}>
              <h3 className="text-lg font-bold mb-4">{colorGroup.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colorGroup.shades.map((shade) => (
                  <div 
                    key={shade.name} 
                    className="rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  >
                    <div 
                      className="h-20 w-full" 
                      style={{ backgroundColor: shade.hex }}
                    ></div>
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{colorGroup.name}-{shade.name}</span>
                        <button 
                          onClick={() => copyToClipboard(shade.hex, `${colorGroup.name}-${shade.name}`)}
                          className="text-gray-500 hover:text-gray-700"
                          aria-label={`Copy ${shade.hex}`}
                        >
                          <FiCopy size={16} />
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">{shade.hex}</div>
                      <div className="text-xs text-gray-400 mt-1">{shade.var}</div>
                      {copiedText === `${colorGroup.name}-${shade.name}` && (
                        <div className="text-xs text-green-600 mt-1">Copied!</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        <div className="space-y-6">
          {typography.map((type) => (
            <div key={type.name} className="flex flex-col md:flex-row md:items-center p-4 border border-gray-200 rounded-lg">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <span className="font-medium">{type.name}</span>
                <div className="text-xs text-gray-500 mt-1">
                  {type.fontFamily}, {type.weight}
                </div>
              </div>
              <div className="md:w-2/4 mb-2 md:mb-0">
                <div className={type.class}>
                  {type.name === 'Body' || type.name === 'Body Small' || type.name === 'Caption' 
                    ? 'The quick brown fox jumps over the lazy dog.' 
                    : type.name}
                </div>
              </div>
              <div className="md:w-1/4 text-right">
                <button 
                  onClick={() => copyToClipboard(type.class, type.name)}
                  className="text-primary-600 hover:text-primary-700 text-sm flex items-center justify-end ml-auto"
                >
                  <FiCopy size={14} className="mr-1" />
                  <span>{copiedText === type.name ? 'Copied!' : 'Copy class'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component) => (
            <div key={component.name} className="p-6 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">{component.name}</h3>
                <button 
                  onClick={() => copyToClipboard(component.class, component.name)}
                  className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                >
                  <FiCopy size={14} className="mr-1" />
                  <span>{copiedText === component.name ? 'Copied!' : 'Copy class'}</span>
                </button>
              </div>
              <div className="mb-4">
                {component.name.includes('Button') ? (
                  <button className={component.class}>{component.example}</button>
                ) : (
                  <div className={component.class}>{component.example}</div>
                )}
              </div>
              <div className="text-sm text-gray-500">
                <code>{component.class}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Brand Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image) => (
            <div key={image.name} className="border border-gray-200 rounded-lg overflow-hidden">
              <img 
                src={image.url} 
                alt={image.description} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-1">{image.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{image.description}</p>
                <button 
                  onClick={() => copyToClipboard(image.url, image.name)}
                  className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                >
                  <FiCopy size={14} className="mr-1" />
                  <span>{copiedText === image.name ? 'Copied!' : 'Copy URL'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandKitShowcase
