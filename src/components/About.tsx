import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate and driven individual with a strong interest in software development and solving real-world problems through technology. I enjoy building full-stack applications and have experience working with both backend and frontend technologies to develop end-to-end solutions. I'm always eager to learn new tools, take on challenges, and collaborate with others to build impactful software.


          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Education & Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Bachelor of Technology 
                  </h4>
                  <p className="text-gray-600">SIR C R REDDY COLLEGE OF ENGINEEERING </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>2021- 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Strong foundation in Java programming and web development</li>
                <li>• Experience with modern web technologies</li>
                <li>• Active contributor to open-source projects</li>
                <li>• Continuous learner with focus on emerging technologies</li>
              </ul>
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-1">Name</h4>
                <p className="text-gray-600">Ashok Padamati</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">Hyderabad, India</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 text-sm">padamatiashok245@gmail.com</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-1">Status</h4>
                <p className="text-gray-600">Available for opportunities</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about technology and always eager to learn new skills. 
                My goal is to contribute to innovative projects that make a positive impact. 
                I believe in writing clean, efficient code and collaborating effectively with teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;