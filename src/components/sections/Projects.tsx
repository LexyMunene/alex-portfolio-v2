"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Guitar Chords Identification",
    description: "A Machine Learning Model that identifies guitar chords using audio processing and pattern recognition algorithms.",
    longDescription: "This project implements advanced machine learning techniques to analyze audio signals and accurately identify guitar chords in real-time. The model uses feature extraction methods and neural networks to achieve high accuracy in chord recognition.",
    image: "/images/guitar.jpg",
    technologies: ["Machine Learning", "Python", "Jupyter", "Audio Processing", "TensorFlow", "NumPy"],
    category: "Machine Learning",
    date: "2024",
    github: "https://github.com/LexyMunene",
    demo: "https://github.com/LexyMunene",
    features: [
      "Real-time chord recognition",
      "Audio signal processing",
      "Machine learning classification",
      "High accuracy detection",
      "User-friendly interface"
    ],
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "HR Analytics Dashboard",
    description: "A comprehensive dashboard that helps HR managers to manage their employees and analyze workforce data using Tableau.",
    longDescription: "An interactive Tableau dashboard providing deep insights into HR metrics including employee performance, retention rates, recruitment analytics, and workforce demographics. Features real-time data visualization and actionable insights for strategic HR decisions.",
    image: "/images/hr.svg",
    technologies: ["Tableau", "Data Visualization", "Analytics", "SQL", "Dashboard Design"],
    category: "Data Analytics",
    date: "2024",
    github: "https://public.tableau.com/app/profile/alex.m6808/viz/HRDASHBOARDTableau/HRANALYTICSDASHBOARD",
    demo: "https://public.tableau.com/app/profile/alex.m6808/viz/HRDASHBOARDTableau/HRANALYTICSDASHBOARD",
    features: [
      "Employee performance tracking",
      "Retention rate analysis",
      "Recruitment metrics",
      "Interactive visualizations",
      "Real-time data updates"
    ],
    status: "completed",
    featured: true
  },
  {
    id: 3,
    title: "CR-RECORDS Software",
    description: "A Windows desktop application designed for efficient church data management and member records.",
    longDescription: "A comprehensive church management system built with Python that handles member registration, attendance tracking, financial records, and event management. Features a user-friendly interface and robust database management capabilities.",
    image: "/images/2c.jpeg",
    technologies: ["Python", "Desktop Application", "Database Management", "GUI Development", "SQLite"],
    category: "Desktop Application",
    date: "2023",
    github: "https://github.com/LexyMunene",
    demo: "https://github.com/LexyMunene",
    features: [
      "Member management system",
      "Attendance tracking",
      "Financial record keeping",
      "Event scheduling",
      "Data backup and recovery"
    ],
    status: "completed",
    featured: true
  },
  {
    id: 4,
    title: "ARIMAA Game",
    description: "An Android mobile game implementation of the strategic board game Arimaa for two players.",
    longDescription: "A fully functional Android application featuring the classic Arimaa strategy game. Includes multiplayer functionality, game state management, intuitive touch controls, and a clean user interface designed for mobile gameplay.",
    image: "/images/Arimaa.png",
    technologies: ["Android", "Java", "Android Studio", "Mobile Development", "Game Logic", "UI/UX"],
    category: "Mobile Development",
    date: "2023",
    github: "https://github.com/LexyMunene",
    demo: "https://github.com/LexyMunene",
    features: [
      "Two-player gameplay",
      "Strategic board game mechanics",
      "Touch-based controls",
      "Game state persistence",
      "Clean mobile interface"
    ],
    status: "completed",
    featured: true
  }
];

const categories = ["All", "Machine Learning", "Data Analytics", "Desktop Application", "Mobile Development"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in data science, 
              machine learning, and software development.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="glass-effect rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium rounded-full">
                      ✓ {project.status}
                    </span>
                  </div>

                  {/* Technology Preview */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-purple-400" />
                    <span className="text-gray-400 text-sm">{project.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <Tag size={16} className="text-purple-400" />
                      Key Features
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-slate-800 text-gray-300 rounded-full border border-slate-700 hover:border-purple-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <motion.a
              href="https://github.com/LexyMunene"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}