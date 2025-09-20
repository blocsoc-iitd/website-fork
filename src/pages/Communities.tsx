import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Youtube, Users, BookOpen, Brain, ExternalLink } from 'lucide-react';

import communities from '../lists/communities.json';

export default function Communities() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Communities</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our diverse learning communities and initiatives where we build, learn, and grow together.
          </p>
        </div>
      </section>

      {/* Featured Community - Spark Bootcamp */}
      <section className="py-16 px-4 bg-linear-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
                <Youtube className="w-4 h-4 mr-2" />
                Featured Series
              </div>
              <h2 className="text-4xl font-bold">Research Groups</h2>
              <p className="text-gray-400 text-lg">
              A quintessential researcher role.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cryptography", "Concensus", "Game Theory", "DeFi"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href="https://chat.whatsapp.com/H7juir9JbiY2uwtaPvtAde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" style={{marginRight: "0.5rem"}}>
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Join the group
              </a>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-blue-950/20">
              <img 
                src="./communities/rg.avif"
                alt="Research Groups"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Communities Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition"
            >
              <div className="aspect-video">
                <img 
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-linear-to-b from-blue-950/20 to-transparent backdrop-blur-xs">
                <div className="flex items-center gap-2 mb-4">
                  {community.active ? (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Active</span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Coming Soon</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{community.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                {community.link && (
                  <a 
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
