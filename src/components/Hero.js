import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#00d9ff', '#b967ff', '#05ffa1'],
      },
      links: {
        color: '#00d9ff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/twomathematicians-code', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/mahesh-solanki-16b9a6a5', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:maheshsinh1910@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles"
      />
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <span className="badge-dot"></span>
            Available for opportunities in Belgium & EU
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Mahesh Solanki</span>
          </motion.h1>

          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span>Data Scientist</span>
            <span className="separator">|</span>
            <span>Mathematician</span>
            <span className="separator">|</span>
            <span>AI/ML Engineer</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Solving complex real-world problems across <strong>Business, Finance, 
            Healthcare, and Defense</strong> by combining mathematical rigor with 
            cutting-edge AI/ML engineering. Currently researching SEM bias reduction 
            at <strong>Ghent University, Belgium</strong>.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/Mahesh_Solanki_CV.pdf" className="btn btn-secondary" download>
              <FaDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="code-window glow-box">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
{`const dataScientist = {
  name: "Mahesh Solanki",
  education: [
    "M.Sc. Pure Mathematics",
    "M.Sc. Statistical Data Analysis"
  ],
  research: "SEM Bias Reduction",
  skills: ["Python", "R", "ML/AI"],
  passion: "Solving complex problems",
  location: "Ghent, Belgium 🇧🇪"
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
