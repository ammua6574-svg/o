import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, MapPin, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'College Training', path: '/college-training' },
    { name: 'Workshops & FDPs', path: '/workshops' },
    { name: 'Placements', path: '/placements' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-[#F5821F]">
              <MapPin size={28} className="fill-current" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-sans">
              <span className="text-[#0B1F3A]">Infy</span>
              <span className="text-[#F5821F]">Skill</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-medium transition-colors text-sm ${
                  location.pathname === link.path ? 'text-[#F5821F]' : 'text-[#6B7280] hover:text-[#F5821F]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-6">
            <button className="text-[#6B7280] hover:text-[#F5821F] transition-colors">
              <Search size={20} />
            </button>
            <Link to="/contact" className="bg-[#1E63E9] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#6B7280] hover:text-[#F5821F]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-[72px] bg-white border-b border-gray-100 transition-all duration-300 ease-in-out shadow-2xl overflow-y-auto ${
          isOpen ? 'opacity-100 visible h-auto pb-6' : 'opacity-0 invisible h-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-base ${
                location.pathname === link.path ? 'text-[#F5821F]' : 'text-[#6B7280]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link 
              to="/contact" 
              className="bg-[#1E63E9] text-white px-6 py-3 rounded-xl font-medium text-center w-full block shadow-md"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
