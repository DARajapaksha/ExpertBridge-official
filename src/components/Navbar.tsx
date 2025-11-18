import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] rounded-lg" />
            <span className="text-[#1e3a8a]">ExpertBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/browse-experts" className="text-gray-700 hover:text-[#1e3a8a] transition-colors">
              Find Experts
            </Link>
            <Link to="/for-companies" className="text-gray-700 hover:text-[#1e3a8a] transition-colors">
              For Companies
            </Link>
            <Link to="/for-experts" className="text-gray-700 hover:text-[#1e3a8a] transition-colors">
              For Experts
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#1e3a8a] transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#1e3a8a] transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-[#1e3a8a]">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/browse-experts"
              className="block text-gray-700 hover:text-[#1e3a8a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Experts
            </Link>
            <Link
              to="/for-companies"
              className="block text-gray-700 hover:text-[#1e3a8a]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Companies
            </Link>
            <Link
              to="/for-experts"
              className="block text-gray-700 hover:text-[#1e3a8a]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Experts
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-[#1e3a8a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-[#1e3a8a]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
