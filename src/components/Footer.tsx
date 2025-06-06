import { Link } from 'react-router-dom'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const handlePricingClick = () => {
    window.scrollTo(0, 0);
  };
  
  const handleFanHowItWorksClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">TrueFans CONNECT</h3>
            <p className="text-gray-400 mb-4">
              Connecting music artists and fans directly for sustainable support and exclusive content.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* About Us - New Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white" onClick={handleScrollToTop}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white" onClick={handleScrollToTop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-white">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Music Artists</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join-as-musician" className="text-gray-400 hover:text-white">
                  Join Now
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white" onClick={handlePricingClick}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* For Fans */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Fans</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="text-gray-400 hover:text-white">
                  Discover Music Artists
                </Link>
              </li>
              <li>
                <Link to="/fan-how-it-works" className="text-gray-400 hover:text-white" onClick={handleFanHowItWorksClick}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/affiliate-program" className="text-gray-400 hover:text-white">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">TrueFans CONNECT</h3>
            <p className="text-gray-400 mb-4">
              Connecting music artists and fans directly for sustainable support and exclusive content.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mobile-touch-target">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mobile-touch-target">
                <FiInstagram size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mobile-touch-target">
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Two column grid for mobile */}
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white block py-1" onClick={handleScrollToTop}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white block py-1">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white block py-1" onClick={handleScrollToTop}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-gray-400 hover:text-white block py-1">
                    Admin Portal
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white block py-1">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white block py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-white block py-1">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">For Music Artists</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/join-as-musician" className="text-gray-400 hover:text-white block py-1">
                    Join Now
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white block py-1" onClick={handlePricingClick}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-gray-400 hover:text-white block py-1">
                    Resources
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">For Fans</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/discover" className="text-gray-400 hover:text-white block py-1">
                    Discover Music Artists
                  </Link>
                </li>
                <li>
                  <Link to="/fan-how-it-works" className="text-gray-400 hover:text-white block py-1" onClick={handleFanHowItWorksClick}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/affiliate-program" className="text-gray-400 hover:text-white block py-1">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mt-2 text-sm md:text-base">© TrueFans CONNECT™ is a subsidiary of New Music Lives™, which is owned and operated by Lightwork Digital. © 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
