import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Brain, 
  Briefcase,
  GraduationCap,
  User,
  Trophy,
  ChevronDown,
  Zap,
  Star,
  Calendar,
  Target
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Mahasiswa Teknik Informatika',
    'JavaScript Developer',
    'AI Enthusiast',
    'Young Entrepreneur'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let i = 0;
    const timer = setInterval(() => {
      if (i < currentText.length) {
        setTypedText(currentText.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'React.js/JSX', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'Python & AI', level: 70, icon: <Brain className="w-5 h-5" /> },
    { name: 'MongoDB', level: 65, icon: <Database className="w-5 h-5" /> },
    { name: 'Git & GitHub', level: 80, icon: <Github className="w-4 h-4" /> }
  ];

  const experiences = [
    {
      title: 'Magang di PT PLN (Persero)',
      company: 'UPT Purwokerto',
      period: '2025',
      description: 'Berkontribusi dalam pengembangan sistem pendukung operasional berbasis WhatsApp Bot dan otomasi pencarian data.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'WhatsApp API'],
      type: 'internship'
    },
    {
      title: 'Pebisnis Peternakan Ikan',
      company: 'Wirausaha Mandiri',
      period: '2022 - Sekarang',
      description: 'Mengelola budidaya ikan air tawar, termasuk perawatan, pengelolaan pakan, distribusi penjualan, dan pemasaran lokal.',
      technologies: ['Business Management', 'Marketing', 'Operations'],
      type: 'business'
    }
  ];

  const projects = [
    {
      title: 'WhatsApp Bot Automation',
      description: 'Sistem otomasi WhatsApp Bot untuk PT PLN dengan fitur pencarian data dan notifikasi otomatis.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'WhatsApp API'],
      status: 'Completed'
    },
    {
      title: 'AI Model Exploration',
      description: 'Eksplorasi berbagai model AI dan machine learning menggunakan Google Colab dan Python.',
      technologies: ['Python', 'TensorFlow', 'Google Colab', 'Jupyter'],
      status: 'Ongoing'
    },
    {
      title: 'Fish Farm Management System',
      description: 'Sistem manajemen peternakan ikan untuk tracking pakan, kesehatan, dan penjualan.',
      technologies: ['React', 'Node.js', 'MySQL'],
      status: 'In Development'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/setyoniti', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/setyo-niti-wicaksono', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/tyooaj', label: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, url: 'mailto:setyonitiwicaksono001@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#16213e] via-[#1a1f2b] to-[#233554] text-white font-sans transition-all duration-500" style={{fontFamily: "'Poppins', 'Lato', 'Inter', sans-serif"}}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#16213e]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
              SN
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-2 py-1 font-medium transition-colors duration-300
                    ${activeSection === item.toLowerCase() ? 'text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded-full' : 'text-gray-300 hover:text-blue-400'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#16213e]/40 to-[#233554]/20 animate-pulse"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/2 translate-x-1/2 w-[36rem] h-[36rem] bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="z-10 w-full max-w-7xl px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh]">
          {/* Avatar kiri */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-auto">
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
              <img
                src="/profile-motor.jpg"
                alt="Profile"
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-blue-500 shadow-2xl bg-[#16213e]"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
          {/* Nama dan konten kanan */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-blue-600 to-white bg-clip-text text-transparent animate-pulse drop-shadow-lg tracking-tight leading-tight">
              SETYO NITI<br />
              WICAKSONO
            </h1>
            <div className="h-14 mb-2">
              <p className="text-2xl md:text-4xl text-blue-300 font-semibold tracking-wide">
                Young Entrepreneur<span className="text-blue-400">|</span>
              </p>
            </div>
            {/* Info singkat */}
            <div className="flex flex-col items-center md:items-start gap-2 mb-2 text-xl md:text-2xl font-medium">
              <div className="flex items-center gap-3 text-blue-200">
                <MapPin className="w-7 h-7 text-blue-400" />
                <span>Semarang</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <Mail className="w-7 h-7 text-blue-400" />
                <span>setyonitiwicaksono001@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-0 mb-6 text-xl md:text-2xl font-medium">
              <div className="flex items-center gap-3 text-blue-200">
                <Phone className="w-7 h-7 text-blue-400" />
                <span>0812-2583-2573</span>
              </div>
            </div>
            {/* QUOTE */}
            <div className="mb-6 w-full">
              <blockquote className="italic text-xl md:text-2xl text-blue-100 font-semibold border-l-8 border-blue-400 pl-8 pr-2 py-4 mx-auto md:mx-0 max-w-2xl bg-white/10 rounded-xl shadow-lg">
                "Teknologi bukan sekadar alat, tapi jalan untuk memecahkan masalah dan menciptakan masa depan."
                <br />
                <span className="block mt-4 text-blue-300 font-bold text-right text-lg md:text-xl">– Setyo Niti Wicaksono</span>
              </blockquote>
            </div>
            <p className="text-lg md:text-2xl text-gray-200 mb-4 max-w-2xl md:mx-0 mx-auto leading-relaxed font-light">
              Passionate about JavaScript, AI technology, and entrepreneurship.<br />
              Building the future with code and innovation.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#1a1f2b]/70 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 p-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-blue-900/40"
                >
                  <div className="group-hover:text-white text-blue-300 transition-colors duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce bg-gradient-to-r from-blue-500 to-blue-700 p-5 rounded-full hover:shadow-2xl transition-all duration-300 shadow-lg mt-2"
            >
              <ChevronDown className="w-9 h-9 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Tentang Saya
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Info Pribadi</h3>
                </div>
                <div className="space-y-3 text-gray-200">
                  <p><span className="text-blue-400">Lahir:</span> Semarang, 24 Juli 2004</p>
                  <p><span className="text-blue-400">Domisili:</span> Semarang</p>
                  <p><span className="text-blue-400">Status:</span> Mahasiswa Aktif</p>
                </div>
              </div>
              
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-blue-300 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Hobi & Minat</h3>
                </div>
                <div className="space-y-3 text-gray-200">
                  <p><span className="text-blue-300">Motor:</span> Menjelajah & memahami performa mesin</p>
                  <p><span className="text-blue-300">Badminton:</span> Menjaga kebugaran & semangat kompetitif</p>
                  <p><span className="text-blue-300">Technology:</span> AI & Machine Learning exploration</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Passion & Vision</h3>
              </div>
              <p className="text-gray-200 leading-relaxed mb-6">
                Saya adalah mahasiswa aktif jurusan <span className="text-blue-400 font-semibold">Teknik Informatika</span> di 
                <span className="text-blue-300 font-semibold"> Universitas Dian Nuswantoro</span> Semarang. 
                Memiliki ketertarikan besar terhadap dunia pemrograman, khususnya JavaScript, React, 
                serta eksplorasi teknologi AI melalui Google Colab.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Di luar dunia kampus dan teknologi, saya juga menjalankan 
                <span className="text-blue-300 font-semibold"> bisnis peternakan ikan</span> sejak tahun 2022 
                yang menunjukkan semangat dalam berwirausaha dan mengelola tanggung jawab secara mandiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#21263a]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Keahlian Teknis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg mr-3 shadow">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Pengalaman
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <div className={`p-2 rounded-lg mr-4 ${
                      exp.type === 'internship' 
                        ? 'bg-gradient-to-r from-blue-400 to-blue-700' 
                        : 'bg-gradient-to-r from-blue-300 to-blue-500'
                    } shadow`}>
                      {exp.type === 'internship' ? <Briefcase className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium bg-blue-700/20 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-[#21263a]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Pendidikan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 max-w-3xl mx-auto shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg mr-4 shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Universitas Dian Nuswantoro</h3>
                <p className="text-blue-400 font-medium">S1 Teknik Informatika</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-200">Program Sarjana - Fakultas Ilmu Komputer</p>
              <span className="text-blue-300 font-medium bg-blue-700/20 px-3 py-1 rounded-full">
                2022 - Sekarang
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg shadow">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'Ongoing'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#21263a]/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Hubungi Saya
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Telepon</h3>
                </div>
                <p className="text-gray-200">0812-2583-2573</p>
              </div>
              
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-300 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-200">setyonitiwicaksono001@gmail.com</p>
              </div>
              
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Lokasi</h3>
                </div>
                <p className="text-gray-200">Semarang, Jawa Tengah</p>
              </div>
            </div>
            
            <div className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Let's Connect!</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-blue-900/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 group border border-blue-900/30"
                  >
                    <div className="mr-2 group-hover:text-white text-blue-300 transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-white text-blue-200 transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#16213e]/90 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Setyo Niti Wicaksono. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
