import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "CausalInference-Toolkit",
      description: "Comprehensive causal inference toolkit implementing Propensity Score Matching, Instrumental Variables, Double Machine Learning, and Causal Discovery Algorithms for high-stakes decision making.",
      domain: "Multi-Domain",
      domainIcon: <FaBrain />,
      tech: ["Python", "DoWhy", "EconML", "CausalNex"],
      features: ["Treatment Effect Estimation", "Marketing Campaign ROI", "Risk Factor Identification"],
      color: "primary",
      github: "https://github.com/twomathematicians-code/CausalInference-Toolkit",
      priority: "HIGH"
    },
    {
      title: "BiasCorrection-SEM",
      description: "R package implementing Bartlett Correction for Likelihood Ratio Test bias reduction in Structural Equation Modelling. First computational framework for SEM bias reduction.",
      domain: "Research",
      domainIcon: <FaChartLine />,
      tech: ["R", "lavaan", "ggplot2", "Computational Statistics"],
      features: ["Accurate Model Selection", "Psychology Applications", "Healthcare Validation"],
      color: "secondary",
      github: "https://github.com/twomathematicians-code/BiasCorrection-SEM",
      priority: "HIGH"
    },
    {
      title: "FinancialRisk-QuantLib",
      description: "Quantitative finance toolkit featuring VaR calculations, Monte Carlo simulations, time series forecasting (ARIMA, LSTM, Prophet), and portfolio optimization.",
      domain: "Finance",
      domainIcon: <FaChartLine />,
      tech: ["Python", "NumPy", "Pandas", "PyTorch", "yfinance"],
      features: ["Risk Assessment", "Strategy Backtesting", "Stress Testing"],
      color: "accent",
      github: "https://github.com/twomathematicians-code/FinancialRisk-QuantLib",
      priority: "HIGH"
    },
    {
      title: "HealthcareAnalytics-SEM",
      description: "Structural Equation Modelling framework for healthcare analytics including patient outcome prediction, treatment pathway analysis, and cost-effectiveness modelling.",
      domain: "Healthcare",
      domainIcon: <FaHeartbeat />,
      tech: ["R", "lavaan", "Python", "SHAP", "MIMIC-III"],
      features: ["Outcome Prediction", "Treatment Effectiveness", "Resource Allocation"],
      color: "primary",
      github: "https://github.com/twomathematicians-code/HealthcareAnalytics-SEM",
      priority: "HIGH"
    },
    {
      title: "Agent_DeepLearnMaster",
      description: "Deep learning Python agent framework with production-ready implementations for customer churn prediction, credit risk scoring, and disease prediction.",
      domain: "AI/ML",
      domainIcon: <FaBrain />,
      tech: ["Python", "PyTorch", "scikit-learn", "TensorFlow"],
      features: ["Model Interpretability", "Production Deployment", "Multi-Domain Applications"],
      color: "secondary",
      github: "https://github.com/twomathematicians-code/Agent_DeepLearnMaster",
      priority: "FEATURED"
    },
    {
      title: "DefenseOptimization",
      description: "Operations research toolkit for defense applications featuring resource allocation optimization, logistics planning, and strategic simulation models.",
      domain: "Defense",
      domainIcon: <FaShieldAlt />,
      tech: ["Python", "PuLP", "OR-Tools", "Simulation"],
      features: ["Resource Optimization", "Logistics Planning", "Risk Assessment"],
      color: "accent",
      github: "https://github.com/twomathematicians-code/DefenseOptimization",
      priority: "MEDIUM"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-domain">
                  <span className="domain-icon">{project.domainIcon}</span>
                  <span className="domain-name">{project.domain}</span>
                </div>
                {project.priority === "HIGH" && (
                  <span className="priority-badge">🔥 High Priority</span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    • {feature}
                  </span>
                ))}
              </div>

              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/twomathematicians-code"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
