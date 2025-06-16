"use client";

import { motion } from "framer-motion";
import { Code, Database, Brain, Smartphone, Award, Users, Coffee, Heart } from "lucide-react";

const stats = [
  { number: "15+", label: "Websites Built", icon: Code },
  { number: "4+", label: "ML Models", icon: Brain },
  { number: "3+", label: "Mobile Apps", icon: Smartphone },
  { number: "2+", label: "Years Experience", icon: Award }
];

const skills = [
  {
    category: "Data Science & ML",
    items: ["Python", "Machine Learning", "TensorFlow", "Jupyter", "Statistics", "Audio Processing"],
    icon: Brain,
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    icon: Code,
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Mobile Development",
    items: ["Android", "Java", "Android Studio", "UI/UX Design", "SQLite", "Git"],
    icon: Smartphone,
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Tableau", "Power BI", "Excel", "Data Visualization", "Dashboard Design"],
    icon: Database,
    color: "from-orange-500 to-red-500"
  }
];

const journey = [
  {
    year: "2022",
    title: "Started Freelancing",
    description: "Began my journey as a freelance frontend developer, building websites and portfolios for various clients."
  },
  {
    year: "2023",
    title: "Mobile Development",
    description: "Expanded into mobile app development, creating the ARIMAA strategy game and working on client projects."
  },
  {
    year: "2023",
    title: "Machine Learning",
    description: "Dove into ML and developed a guitar chord identification model on Fiverr, combining my passion for music and technology."
  },
  {
    year: "2024",
    title: "Data Analytics",
    description: "Completed a Data Analyst internship at Deloitte, gaining hands-on experience with enterprise-level data analysis."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm Alex Muriithi, a passionate data scientist and software engineer from Kenya. 
              I love transforming complex data into actionable insights and building innovative 
              software solutions that make a real impact. My journey spans from machine learning 
              models to mobile apps and everything in between.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My tech journey began with a curiosity about how data can tell stories and 
                    solve real-world problems. What started as building simple websites quickly 
                    evolved into a passion for data science, machine learning, and creating 
                    comprehensive software solutions.
                  </p>
                  <p>
                    From developing a machine learning model that identifies guitar chords to 
                    analyzing business trends at Deloitte, I've always been driven by the 
                    challenge of turning complex problems into elegant solutions.
                  </p>
                  <p>
                    When I'm not coding or analyzing data, you'll find me exploring new 
                    technologies, contributing to open-source projects, or working on 
                    creative side projects that blend technology with everyday life.
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Coffee size={20} />
                    <span className="text-sm">Powered by coffee</span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-400">
                    <Heart size={20} />
                    <span className="text-sm">Passionate about innovation</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700 hover:border-purple-500/30 transition-colors"
                  >
                    <stat.icon className="text-purple-400 mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Skills & <span className="text-gradient">Expertise</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillSet.color} flex items-center justify-center mb-4`}>
                    <skillSet.icon className="text-white" size={24} />
                  </div>
                  
                  <h4 className="text-white font-semibold mb-4">{skillSet.category}</h4>
                  
                  <div className="space-y-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
              
              <div className="space-y-12">
                {journey.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1">
                      <div className={`glass-effect rounded-xl p-6 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}>
                        <div className="text-purple-400 font-bold text-lg mb-2">{milestone.year}</div>
                        <h4 className="text-white font-semibold text-xl mb-3">{milestone.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-900"></div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Beyond Code</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              When I'm not immersed in data or building applications, I enjoy exploring music technology 
              (hence the guitar chord recognition project!), staying updated with the latest in AI and ML, 
              and finding creative ways to solve everyday problems with technology.
            </p>
            
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span>🎵</span>
                <span className="text-sm">Music Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🤖</span>
                <span className="text-sm">AI Research</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span className="text-sm">Data Visualization</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚀</span>
                <span className="text-sm">Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}