import React, { useState, useEffect } from 'react';
import { 
  MessageCircle,
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
  Users,
  Trophy,
  ChevronDown,
  Zap,
  Star,
  Calendar,
  Target,
  Music
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
  'Lulusan S1 Teknik Informatika',
  'Associate Data Scientist',
  'Data & Technology Enthusiast',
  'Administrative & Operational',
];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let i = 0;

    const typeChar = () => {
      if (i < currentText.length) {
        setTypedText(currentText.substring(0, i + 1));
        i++;
        setTimeout(typeChar, 140);
      } else {
        // Tunggu sebelum switch ke role berikutnya
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 3500);
      }
    };

    typeChar();

    return () => {
      i = 0;
    };
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
  { name: 'Data Analysis', level: 85, icon: <Database className="w-5 h-5" /> },
  { name: 'Administrative Operations', level: 90, icon: <Users className="w-5 h-5" /> },
  { name: 'Web Development', level: 80, icon: <Code className="w-5 h-5" /> },
  { name: 'Python Programming', level: 80, icon: <Code className="w-5 h-5" /> },
  { name: 'Problem Solving', level: 88, icon: <Brain className="w-5 h-5" /> },
  { name: 'Teamwork & Communication', level: 90, icon: <Users className="w-5 h-5" /> }
];

 const experiences = [
  {
    title: 'Magang Pengadaan Teknologi Informasi',
    company: 'PT PLN (Persero) UPT Purwokerto',
    period: 'Feb 2025 - Mar 2025',
    description: 'Membantu administrasi pengadaan teknologi informasi, pengelolaan data dan dokumen, penyusunan laporan, serta mendukung digitalisasi dan operasional pengadaan TI perusahaan.',
    technologies: ['Administrative Operations', 'Data Management', 'Documentation', 'Information Technology'],
    type: 'internship'
  },
  {
    title: 'Office Administrator (Marketing Administration)',
    company: 'PT Kontak Perkasa Futures',
    period: 'May 2026 - Jun 2026',
    description: 'Mengelola administrasi operasional dan pemasaran, melakukan pengolahan data, pengarsipan dokumen, penyusunan laporan, serta mendukung koordinasi antara tim marketing dan manajemen perusahaan.',
    technologies: ['Administrative Management', 'Data Processing', 'Reporting', 'Microsoft Office'],
    type: 'work'
  },
  {
    title: 'Staff Administrasi',
    company: 'CV BSM Gada Pratama',
    period: 'Jun 2021 - Jul 2021',
    description: 'Melaksanakan input data, pengarsipan dokumen, penyusunan laporan administrasi, serta mendukung kelancaran operasional perusahaan.',
    technologies: ['Data Entry', 'Documentation', 'Administrative Support', 'Microsoft Office'],
    type: 'work'
  },
  {
    title: 'Assistant Lecturer',
    company: 'IAIN Surakarta',
    period: 'May 2021 - Jun 2021',
    description: 'Membantu kegiatan pembelajaran dan administrasi akademik, penyusunan materi, serta pendampingan mahasiswa selama proses perkuliahan.',
    technologies: ['Communication', 'Academic Administration', 'Documentation', 'Team Collaboration'],
    type: 'project'
  }
];

  const projects = [
  {
    title: 'WhatsApp Bot Management System',
    description: 'Mengembangkan WhatsApp Bot untuk manajemen surat, catatan, dan pengingat guna mendukung efisiensi operasional dan administrasi perusahaan.',
    technologies: ['Node.js', 'JavaScript', 'MongoDB', 'WhatsApp API'],
    status: 'Completed'
  },
  {
    title: 'Excel Data Search System',
    description: 'Mengembangkan sistem berbasis web untuk pencarian data pada file Excel yang memudahkan pengguna dalam mengelola dan menemukan informasi secara cepat dan efisien.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'EJS'],
    status: 'Completed'
  },
  {
    title: 'Obesity Level Prediction System',
    description: 'Membangun aplikasi prediksi tingkat obesitas berbasis Machine Learning menggunakan algoritma Gradient Boosting dan antarmuka interaktif berbasis Streamlit.',
    technologies: ['Python', 'Machine Learning', 'Gradient Boosting', 'Streamlit'],
    status: 'Completed'
  },
  {
    title: 'Sentiment Analysis of Sports News',
    description: 'Melakukan analisis sentimen berita olahraga melalui proses data scraping, preprocessing, feature extraction, dan klasifikasi menggunakan model Natural Language Processing.',
    technologies: ['Python', 'Word2Vec', 'IndoBERT', 'NLP'],
    status: 'Completed'
  }
];

  const certificates = [
  {
    title: 'Sertifikat Kompetensi BNSP – Associate Data Scientist (Ilmuan Data Madya)',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP Universitas Dian Nuswantoro',
    year: '2025',
    category: 'Professional',
    icon: '📊'
  },
  {
    title: 'English Proficiency Assessment (EPA) – Score 500',
    issuer: 'Center for Foreign Language Training (CFLT) Universitas Dian Nuswantoro',
    year: '2025',
    category: 'Language',
    icon: '🌐'
  },
  {
    title: 'AI Literacy for Everyone',
    issuer: 'BASS Training Center & Consultant',
    year: '2025',
    category: 'Technology',
    icon: '🤖'
  },
  {
    title: 'Belajar Dasar Cloud dan Generative AI di AWS',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Cloud',
    icon: '☁️'
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Programming',
    icon: '🐍'
  },
  {
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    category: 'Development',
    icon: '📝'
  },
  {
    title: 'Essential Skills Program',
    issuer: 'Gerakan Nasional Indonesia Kompeten (GNIK), MagangHub & Kementerian Ketenagakerjaan Republik Indonesia',
    description: 'Adaptability, Agility at Work, Efficacy, Emotional Intelligence, Digital Literacy, dan Digital Growth & Transformation',
    year: '2026',
    category: 'Skills',
    icon: '⭐'
  },
  {
    title: 'Seminar Persiapan Karir: Siap Menghadapi Tantangan Kerja',
    issuer: 'UPT Layanan Karir dan Alumni Universitas Dian Nuswantoro',
    year: '2025',
    category: 'Professional Development',
    icon: '💼'
  },
  {
    title: 'Webinar Sharing Alumni',
    issuer: 'UPT Layanan Karir dan Alumni Universitas Dian Nuswantoro',
    year: '2025',
    category: 'Networking',
    icon: '👥'
  },
  {
    title: 'Hak Cipta Terdaftar "Virus Self-Rejecting Drone Spybot Tinter"',
    issuer: 'Direktorat Jenderal Kekayaan Intelektual (DJKI), Kementerian Hukum Republik Indonesia',
    year: '2025',
    category: 'Intellectual Property',
    icon: '🏆'
  }
];

  const socialLinks = [
  { icon: <MessageCircle className="w-5 h-5" />, url: 'https://wa.me/6281225832573', label: 'WhatsApp' },
  { icon: <Github className="w-5 h-5" />, url: 'https://github.com/setyoniti/', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, url: 'https://id.linkedin.com/in/setyo-niti-wicaksono', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/tyooaj', label: 'Instagram' },
  { icon: <Music className="w-5 h-5" />, url: 'https://www.tiktok.com/@tyzf_', label: 'TikTok' },
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
            <div className="h-10 w-auto flex items-center">
              <img 
                src="/logo porto.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
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
                src="/pp.jpg"
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
              <p className="text-2xl md:text-4xl text-blue-300 font-semibold tracking-wide min-h-14 flex items-center">
                <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="ml-1 animate-pulse text-blue-400">|</span>
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
  "Turning Data into Insights and Technology into Solutions."
  <br />
</blockquote>            </div>
           <p className="text-lg md:text-2xl text-gray-200 mb-4 max-w-2xl md:mx-0 mx-auto leading-relaxed font-light">
  Passionate about Data Science, Artificial Intelligence, Information Systems Development, Cloud Computing, Administrative Operations, and Technology-Driven Problem Solving.<br />
</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-blue-900/50 to-blue-800/30 hover:from-blue-500 hover:to-blue-600 p-5 rounded-full transition-all duration-300 transform hover:scale-125 active:scale-95 hover:shadow-2xl border-2 border-blue-700/40 hover:border-blue-400 shadow-lg"
                  title={link.label}
                >
                  <div className="group-hover:text-white text-blue-300 transition-all duration-300 transform group-hover:rotate-12">
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
                  <p><span className="text-blue-400">Status:</span> Lulusan S1 Teknik Informatika</p>
                </div>
              </div>
              
              <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-blue-300 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Hobi & Minat</h3>
</div>
<div className="space-y-3 text-gray-200">
  <p><span className="text-blue-300">Technology & AI:</span> Mengeksplorasi perkembangan teknologi, data science, dan artificial intelligence.</p>
  <p><span className="text-blue-300">Automotive:</span> Mempelajari performa mesin, modifikasi, dan inovasi teknologi otomotif.</p>
  <p><span className="text-blue-300">Fitness & Running:</span> Menjaga kebugaran, meningkatkan disiplin, serta membangun pola hidup sehat dan produktif.</p>
</div>
              </div>
            </div>
            
            <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Passion & Vision</h3>
</div>

<p className="text-gray-200 leading-relaxed mb-6">
  Saya adalah lulusan <span className="text-blue-400 font-semibold">S1 Teknik Informatika</span> yang memiliki
  ketertarikan besar pada bidang <span className="text-blue-300 font-semibold">teknologi informasi, analisis data, dan pengembangan sistem</span>.
  Melalui pengalaman magang di <span className="text-blue-300 font-semibold">PT PLN (Persero) UPT Purwokerto</span>
  pada bagian Pengadaan Teknologi Informasi dan pengalaman sebagai
  <span className="text-blue-300 font-semibold"> Office Administrator di PT Kontak Perkasa Futures</span>,
  saya memperoleh pengalaman dalam pengelolaan data, administrasi operasional, digitalisasi proses kerja,
  serta pengembangan solusi berbasis teknologi untuk meningkatkan efisiensi dan produktivitas.
</p>

<p className="text-gray-200 leading-relaxed">
  Selain aktif mengembangkan kompetensi teknis melalui berbagai
  <span className="text-blue-300 font-semibold"> sertifikasi di bidang Data Science, Artificial Intelligence, Cloud Computing, dan Python</span>,
  saya juga memiliki pengalaman dalam organisasi dan berbagai proyek pengembangan sistem yang membantu meningkatkan kemampuan
  kerja sama tim, komunikasi, kepemimpinan, dan problem solving.
  Saya merupakan pribadi yang cepat belajar, adaptif, dan berorientasi pada pengembangan diri, serta siap memberikan
  kontribusi terbaik di bidang teknologi, operasional, maupun posisi yang membutuhkan kemampuan koordinasi dan kepemimpinan.
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
        <p className="text-gray-200">
          Program Sarjana - Teknik Informatika
        </p>

        <span className="text-blue-300 font-medium bg-blue-700/20 px-3 py-1 rounded-full">
          2022 - 2026 | IPK 3.55
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

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 bg-[#21263a]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Sertifikasi & Penghargaan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#1a2936]/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 group shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <span className="text-blue-300 font-semibold text-sm bg-blue-700/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-blue-300 mb-3 font-medium">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-xs text-gray-300 mb-3">
                    {cert.description}
                  </p>
                )}
                
                <div className="flex items-center">
                  <span className="inline-block bg-gradient-to-r from-blue-500/20 to-blue-700/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-500/30 font-medium">
                    {cert.category}
                  </span>
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
            
            <div className="bg-[#1a2936]/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/60">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">Let's Connect!</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-blue-900/40 to-blue-800/20 hover:from-blue-600 hover:to-blue-500 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-blue-700/40 hover:border-blue-400/80 shadow-md hover:shadow-lg"
                  >
                    <div className="mb-2 group-hover:text-white text-blue-300 transition-colors duration-300 transform group-hover:scale-125">
                      {link.icon}
                    </div>
                    <span className="text-xs font-semibold group-hover:text-white text-blue-200 transition-colors duration-300 text-center">
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
            © 2026 Setyo Niti Wicaksono. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
