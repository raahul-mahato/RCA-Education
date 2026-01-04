import React, { useState } from 'react';
import { AppRoute } from './types';
import Navbar from './components/Navbar';
import CourseGrid from './components/CourseGrid';
import Footer from './components/Footer';
import AiCounselor from './components/AiCounselor';
import { NEWS_ITEMS } from './constants.tsx';

// --- Page Components ---

const Home: React.FC = () => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <section className="relative bg-rca-blue overflow-hidden pt-12 pb-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="inline-block bg-rca-orange text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Trusted by 50,000+ Students
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Your Dreams, Our <br/>
              <span className="text-rca-orange">Guidance!</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto lg:mx-0">
              Join West Bengal's top institute for SSC, Railway, WBCS, and Other Competitive Exams. Start your journey towards a government job today.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-white text-rca-blue px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                Get Started for Free
              </button>
              <button className="bg-rca-blue border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <i className="fas fa-play text-xs"></i> Watch Demo Class
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white/10">
              <img 
                src="https://picsum.photos/seed/education/800/600" 
                alt="Education" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block animate-bounce">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-rca-blue text-sm">100% Guaranteed</h4>
                  <p className="text-[10px] text-gray-500 uppercase">Quality Material</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-rca-orange/10 rounded-full blur-3xl"></div>
    </section>

    {/* News Ticker */}
    <div className="bg-rca-orange py-3 shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden flex items-center">
        <span className="bg-white text-rca-orange text-[10px] font-black px-3 py-1 rounded-sm uppercase mr-6 whitespace-nowrap shadow-sm">
          Latest News
        </span>
        <div className="flex animate-marquee whitespace-nowrap space-x-12">
          {NEWS_ITEMS.map((item) => (
            <span key={item.id} className="text-white text-sm font-bold flex items-center">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3"></span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-rca-blue mb-2">10K+</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Selections</div>
          </div>
          <div>
            <div className="text-4xl font-black text-rca-blue mb-2">50+</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Expert Faculty</div>
          </div>
          <div>
            <div className="text-4xl font-black text-rca-blue mb-2">200+</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Mock Tests</div>
          </div>
          <div>
            <div className="text-4xl font-black text-rca-blue mb-2">4.8★</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Rating</div>
          </div>
        </div>
      </div>
    </section>

    {/* Dynamic Courses Preview */}
    <CourseGrid />
  </div>
);

const MockTests: React.FC = () => (
  <div className="animate-fadeIn py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-rca-blue uppercase">Mock Test Series</h2>
        <p className="text-gray-500 mt-2">Test your knowledge with our exam-realistic patterns</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "SSC CGL Tier-1 Free Mock", category: "SSC", count: "10 Tests", price: "Free" },
          { title: "WBCS Prelims Full Series", category: "WBCS", count: "25 Tests", price: "₹499" },
          { title: "RRB NTPC CBT-1 Pack", category: "Railway", count: "15 Tests", price: "₹299" },
          { title: "KP Constable Mock Pack", category: "Police", count: "20 Tests", price: "₹199" },
          { title: "Banking Awareness Daily", category: "Banking", count: "Daily", price: "Free" },
          { title: "WBPSC Clerkship Series", category: "PSC", count: "12 Tests", price: "₹249" },
        ].map((test, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-rca-blue/10 text-rca-blue text-[10px] font-bold px-2 py-1 rounded uppercase">{test.category}</span>
              <span className={`text-sm font-bold ${test.price === 'Free' ? 'text-green-600' : 'text-rca-orange'}`}>{test.price}</span>
            </div>
            <h3 className="text-lg font-bold text-rca-blue mb-2">{test.title}</h3>
            <p className="text-gray-500 text-sm mb-6"><i className="fas fa-file-alt mr-2 text-rca-orange"></i>{test.count}</p>
            <button className="w-full bg-rca-blue text-white py-3 rounded-xl font-bold hover:bg-rca-orange transition-colors">Start Test Now</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StudyMaterial: React.FC = () => (
  <div className="animate-fadeIn py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-black text-rca-blue">STUDY MATERIAL</h2>
          <p className="text-gray-500">Download premium PDFs and notes for free</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <input type="text" placeholder="Search notes..." className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rca-blue/20 outline-none"/>
          <button className="bg-rca-blue text-white px-4 py-2 rounded-lg"><i className="fas fa-search"></i></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Monthly Current Affairs Oct 2023", icon: "fa-newspaper", color: "blue" },
          { title: "Ancient History Notes PDF", icon: "fa-landmark", color: "orange" },
          { title: "English Grammar Rules Pack", icon: "fa-spell-check", color: "green" },
          { title: "Quantitative Aptitude Formula Sheet", icon: "fa-calculator", color: "purple" },
          { title: "WBCS Previous Year 10 Years", icon: "fa-history", color: "red" },
          { title: "Static GK Capsule 2024", icon: "fa-globe", color: "indigo" },
          { title: "Logical Reasoning Shortcuts", icon: "fa-brain", color: "amber" },
          { title: "Biology Foundation PDF", icon: "fa-dna", color: "teal" },
        ].map((item, i) => (
          <div key={i} className="group p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-rca-blue hover:bg-white transition-all text-center">
            <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-rca-blue group-hover:text-white transition-all`}>
              <i className={`fas ${item.icon} text-xl`}></i>
            </div>
            <h4 className="text-sm font-bold text-rca-blue mb-4 h-10 line-clamp-2">{item.title}</h4>
            <button className="text-rca-orange font-bold text-xs uppercase tracking-widest flex items-center justify-center w-full group-hover:underline">
              <i className="fas fa-download mr-2"></i> Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const About: React.FC = () => (
  <div className="animate-fadeIn">
    <section className="bg-rca-blue py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-6">Empowering Future Officers</h2>
        <p className="text-xl text-white/70 leading-relaxed">RCA Education has been a beacon of hope for competitive exam aspirants since 2015, bridging the gap between talent and success.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://picsum.photos/seed/about/600/400" className="rounded-3xl shadow-2xl" alt="About"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-rca-blue mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">We aim to provide world-class coaching to every student, regardless of their background. Our focus is on conceptual clarity, regular practice, and personalized mentorship. We don't just teach; we prepare you for the challenges of real-world competitive scenarios.</p>
          <div className="space-y-4">
            {["Expert Faculty from across India", "Personalized Doubt Clearing Sessions", "Modern Infrastructure & Lab", "Affordable Fee Structure"].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <i className="fas fa-check-circle text-green-500"></i>
                <span className="font-semibold text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Contact: React.FC = () => (
  <div className="animate-fadeIn py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-rca-blue p-12 text-white">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <i className="fas fa-map-marker-alt text-rca-orange mt-1"></i>
              <div>
                <p className="font-bold">Head Office</p>
                <p className="text-white/70 text-sm">Main Road, Near Town Hall, Purulia, WB 723101</p>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fas fa-phone-alt text-rca-orange mt-1"></i>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-white/70 text-sm">+91 98765 43210 / 03252-222333</p>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fas fa-envelope text-rca-orange mt-1"></i>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-white/70 text-sm">support@rcaeducation.in</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex gap-4">
             <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rca-orange transition-all"><i className="fab fa-facebook-f"></i></a>
             <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rca-orange transition-all"><i className="fab fa-youtube"></i></a>
             <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rca-orange transition-all"><i className="fab fa-telegram-plane"></i></a>
          </div>
        </div>
        <div className="lg:w-2/3 p-12">
          <h2 className="text-2xl font-bold text-rca-blue mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-rca-blue/20 transition-all"/>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-rca-blue/20 transition-all"/>
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-rca-blue/20 transition-all"/>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-rca-blue/20 transition-all"></textarea>
            <button className="bg-rca-orange text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const Login: React.FC = () => (
  <div className="animate-fadeIn min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
    <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-rca-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-user-graduate text-white text-2xl"></i>
        </div>
        <h2 className="text-3xl font-black text-rca-blue">STUDENT LOGIN</h2>
        <p className="text-gray-500 mt-2">Welcome back! Please login to continue.</p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Registration ID / Email</label>
          <div className="relative">
            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"></i>
            <input type="text" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-rca-blue/20 outline-none" placeholder="RCA-2024-XXX"/>
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Password</label>
          <div className="relative">
            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"></i>
            <input type="password" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-rca-blue/20 outline-none" placeholder="••••••••"/>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2"/> Remember me
          </label>
          <a href="#" className="text-rca-orange font-bold">Forgot Password?</a>
        </div>
        <button className="w-full bg-rca-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl">Login Now</button>
      </form>
      <div className="mt-8 text-center text-sm text-gray-500">
        Don't have an account? <a href="#" className="text-rca-blue font-bold">Register Here</a>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [route, setRoute] = useState<AppRoute>(AppRoute.HOME);

  const renderContent = () => {
    switch (route) {
      case AppRoute.HOME:
        return <Home />;
      case AppRoute.COURSES:
        return <CourseGrid />;
      case AppRoute.MOCK_TESTS:
        return <MockTests />;
      case AppRoute.STUDY_MATERIAL:
        return <StudyMaterial />;
      case AppRoute.ABOUT:
        return <About />;
      case AppRoute.CONTACT:
        return <Contact />;
      case AppRoute.LOGIN:
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentRoute={route} setRoute={setRoute} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <AiCounselor />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
