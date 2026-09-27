import { Link } from 'react-router-dom'
import { GraduationCap, Users, Briefcase, Award, ArrowRight, Play, CheckCircle2, Laptop } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-[#F3F6FB] pt-20 pb-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F5821F]"></span>
              <span className="text-sm font-semibold text-[#0B1F3A] uppercase tracking-wide">
                Industry-Ready Skills for a Brighter Tomorrow
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1F3A] leading-tight mb-6 tracking-tight font-sans">
              Learn. Build. <span className="text-[#F5821F]">Get Placed.</span>
            </h1>
            
            {/* Supporting Line */}
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed max-w-xl">
              InfySkill empowers BTech, Degree & MCA students with industry-relevant skills, hands-on training, and real placement opportunities.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link to="/contact" className="bg-[#1E63E9] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 text-lg">
                Explore Courses <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white text-[#0B1F3A] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border border-gray-200 flex items-center gap-2 text-lg">
                <Play size={20} className="text-[#F5821F]" /> Talk to Our Team
              </Link>
            </div>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Laptop, text: "Live Projects" },
                { icon: Users, text: "Expert Trainers" },
                { icon: Briefcase, text: "Placement Support" },
                { icon: Award, text: "Industry Certifications" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-[#1A1A1A]">
                  <CheckCircle2 size={16} className="text-[#2E9E5B]" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content / Images */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            {/* Main Image placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border-8 border-white aspect-[4/5] lg:aspect-square z-10">
              <img 
                src="/images/classroom_training.jpg" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Handwritten annotation */}
            <div className="absolute -top-6 -right-6 lg:-right-12 z-20 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl transform rotate-6 border border-gray-100">
              <p className="font-serif italic text-lg text-[#1E63E9] font-bold">Skills today,<br/>Success tomorrow!</p>
            </div>
            
            {/* Floating Stat Card */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2">
                  <div className="text-[#1E63E9] flex justify-center mb-1"><Users size={24} /></div>
                  <div className="font-bold text-[#0B1F3A] text-xl">12,000+</div>
                  <div className="text-xs text-[#6B7280]">Students Trained</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-[#2E9E5B] flex justify-center mb-1"><Briefcase size={24} /></div>
                  <div className="font-bold text-[#0B1F3A] text-xl">300+</div>
                  <div className="text-xs text-[#6B7280]">Placements</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-[#F5821F] flex justify-center mb-1"><GraduationCap size={24} /></div>
                  <div className="font-bold text-[#0B1F3A] text-xl">10+</div>
                  <div className="text-xs text-[#6B7280]">Partner Colleges</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-[#1E63E9] flex justify-center mb-1"><Award size={24} /></div>
                  <div className="font-bold text-[#0B1F3A] text-xl">100+</div>
                  <div className="text-xs text-[#6B7280]">Internships</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
