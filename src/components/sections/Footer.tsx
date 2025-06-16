"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp, X } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/LexyMunene",
    label: "GitHub",
    color: "hover:text-gray-300"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  {
    icon: X,
    href: "https://twitter.com/alexmuriithi",
    label: "Twitter",
    color: "hover:text-sky-400"
  },
  {
    icon: Mail,
    href: "mailto:munenealex073@gmail.com",
    label: "Email",
    color: "hover:text-purple-400"
  }
];

const skills = [
  "Data Science",
  "Machine Learning",
  "React/Next.js",
  "Python",
  "TypeScript",
  "AWS",
  "PostgreSQL",
  "TensorFlow"
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gradient mb-4">Alex Muriithi</h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    Passionate data scientist and software engineer crafting innovative solutions 
                    with cutting-edge technologies. Always learning, always building.
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies I Work With</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-slate-700 hover:border-purple-500 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Connect With Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`p-3 glass-effect rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3 text-gray-400">
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-purple-400" />
                    <a 
                      href="mailto:munenealex073@gmail.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      munenealex073@gmail.com
                    </a>
                  </p>
                  <p className="text-sm">Kenya</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Available for projects</span>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-6">
                  <h5 className="text-white font-medium mb-2">Stay Updated</h5>
                  <p className="text-gray-400 text-sm mb-3">
                    Get notified about new projects and blog posts
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded text-sm hover:shadow-lg transition-all">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 py-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Alex Muriithi. Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 group"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>

            {/* Additional Links */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Sitemap</a>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
                animate={{
                  y: [0, -50, 0],
                  x: [0, 30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 2,
                }}
                style={
                  {
                    left: `${20 + (i * 25)}%`,
                    bottom: `${10 + (i * 5)}%`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}