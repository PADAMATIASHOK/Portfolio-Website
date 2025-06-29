import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ashok Padamati</h3>
            <p className="text-gray-300 leading-relaxed">
              Java Developer & Web Developer passionate about creating 
              efficient solutions and learning new technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ashok-padamati-30b974284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/PADAMATIASHOK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:padamatiashok245@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Hyderabad, India</p>
              <p>padamatiashok245@gmail.com</p>
              <p className="text-green-400">Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Ashok Padamati
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;