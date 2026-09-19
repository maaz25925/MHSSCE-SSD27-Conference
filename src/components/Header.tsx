import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import mhssccelogo from './images/mhssccelogo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img
              src={mhssccelogo}
              alt="MHSSCE Logo"
              className="w-10 h-10 object-contain rounded"
            />
            <div className="hidden md:flex items-center space-x-2">
              <h1 className="text-base font-semibold text-gray-900">MHSSCE</h1>
              <span className="text-xs text-gray-600">IEEE AISmartSSD 2027</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
              About
            </button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors flex items-center space-x-1">
                <span>Event</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button 
                    onClick={() => scrollToSection('dates')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    Important Dates
                  </button>
                  <button 
                    onClick={() => scrollToSection('registration')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    Registration
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => scrollToSection('committee')} className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
              Committee
            </button>
            <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
              Speakers
            </button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors flex items-center space-x-1">
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button 
                    onClick={() => scrollToSection('mumbai')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    Explore Mumbai
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
                About
              </button>
              <div className="space-y-2">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Event</span>
                <div className="pl-2 space-y-2">
                  <button 
                    onClick={() => scrollToSection('dates')}
                    className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors"
                  >
                    Important Dates
                  </button>
                  <button 
                    onClick={() => scrollToSection('registration')}
                    className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors"
                  >
                    Registration
                  </button>
                </div>
              </div>
              <button onClick={() => scrollToSection('committee')} className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
                Committee
              </button>
              <button onClick={() => scrollToSection('speakers')} className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
                Speakers
              </button>
              <div className="space-y-2">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">More</span>
                <div className="pl-2 space-y-2">
                  <button 
                    onClick={() => scrollToSection('mumbai')}
                    className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors"
                  >
                    Explore Mumbai
                  </button>
                </div>
              </div>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-600 font-normal text-sm transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
