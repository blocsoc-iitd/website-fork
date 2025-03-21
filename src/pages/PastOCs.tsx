import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Linkedin } from 'lucide-react';
import pastOCs from '../lists/pastOCs.json';

export default function PastOCs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Past Overall Coordinators</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionary leaders who have shaped BlocSoc IITD through the years.
          </p>
        </div>
      </section>

      {/* OCs Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {pastOCs.map((oc, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 relative group">
                  <img 
                    src={oc.image}
                    alt={oc.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <a 
                    href={oc.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/20 transition-all duration-300 rounded-xl flex items-center justify-center"
                  >
                    <Linkedin className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{oc.name}</h3>
                  <p className="text-blue-400 mb-2">{oc.role}</p>
                  <p className="text-gray-400">
                    <span className="text-xl font-semibold">{oc.year}</span>
                    <span className="ml-2">{oc.batch}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
