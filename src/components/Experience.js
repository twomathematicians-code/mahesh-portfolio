import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "M.Sc. Statistical Data Analysis (Thesis)",
      company: "Ghent University",
      location: "Ghent, Belgium",
      period: "2024 - Present",
      type: "Research",
      description: [
        "Thesis: Reduction of Bias in Likelihood Ratio Tests for Structural Equation Modelling",
        "Implementing Bartlett Correction for lavaan package in R",
        "Computational Statistics focus with applications in psychology and healthcare"
      ]
    },
    {
      title: "Data Analyst",
      company: "LearningMate Solutions",
      location: "Belgium",
      period: "2022 - 2025",
      type: "Full-time",
      description: [
        "Educational data mining and student performance prediction",
        "Learning pattern analysis and adaptive learning systems",
        "Statistical modelling for educational outcomes"
      ]
    },
    {
      title: "Entrepreneur & Data Engineer",
      company: "SUSTANIX",
      location: "India",
      period: "2018 - 2022",
      type: "Entrepreneurship",
      description: [
        "Data-driven supply chain optimization and vendor pricing",
        "Improved profit margins through data-driven negotiations",
        "Established standardized data workflows and analytics pipelines"
      ]
    },
    {
      title: "M.Sc. Pure Mathematics",
      company: "Gujarat University",
      location: "India",
      period: "2016 - 2018",
      type: "Education",
      description: [
        "Advanced mathematical theory and analysis",
        "Research in mathematical frameworks",
        "Foundation for statistical and computational methods"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content glow-box">
                <div className="exp-header">
                  <div className="exp-type">{exp.type}</div>
                  <div className="exp-period">
                    <FaCalendarAlt /> {exp.period}
                  </div>
                </div>

                <h3 className="exp-title">{exp.title}</h3>
                
                <div className="exp-company">
                  <FaBriefcase /> {exp.company}
                </div>

                <div className="exp-location">
                  <FaMapMarkerAlt /> {exp.location}
                </div>

                <ul className="exp-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
