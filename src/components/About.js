import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>Forward Deployment Engineer</strong> with a deep foundation in pure mathematics, statistical modelling, and production AI implementation.
            </p>

            <p>
              My delivery style is repository-first: each codebase is treated as a deployable system object where data contracts, compute workflows, and technology integrations are mapped to measurable outcomes.
            </p>

            <p>
              With <strong>10+ years of experience</strong> across academia, entrepreneurship, and data engineering, I build GenAI/ML capabilities for multiple domains while maintaining research-grade rigor.
            </p>

            <div className="about-details">
              <div className="detail-section">
                <h3>Education</h3>
                <div className="education-item">
                  <div className="edu-degree">M.Sc. Statistical Data Analysis</div>
                  <div className="edu-school">Ghent University, Belgium</div>
                  <div className="edu-year">2024 - Present</div>
                  <div className="edu-thesis">
                    <strong>Thesis:</strong> Reduction of Bias in Likelihood Ratio Tests for SEM
                  </div>
                </div>
                
                <div className="education-item">
                  <div className="edu-degree">M.Sc. Pure Mathematics</div>
                  <div className="edu-school">Gujarat University, India</div>
                  <div className="edu-year">2016 - 2018</div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Location Timeline</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-period">Sep 2024 - Present</div>
                    <div className="timeline-location">Ghent, Belgium 🇧🇪</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-period">2018 - Aug 2024</div>
                    <div className="timeline-location">India 🇮🇳</div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Languages</h3>
                <div className="languages">
                  <span className="badge">English (C2)</span>
                  <span className="badge">Hindi (C2)</span>
                  <span className="badge">Gujarati (Native)</span>
                  <span className="badge">Dutch (Learning)</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>Research Interests</h3>
                <div className="interests">
                  <span className="badge">Forward Deployment</span>
                  <span className="badge">GenAI Systems</span>
                  <span className="badge">Applied ML</span>
                  <span className="badge">Data Engineering</span>
                  <span className="badge">Causal Inference</span>
                  <span className="badge">Computational Statistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
