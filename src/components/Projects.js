import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaHeartbeat, FaShieldAlt, FaCogs, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "CausalInference-Toolkit",
      description: "Comprehensive causal inference framework implementing Propensity Score Matching, Instrumental Variables, Double Machine Learning, and Causal Discovery Algorithms for high-stakes decision making in business, healthcare, and policy domains.",
      domain: "Causal ML",
      icon: <FaCogs />,
      tech: ["Python", "DoWhy", "EconML", "CausalNex"],
      highlights: ["Treatment Effect Estimation", "Marketing Campaign ROI", "Risk Factor Identification"],
      github: "https://github.com/twomathematicians-code/CausalInference-Toolkit",
      priority: "Featured"
    },
    {
      title: "BiasCorrection-SEM",
      description: "R package implementing Bartlett Correction for Likelihood Ratio Test bias reduction in Structural Equation Modelling. First computational framework for SEM bias reduction with applications in psychology and healthcare.",
      domain: "Research",
      icon: <FaChartLine />,
      tech: ["R", "lavaan", "ggplot2", "Computational Statistics"],
      highlights: ["Accurate Model Selection", "Psychology Applications", "Healthcare Validation"],
      github: "https://github.com/twomathematicians-code/BiasCorrection-SEM",
      priority: "Featured"
    },
    {
      title: "FinancialRisk-QuantLib",
      description: "Quantitative finance toolkit featuring VaR calculations, Monte Carlo simulations. time series forecasting (ARIMA, LSTM, Prophet), and portfolio optimization with stress testing capabilities.",
      domain: "Finance",
      icon: <FaChartLine />,
      tech: ["Python", "NumPy", "Pandas", "PyTorch", "yfinance"],
      highlights: ["Risk Assessment", "Strategy Backtesting", "Stress Testing"],
      github: "https://github.com/twomathematicians-code/FinancialRisk-QuantLib",
      priority: "High"
    },
    {
      title: "HealthcareAnalytics-SEM",
      description: "Structural Equation Modelling framework for healthcare analytics including patient outcome prediction, treatment pathway analysis, and cost-effectiveness modelling.",
      domain: "Healthcare",
      icon: <FaHeartbeat />,
      tech: ["R", "lavaan", "Python", "SHAP", "MIMIC-III"],
      highlights: ["Outcome Prediction", "Treatment Effectiveness", "Resource Allocation"],
      github: "https://github.com/twomathematicians-code/HealthcareAnalytics-SEM",
      priority: "High"
    },
    {
      title: "Agent_DeepLearnMaster",
      description: "Deep learning Python agent framework with production-ready implementations for customer churn prediction, credit risk scoring, and disease prediction with model interpretability.",
      domain: "AI/ML",
      icon: <FaBrain />,
      tech: ["Python", "PyTorch", "scikit-learn", "TensorFlow"],
      highlights: ["Model Interpretability", "Production Deployment", "Multi-Domain Applications"],
      github: "https://github.com/twomathematicians-code/Agent_DeepLearnMaster",
      priority: "Medium"
    },
    {
      title: "DefenseOptimization",
      description: "Operations research toolkit for defense applications featuring resource allocation optimization, logistics planning, and strategic simulation models.",
      domain: "Defense",
      icon: <FaShieldAlt />,
      tech: ["Python", "PuLP", "OR-Tools", "Simulation"],
      highlights: ["Resource Optimization", "Logistics Planning", "Risk Assessment"],
      github: "https://github.com/twomathematicians-code/DefenseOptimization",
      priority: "Medium"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <div className="project-domain">
                  <span className="domain-icon">{project.icon}</span>
                  <span className="domain-name">{project.domain}</span>
                </div>
                {project.priority === "Featured" && (
                  <span className="priority-badge featured">Featured</span>
                )}
                {project.priority === "High" && (
                  <span className="priority-badge high">High Priority</span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <strong>Key Features:</strong>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <a href="https://github.com/twomathematicians-code" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
