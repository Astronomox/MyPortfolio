import { useState, useEffect } from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  // Social media links
  const socialLinks = {
    github: 'https://github.com/Astronomox',
    linkedin: 'https://www.linkedin.com/in/abdullahi-oriola-63459b2a7/',
    twitter: 'https://x.com/Astro2theworld',
    instagram: 'https://www.instagram.com/xyberpunkgt/'
  };

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_jwxd0co',
    TEMPLATE_ID: 'template_60wvnzt',
    PUBLIC_KEY: 'ndqVQL5a4jQKAgomK'
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "TechTitans AWS 2.0",
      description: "A comprehensive cloud platform built with AWS services, featuring scalable infrastructure and modern web technologies.",
      technologies: ['AWS', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://tech-titans-aws-2-0.vercel.app/',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: "Notepad",
      description: "A sleek, responsive note-taking application with real-time editing and local storage capabilities.",
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      link: 'https://notepad-rose.vercel.app/',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: "Dictionary App",
      description: "Interactive dictionary application with word definitions, pronunciations, and search functionality.",
      technologies: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      link: 'https://dictionary-app-flame-alpha.vercel.app/',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with location-based data and beautiful UI design.",
      technologies: ['React', 'Weather API', 'JavaScript', 'Tailwind CSS'],
      link: 'https://weather-dashboard-tan-eight.vercel.app/',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 5,
      title: "Image-Compressor",
      description: "Web-based image compression tool that reduces file size while maintaining quality.",
      technologies: ['JavaScript', 'Image Processing', 'HTML5', 'CSS3'],
      link: 'https://image-compressor-smoky.vercel.app/',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: "Portfolio",
      description: "Responsive portfolio website showcasing my projects and skills with modern design and contact functionality.",
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
      link: 'https://my-portfolio-gamma-seven-dwq1vpin45.vercel.app/',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 7,
      title: "TrustBridge AI-Legal Engine",
      description: "AI-powered NDPR/NDPA compliance analysis platform for Nigerian businesses using Google Gemini. Features privacy policy analysis, citizen action validation, and quick compliance checks with actionable remediation steps.",
      technologies: ['Python', 'FastAPI', 'Google Gemini AI', 'Uvicorn', 'Pydantic'],
      link: 'https://trustbridge-ai.onrender.com/docs/',
      gradient: 'from-yellow-500 to-orange-700'
    }
    {
      id: 8,
      title: "Flashcard App",
      description: "Interactive flashcard study application with subject-based organization, progress tracking, and flip animations for effective learning and retention.",
      technologies: ['React', 'TypeScript', 'Vite', 'Shadcn UI', 'Tailwind CSS'],
      link: 'https://flashcard-app-navy-sigma.vercel.app/',
      gradient: 'from-indigo-500 to-violet-600'
    }

  ];

  const skills = [
    { name: 'Python', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'Django', color: 'bg-green-600', textColor: 'text-white' },
    { name: 'Node.js', color: 'bg-green-500', textColor: 'text-white' },
    { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500', textColor: 'text-white' },
    { name: 'Tkinter', color: 'bg-yellow-500', textColor: 'text-gray-900' },
    { name: 'React', color: 'bg-cyan-400', textColor: 'text-gray-900' },
    { name: 'JavaScript', color: 'bg-yellow-400', textColor: 'text-gray-900' },
    { name: 'HTML', color: 'bg-orange-500', textColor: 'text-white' },
    { name: 'AI Creation', color: 'bg-blue-700', textColor: 'text-white' },
    { name: 'AWS', color: 'bg-orange-400', textColor: 'text-gray-900' },
    { name: 'FastAPI', color: 'bg-red-500', textColor: 'text-white' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} copied to clipboard!`, {
        duration: 2000,
        position: 'bottom-center',
      });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields', {
        duration: 3000,
        position: 'bottom-center',
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_email: 'abdullahioriola02@gmail.com'
    };

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 4000,
          position: 'bottom-center',
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('EmailJS error:', error);
        console.error('Error details:', error.text);
        toast.error('Failed to send via form. Opening email client instead...', {
          duration: 3000,
          position: 'bottom-center',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-gray-900 cursor-pointer"
              >
                Oriola Abdullahi, Adeola
              </motion.span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${activeSection === item
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left capitalize ${activeSection === item
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-28 px-4 relative overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Screenshot 2025-10-19 044014.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></motion.div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-10 w-6 h-6 bg-purple-500 rounded-full opacity-20"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto relative z-10 text-center"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <motion.span 
              className="text-blue-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Oriola Abdullahi Adeola
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            A passionate full stack developer creating robust and scalable web applications
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto"
            ></motion.div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-1/3"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl w-full h-96 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="/WIN_20250308_13_40_14_Pro.png" 
                  alt="Oriola Abdullahi Adeola - Full Stack Developer" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-2/3"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-4"
              >
                Full Stack Developer
              </motion.h3>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                <motion.p variants={itemVariants} className="text-gray-600 mb-6">
                  A passionate Python developer with one year of experience building web applications from the ground up.
                  I specialize in creating efficient, scalable solutions using modern technologies.
                </motion.p>
                <motion.p variants={itemVariants} className="text-gray-600 mb-6">
                  While I have no formal experience, I'm highly motivated and have a strong portfolio of personal projects. I've recently started my journey into full-stack development, getting a firm grasp of Node.js and React.js to create modern web applications.
                </motion.p>
                <motion.p variants={itemVariants} className="text-gray-600 mb-8">
                  My approach combines technical expertise with an eye for design, ensuring that every project
                  I work on is both functional and visually appealing.
                </motion.p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`${skill.color} ${skill.textColor} px-3 py-2 rounded-lg text-center font-medium shadow-md hover:shadow-xl transition-all duration-300 cursor-default`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleUp}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-white font-bold text-lg z-10">{project.title.split(' ')[0]}</span>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.link, '_blank')}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center gap-1"
                  >
                    View Project 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row gap-12"
          >
            <motion.div variants={slideInLeft} className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
              <p className="text-gray-600 mb-8">
                I'm currently available for freelance work and full-time opportunities. Feel free to reach out if you want to collaborate
                or just say hello!
              </p>

              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center cursor-pointer group"
                  onClick={() => copyToClipboard('abdullahioriola02@gmail.com', 'Email')}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </motion.div>
                  <span className="group-hover:text-blue-600 transition-colors">
                    abdullahioriola02@gmail.com
                  </span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center cursor-pointer group"
                  onClick={() => copyToClipboard('+2347037499375', 'Phone number')}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </motion.div>
                  <span className="group-hover:text-blue-600 transition-colors">
                    +234 703 749 9375
                  </span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span>Lagos, Nigeria</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="md:w-1/2">
              <motion.form 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your message here..."
                    required
                  ></motion.textarea>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-6 py-3 font-medium rounded-lg transition-colors duration-300 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.div variants={itemVariants} className="mb-6 md:mb-0">
              <span className="text-xl font-bold">Oriola Abdullahi Adeola</span>
              <p className="mt-2 text-gray-400">Full Stack Developer</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  {platform === 'github' && <Github className="w-6 h-6" />}
                  {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                  {platform === 'twitter' && <Twitter className="w-6 h-6" />}
                  {platform === 'instagram' && <Instagram className="w-6 h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Oriola Abdullahi Adeola. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>

      <MadeWithDyad />
    </div>
  );
};

export default Portfolio;
