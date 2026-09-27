import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0B1F3A]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] to-[#F5821F]/20 opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Skills?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Join thousands of students who are building their future with InfySkill.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#0B1F3A] px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                Enquire Now
              </Link>
              <button className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Download size={20} /> Download Brochure
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl relative z-10 hidden md:block">
               <img src="/images/computer_lab_lecture.jpg" alt="Student learning" className="rounded-2xl w-full h-auto" />
            </div>
            
            {/* Annotation */}
            <div className="absolute -top-10 right-0 z-20">
              <p className="font-serif italic text-2xl text-white transform rotate-12 drop-shadow-md">
                Your Future<br/>Starts Here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}