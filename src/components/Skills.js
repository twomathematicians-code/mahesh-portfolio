import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaDatabase, FaBrain, FaChartLine, FaReact, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { SiR, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "R", level: 90, icon: <SiR /> },
        { name: "SQL", level: 88, icon: <FaDatabase /> },
        { name: "MATLAB", level: 85, icon: <FaBrain /> },
        { name: "TypeScript", level: 75, icon: <FaReact /> },
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        { name: "PyTorch", level: 88, icon: <SiPytorch /> },
        { name: "TensorFlow", level: 85, icon: <SiTensorflow /> },
        { name: "scikit-learn", level: 92, icon: <SiScikitlearn /> },
        { name: "Keras", level: 85, icon: <FaBrain /> },
      ]
    },
    {
      title: "Data & Analysis",
      skills: [
        { name: "Pandas", level: 95, icon: <SiPandas /> },
        { name: "NumPy", level: 95, icon: <SiNumpy /> },
        { name: "SEM (lavaan)", level: 90, icon: <FaChartLine /> },
        { name: "Time Series", level: 88, icon: <FaChartLine /> },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85, icon: <SiPostgresql /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
        { name: "Git", level: 90, icon: <FaGitAlt /> },
        { name: "Docker", level: 75, icon: <FaDocker /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="cert-title">Certifications</h3>
          <div className="cert-grid">
            {[
              "MATLAB Certified Professional",
              "Python for Data Analysis",
              "Power BI Desktop Certified",
              "Tableau Desktop Specialist",
              "SQL Advanced Queries",
              "Microsoft Excel Advanced"
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="cert-item"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
