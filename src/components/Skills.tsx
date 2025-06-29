import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'bg-blue-500'
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="h-6 w-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
      color: 'bg-green-500'
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Command Line'],
      color: 'bg-purple-500'
    },
    {
      title: 'Core Concepts',
      icon: <Database className="h-6 w-6" />,
      skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Problem Solving'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and skills I've been working with recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.color} text-white p-2 rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? category.color : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Version Control',
              'Code Review',
              'Testing',
              'Documentation',
              'Agile Methodology',
              'Continuous Learning'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;