import { Mail, MapPin, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-blue-500/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://github.com/blocsoc-iitd.png" 
                alt="DevClub Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">Blosoc IITD</span>
            </div>
            <p className="text-sm">
            Since 2021, BlocSoc has been leading the research and development in blockchain tech across India.
            </p>
          </div>
          
            <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="events" className="hover:text-blue-400 transition">Events & Workshops</a></li>
              <li><a href="projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/team" className="hover:text-blue-400 transition">Our Team</a></li>
            </ul>
            </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:blockchainsoc@iitd.ac.in" className="hover:text-blue-400 transition">
                blockchainsoc[@]iitd[.]ac[.]in
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>IIT Delhi, Hauz Khas, New Delhi-110016</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/blocsoc.eth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/0xblocsoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/blockchain-society-iit-delhi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/blocsoc-iitd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t borde</svg>r-blue-500/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Blocsoc IITD. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Made with ❤️ by DevClub IITD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
