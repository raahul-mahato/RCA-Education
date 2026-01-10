
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <img src="favicon.webp" alt="RCA" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase">RCA Education</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              RCA Education is West Bengal's premier coaching institute for competitive exams. We believe in providing quality content and structured guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rca-orange hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rca-orange hover:text-white transition-all"><i className="fab fa-youtube"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rca-orange hover:text-white transition-all"><i className="fab fa-telegram-plane"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rca-orange hover:text-white transition-all"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-rca-orange transition-colors">Course List</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Free Study Material</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Mock Test Portal</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Previous Year Papers</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Latest Notifications</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Exam Batches</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-rca-orange transition-colors">SSC CGL / CHSL</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Railway NTPC / ALP</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">WBCS Preliminary</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">WB Police SI / Constable</a></li>
              <li><a href="#" className="hover:text-rca-orange transition-colors">Banking Exams</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-rca-orange"></i>
                <span>Purulia, West Bengal, India - 723101</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-rca-orange"></i>
                <span>+91 97491 76587</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-rca-orange"></i>
                <span>support@rcaeducation.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 uppercase font-medium tracking-widest">
          <p>&copy; 2026 RCA Education. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
