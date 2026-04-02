import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMapMarkerAlt, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaUniversity />,
      title: "M.Sc. Mathematics",
      subtitle: "Ghent University, Belgium"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Based in Belgium",
      subtitle: "Open to EU opportunities"
    },
    {
      icon: <FaLightbulb />,
      title: "10+ Years",
      subtitle: "Analytical Experience"
    },
    {
      icon: <FaUsers />,
      title: "Multi-Domain",
      subtitle: "Business, Finance, Healthcare"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm <strong>Mahesh Solanki</strong>, a data scientist and mathematician 
              passionate about solving complex real-world problems through the intersection 
              of <span className="gradient-text">mathematical rigor</span> and 
              <span className="gradient-text"> AI/ML engineering</span>.
            </p>

            <p>
              Currently pursuing my thesis on <strong>Reduction of Bias in Likelihood 
              Ratio Tests for Structural Equation Modelling</strong> at Ghent University, 
              Belgium, I combine theoretical foundations with practical implementation 
              across Business, Finance, Healthcare, and Defense domains.
            </p>

            <p>
              With over 10 years of analytical experience spanning education, 
              entrepreneurship, and data engineering, I bring a unique combination of 
              deep mathematical expertise, statistical knowledge, and hands-on machine 
              learning skills to tackle challenging problems.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <strong>Research Focus:</strong> Computational Statistics, SEM Bias Reduction, Causal ML
              </div>
              <div className="detail-item">
                <strong>Languages:</strong> English (C2), Hindi (C2), Gujarati (Native), Dutch (Learning 🇧🇪)
              </div>
              <div className="detail-item">
                <strong>Interests:</strong> Consciousness Research, Mathematical Frameworks, Complex Systems
              </div>
            </div>
          </motion.div>

          <motion.div
            className="highlights-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card glow-box"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-title">{item.title}</div>
                <div className="highlight-subtitle">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
