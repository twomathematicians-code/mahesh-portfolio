import React from 'react';
import { FaPython, FaDatabase, FaBrain, FaChartLine, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiR, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 92 },
        { name: "SQL", level: 88 },
        { name: "MATLAB", level: 85 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 87 },
        { name: "scikit-learn", level: 93 },
        { name: "Keras", level: 85 },
      ]
    },
    {
      title: "Data & Analysis",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "SEM (lavaan)", level: 92 },
        { name: "Causal Inference", level: 88 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="cert-title">Certifications & Training</h3>
          <div className="cert-grid">
            {[
              "MATLAB Certified Professional",
              "Python for Data Analysis",
              "Power BI Desktop Certified",
              "Tableau Desktop Specialist",
              "SQL Advanced Queries",
              "Microsoft Excel Advanced"
            ].map((cert, index) => (
              <div key={index} className="cert-item">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
