import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-md bg-black/30 border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex flex-row items-center">
              <img 
              src="https://github.com/blocsoc-iitd.png" 
              alt="Blocsoc Logo" 
              className="h-8 w-auto"
              />
              <span className="mx-2 text-xl text-center font-bold text-white">BlocSoc IITD</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 transition">Home</Link>
            <Link to="/communities" className="text-gray-300 hover:text-blue-400 transition">Communities</Link>
            <Link to="/events" className="text-gray-300 hover:text-blue-400 transition">Events</Link>
            <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition">Projects</Link>
            <Link to="/team" className="text-gray-300 hover:text-blue-400 transition">Team</Link>
            <Link to="/past-ocs" className="text-gray-300 hover:text-blue-400 transition">Past OCs</Link>
            <Link to="https://luma.com/cj5l6pwi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">Interfaces_2025</Link>
            <div className="h-6 w-px bg-blue-500/30"></div>
            <a 
              href="https://github.com/blocsoc-iitd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
          <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-blue-400 text-lg md:text-xl">Home</Link>
          <Link to="/communities" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Communities</Link>
          <Link to="/events" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Events</Link>
          <Link to="/projects" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Projects</Link>
          <Link to="/team" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Team</Link>
          <Link to="/past-ocs" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Past OCs</Link>
          <Link to="https://zket.blocsoc.in/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Atattva Jnana</Link>
          <a 
            href="https://github.com/blocsoc-iitd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 text-gray-300 hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;