import React from 'react';
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
        "Developing computational methods to improve causal inference accuracy",
        "Implementing Bartlett Correction for lavaan package in R",
        "Applications in psychology, healthcare, and social sciences"
      ]
    },
    {
      title: "Data Analyst",
      company: "LearningMate Solutions",
      location: "India",
      period: "2022 - 2025",
      type: "Full-time",
      description: [
        "Educational data mining and student performance prediction",
        "Learning pattern analysis and adaptive learning systems",
        "Statistical modelling for educational outcomes",
        "Developed predictive models for student success metrics"
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
        "Established standardized data workflows and analytics pipelines",
        "Built decision support systems for inventory management"
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
        "Foundation for statistical and computational methods",
        "Thesis on advanced mathematical structures"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-meta">
                    <span className="exp-location">📍 {exp.location}</span>
                    <span className="exp-period">📅 {exp.period}</span>
                    <span className={`exp-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                  </div>
                </div>
              </div>
              
              <ul className="exp-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
