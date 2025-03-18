import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Code, Users, Rocket, Brain, Github, ExternalLink } from 'lucide-react';
import './components/supercoolbutton.css';  // Add this import at the top with other imports
import Background from './components/Background';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import Communities from './pages/Communities';  // Add this import
import PastOCs from './pages/PastOCs';  // Add this import
import Startups from './pages/Startups';  // Add this import
import { TwitterTweetEmbed} from 'react-twitter-embed';

import eventsData from './lists/events.json';
import projects from './lists/projects.json';

const events = [...eventsData]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white">
            <Background />
            <Navbar />
            <Hero />
            
            {/* Events Preview - Moved up */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Events @ Blocsoc</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {events.slice(0,3).map((event, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <div className="text-blue-400 mb-2">{event.date}</div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Link 
                    to="/events"
                    className="inline-flex items-center px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition"
                  >
                    View All Events
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Vision Cards */}
            <section className="relative py-20 px-4 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/90 before:via-blue-950/20 before:to-transparent before:-z-10">
              <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">Why Blocsoc?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: Code, title: "Learn", desc: "Get your first steps in web3 correctly with us" },
                    { icon: Brain, title: "Research", desc: "Research new protocols and contribute to them" },
                    { icon: Users, title: "Build", desc: "Build along with the cracked teams" },
                    { icon: Rocket, title: "Grow", desc: "Launch your web3 career with industry exposure" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-xl backdrop-blur-md bg-blue-950/10 border border-blue-500/10 hover:border-blue-500/30 transition group">
                      <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Background noise texture */}
              <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] pointer-events-none -z-20"></div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.slice(0,4).map((project, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.github && (
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Add this button container */}
                <div className="mt-12 text-center">
                  <Link 
                    to="/projects"
                    className="inline-flex items-center px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition"
                  >
                    View All Projects
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Twitter Feed Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Follow Us on Twitter</h2>
                  <p className="text-xl text-gray-400">Stay updated with our latest events and projects</p>
                </div>
                
                <div className="instagram-embed rounded-2xl p-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://github.com/blocsoc-iitd.png"
                      alt="BlocSoc IITD"
                      className="w-16 h-16 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h3 className="instagram-header text-2xl font-bold mb-1">BlocSoc IITD</h3>
                      <a 
                        href="https://x.com/0xblocsoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        @0xblocsoc
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex justify-center w-full">
                    {/* @todo fix this */}
                       <TwitterTweetEmbed tweetId={'1889729121212637564'}/>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a
                      href="https://x.com/0xblocsoc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shiny-cta inline-block"
                    >
                      <span className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>
                        Follow us on Twitter
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* YouTube Channel Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">IIT Blockchain review</h2>
                  <p className="text-xl text-gray-400">Access latest blogs on web3</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Featured Video Embed */}
                  <div className="aspect-video w-full">
                  {/* @todo fix this */}
                    <img 
                        src="./iframes/substack.png" 
                        alt="substack Feed"
                        className="w-full object-fit rounded-xl"
                      />
                  </div>

                  {/* Channel Info */}
                  <div className="flex flex-col justify-center p-6 backdrop-blur-sm bg-blue-950/10 rounded-xl border border-blue-500/10">
                    <h3 className="text-2xl font-bold mb-4">IITD Blockchain review</h3>
                    <p className="text-gray-400 mb-6">
                      Read our latest articles on ZKVMs, Cryptography, Consensus, DeFi and more.
                    </p>
                    <a
                      href="https://substack.com/@iitblockchainreview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-800 transition rounded-full text-white w-fit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-substack" viewBox="0 0 16 16">
                        <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
                      </svg>
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-b via-blue-950/20">
              <div className="max-w-4xl mx-auto text-center backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-6">Ready to Join Blocsoc?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Be part of India's Best Blockchain Community and learn from the best.
              </p>
              <a 
                href="https://linktr.ee/blocsoc_iitd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Get Involved
              </a>
              </div>
            </section>

            <Footer />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/past-ocs" element={<PastOCs />} />
        <Route path='/startups' element={<Startups />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;