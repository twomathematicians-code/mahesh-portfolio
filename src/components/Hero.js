import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Mahesh Solanki
            </h1>
            
            <h2 className="hero-subtitle">
              Computational Scientist & Mathematician
            </h2>

            <div className="hero-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Ghent, Belgium</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:maheshsinh1910@gmail.com">maheshsinh1910@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://linkedin.com/in/mahesh-solanki-16b9a6a5" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <a href="https://github.com/twomathematicians-code" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="hero-summary">
              <p>
                Computational Scientist specializing in <strong>causal inference</strong>, <strong>structural equation modelling</strong>, and <strong>machine learning</strong>. Currently researching bias reduction methods at Ghent University, Belgium.
              </p>
              <p>
                With 10+ years of experience spanning pure mathematics, statistical analysis, and data engineering, I architect computational solutions for complex problems in Business, Finance, Healthcare, and Defense domains.
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">M.Sc. Degrees</div>
              </div>
              <div className="stat">
                <div className="stat-number">9+</div>
                <div className="stat-label">GitHub Repos</div>
              </div>
              <div className="stat">
                <div className="stat-number">4</div>
                <div className="stat-label">Domains</div>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:maheshsinh1910@gmail.com" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span>neural_architecture.py</span>
              </div>
              <pre><code>{`# Computational Framework
class ComputationalScientist:
    def __init__(self):
        self.name = "Mahesh Solanki"
        self.paradigm = "Mathematical AI"
        self.location = "Ghent, Belgium 🇧🇪"
        
    @property
    def education(self):
        return [
            "M.Sc. Statistical Data Analysis",
            "M.Sc. Pure Mathematics"
        ]
    
    @property
    def research(self):
        return "SEM Bias Reduction"
    
    @property
    def domains(self):
        return ["Finance", "Healthcare", 
                "Defense", "Business"]
    
    @property
    def stack(self):
        return ["Python", "R", "PyTorch", 
                "TensorFlow", "lavaan"]
    
    def solve(self, problem):
        # Mathematical rigor + AI
        return self.model(problem).optimize()`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
