import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Download, User, GraduationCap, Code, Server, Cloud, Users, Briefcase, Rocket, Infinity, Phone, Github } from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Performance Tools",
      description: "LoadRunner, JMeter, BlazeMeter"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Monitoring & Analytics",
      description: "Dynatrace, Splunk, AppDynamics"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Azure, Docker, Kubernetes, Jenkins"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming & Automation",
      description: "Python, Java, Shell scripting, Excel Macros"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Frameworks & Technologies",
      description: "SQL Server, IIS, .NET, Windows Server, Salesforce"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      description: "Team Leadership, Stakeholder Communication, Problem Solving"
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "Team Lead",
      company: "Samworth Brothers",
      period: "Jan 2024 – Jul 2025",
      description: "Led a team of 8 performance engineers across multiple enterprise applications. Implemented comprehensive performance testing strategies that improved system reliability by 35%. Established performance benchmarks and KPIs for critical business applications.",
      achievements: [
        "Led a team of 8 performance engineers across multiple enterprise applications",
        "Implemented comprehensive performance testing strategies that improved system reliability by 35%",
        "Established performance benchmarks and KPIs for critical business applications",
        "Collaborated with stakeholders to define performance requirements and acceptance criteria",
        "Mentored junior team members and conducted knowledge transfer sessions"
      ]
    },
    {
      id: 2,
      title: "Infrastructure Lead",
      company: "Royal Mail",
      period: "Aug 2023 – Jan 2024",
      description: "Led infrastructure performance testing for critical mail processing systems. Designed and implemented cloud-native monitoring solutions using Azure and Dynatrace. Optimized database performance resulting in 50% improvement in query response times.",
      achievements: [
        "Led infrastructure performance testing for critical mail processing systems",
        "Designed and implemented cloud-native monitoring solutions using Azure and Dynatrace",
        "Optimized database performance resulting in 50% improvement in query response times",
        "Established automated testing pipelines reducing manual testing effort by 70%",
        "Conducted capacity planning and scalability assessments for peak season operations"
      ]
    },
    {
      id: 3,
      title: "Software Performance Test Lead",
      company: "Cognizant",
      period: "May 2019 – Jan 2022",
      description: "Led performance testing initiatives for Fortune 500 clients across various industries. Designed comprehensive test strategies using LoadRunner, JMeter, and BlazeMeter. Reduced application response times by 40% through performance optimization recommendations.",
      achievements: [
        "Led performance testing initiatives for Fortune 500 clients across various industries",
        "Designed comprehensive test strategies using LoadRunner, JMeter, and BlazeMeter",
        "Implemented performance monitoring solutions with AppDynamics and Splunk",
        "Reduced application response times by 40% through performance optimization recommendations",
        "Managed client relationships and delivered technical presentations to senior stakeholders"
      ]
    },
    {
      id: 4,
      title: "IT Programmer Analyst",
      company: "Cognizant",
      period: "Feb 2016 – May 2019",
      description: "Developed automated testing scripts using Python and Java. Performed load testing and stress testing on enterprise applications. Created performance dashboards and reports for stakeholder consumption.",
      achievements: [
        "Developed automated testing scripts using Python and Java",
        "Performed load testing and stress testing on enterprise applications",
        "Created performance dashboards and reports for stakeholder consumption",
        "Collaborated with development teams to identify and resolve performance bottlenecks",
        "Participated in agile development processes and continuous integration practices"
      ]
    }
  ];

  const projects = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Enterprise Performance Optimization",
      description: "Led performance testing initiatives that improved application response times by 40% and reduced infrastructure costs by 25%."
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Migration & Testing",
      description: "Successfully migrated and performance-tested 15+ enterprise applications to Azure cloud with zero downtime."
    },
    {
      icon: <Infinity className="w-12 h-12" />,
      title: "CI/CD Pipeline Integration",
      description: "Integrated automated performance testing into CI/CD pipelines, reducing testing cycles by 60% and improving deployment frequency."
    }
  ];

  const services = [
    {
      icon: <Code className="w-16 h-16" />,
      title: "Performance Testing & Optimization",
      description: "Comprehensive performance testing strategies, load testing, stress testing, and performance optimization recommendations."
    },
    {
      icon: <Infinity className="w-16 h-16" />,
      title: "CI/CD Pipeline Integration",
      description: "Seamless integration of automated testing into your development workflow with continuous monitoring and reporting."
    },
    {
      icon: <Cloud className="w-16 h-16" />,
      title: "Cloud Infrastructure & Monitoring",
      description: "Cloud-native performance monitoring, infrastructure optimization, and scalability planning for enterprise applications."
    }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8 animate-pulse">
            <User className="w-24 h-24 text-red-600 mx-auto animate-bounce" />
          </div>
          <div className="text-4xl font-bold text-white font-sans tracking-wider">
            SJ
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-red-600">SJ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-red-600 transition-colors">About</a>
              <a href="#experience" className="hover:text-red-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            Srinivaas Jaganathan
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">Performance Test Lead</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            "Delivering scalable, reliable, and high-performing enterprise applications."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com/in/srinivaas-jaganathan" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="#" className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Performance Test Lead with 9+ years of expertise in delivering scalable, high-performing enterprise applications. 
              Specialized in performance optimization, cloud infrastructure, and leading cross-functional teams to achieve exceptional results. 
              Passionate about leveraging cutting-edge technologies to drive business success and technical excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                <Code className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold">Performance Testing</h3>
            </div>
            <div className="text-center group">
              <div className="bg-red-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                <Cloud className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold">Cloud Architecture</h3>
            </div>
            <div className="text-center group">
              <div className="bg-red-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold">Team Leadership</h3>
            </div>
            <div className="text-center group">
              <div className="bg-red-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                <Server className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold">DevOps Integration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-600/10 to-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all transform hover:scale-105">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-red-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">MSc Cloud Computing</h3>
                  <p className="text-gray-300">University of Leicester</p>
                  <p className="text-gray-400 text-sm">Jan 2022 – Jul 2023</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600/10 to-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all transform hover:scale-105">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-red-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">B.E. Electronics & Instrumentation</h3>
                  <p className="text-gray-300">Anna University</p>
                  <p className="text-gray-400 text-sm">Apr 2011 – May 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
          </div>
        </div>
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all">
                <div className="text-red-600 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="bg-gradient-to-br from-gray-800/80 to-red-900/20 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-red-600 text-sm font-medium">{exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Projects & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all transform hover:scale-105">
                <div className="text-red-600 mb-6">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-600/10 to-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all transform hover:scale-105 text-center">
                <div className="text-red-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300">Ready to optimize your application's performance?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <a
                href="mailto:srinivaas.jaganathan@email.com"
                className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/srinivaas-jaganathan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Srinivaas Jaganathan</h3>
              <p className="text-gray-400">Performance Test Lead</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/srinivaas-jaganathan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/srinivaas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:srinivaas.jaganathan@email.com" className="text-gray-400 hover:text-red-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Srinivaas Jaganathan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Experience Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedExperience.title}</h3>
                <p className="text-gray-300 text-lg">{selectedExperience.company}</p>
                <p className="text-red-600 font-medium">{selectedExperience.period}</p>
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Key Responsibilities & Achievements:</h4>
              <ul className="space-y-3">
                {selectedExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">→</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
