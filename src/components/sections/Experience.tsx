"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Building, Calendar, MapPin, ChevronRight, Award, TrendingUp, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Deloitte",
    position: "Data Analyst Intern",
    location: "Kenya",
    period: "2024",
    type: "Internship",
    description: "Analyzed data to identify trends and patterns, and presented findings to the team. Gained hands-on experience with data visualization tools and statistical analysis methods.",
    achievements: [
      "Analyzed large datasets to identify key business trends and patterns",
      "Created comprehensive data visualizations and reports for stakeholders",
      "Presented analytical findings to senior team members and management",
      "Collaborated with cross-functional teams to deliver data-driven insights",
      "Gained expertise in data cleaning, processing, and statistical analysis"
    ],
    technologies: ["Python", "SQL", "Excel", "Tableau", "Power BI", "Statistics"],
    projects: [
      "Business Trend Analysis Dashboard",
      "Customer Behavior Analytics",
      "Performance Metrics Reporting"
    ],
    current: false
  },
  {
    id: 2,
    company: "Fiverr",
    position: "Machine Learning Developer",
    location: "Remote",
    period: "2023",
    type: "Freelance",
    description: "Developed a chord identification model using machine learning algorithms. Specialized in audio processing and pattern recognition for music technology applications.",
    achievements: [
      "Developed machine learning model for guitar chord identification",
      "Implemented audio signal processing algorithms for real-time analysis",
      "Achieved high accuracy in chord recognition using neural networks",
      "Delivered project on time with comprehensive documentation",
      "Maintained excellent client satisfaction and 5-star ratings"
    ],
    technologies: ["Python", "TensorFlow", "Machine Learning", "Audio Processing", "NumPy", "Jupyter"],
    projects: [
      "Guitar Chord Identification System",
      "Audio Signal Processing Pipeline",
      "ML Model Optimization"
    ],
    current: false
  },
  {
    id: 3,
    company: "Freelance Client",
    position: "Mobile App Developer",
    location: "Remote",
    period: "2023",
    type: "Contract",
    description: "Led the development of a mobile app for a client, from initial concept to deployment on app stores. Managed the entire development lifecycle including UI/UX design, development, testing, and deployment.",
    achievements: [
      "Successfully delivered mobile app from concept to app store deployment",
      "Designed intuitive user interface and seamless user experience",
      "Implemented robust backend functionality and data management",
      "Conducted thorough testing and quality assurance procedures",
      "Achieved successful app store approval and positive user reviews"
    ],
    technologies: ["Android", "Java", "Android Studio", "UI/UX Design", "SQLite", "Git"],
    projects: [
      "ARIMAA Strategy Game",
      "Mobile Game Development",
      "App Store Deployment"
    ],
    current: false
  },
  {
    id: 4,
    company: "Various Clients",
    position: "Lead Frontend Developer",
    location: "Remote",
    period: "2022 - Present",
    type: "Freelance",
    description: "Developed and maintained websites & portfolios using modern frontend technologies. Specialized in creating responsive, high-performance web applications with exceptional user experiences.",
    achievements: [
      "Developed 15+ responsive websites and portfolio applications",
      "Implemented modern frontend frameworks and best practices",
      "Optimized web performance achieving 90+ Lighthouse scores",
      "Created custom UI components and design systems",
      "Maintained long-term client relationships with repeat business"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    projects: [
      "Portfolio Website Development",
      "E-commerce Frontend Solutions",
      "Corporate Website Redesigns"
    ],
    current: true
  }
];

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey in data science, machine learning, and software development 
              across various roles and projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedExperience(exp)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                      selectedExperience.id === exp.id
                        ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50"
                        : "glass-effect border-slate-700 hover:border-purple-500/30"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{exp.position}</h3>
                        <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            exp.current 
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-slate-800 text-gray-300 border border-slate-700"
                          }`}>
                            {exp.current ? "Current" : exp.type}
                          </span>
                        </div>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`text-gray-400 transition-transform ${
                          selectedExperience.id === exp.id ? "rotate-90 text-purple-400" : ""
                        }`} 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Details */}
            <motion.div
              key={selectedExperience.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect rounded-2xl p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedExperience.position}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Building className="text-purple-400" size={20} />
                        <span className="text-xl text-purple-400 font-medium">
                          {selectedExperience.company}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Calendar size={16} />
                        <span>{selectedExperience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{selectedExperience.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedExperience.description}
                  </p>

                  {selectedExperience.current && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Currently Working Here
                    </div>
                  )}
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Award className="text-purple-400" size={20} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-purple-400" size={20} />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm border border-slate-700 hover:border-purple-500 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Notable Projects */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="text-purple-400" size={20} />
                    Notable Projects
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedExperience.projects.map((project, index) => (
                      <motion.div
                        key={project}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/30 transition-colors"
                      >
                        <span className="text-gray-300 text-sm">{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Want to know more about my professional journey?
            </p>
            <motion.a
              href="mailto:munenealex073@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}