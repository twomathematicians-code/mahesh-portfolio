import React from 'react';
import './Hero.css';

const Hero = () => {
  const systemObjects = [
    {
      title: 'Data Object',
      description: 'Telemetry, feature stores, and domain signals organized for live decision loops.'
    },
    {
      title: 'Compute Object',
      description: 'Model training, evaluation, and deployment pipelines built for reliability.'
    },
    {
      title: 'Technology Object',
      description: 'GenAI + ML + analytics libraries connected to real production use-cases.'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Mahesh Solanki
            </h1>
            
            <h2 className="hero-subtitle">
              Forward Deployment Engineer · GenAI · ML · Data Systems
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
                I design and deploy <strong>production-facing AI systems</strong> that connect data pipelines, model services, and domain workflows across business, finance, healthcare, and defense.
              </p>
              <p>
                This portfolio is organized with a minimal concept and continuously aligned to my GitHub repository activity so project intelligence stays current as libraries evolve.
              </p>
            </div>

            <div className="system-objects">
              {systemObjects.map((object) => (
                <article key={object.title} className="system-object">
                  <h3>{object.title}</h3>
                  <p>{object.description}</p>
                </article>
              ))}
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Live Repository Feed</a>
              <a href="mailto:maheshsinh1910@gmail.com" className="btn btn-secondary">Discuss Deployment Work</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span>forward_deployment_manifest.yaml</span>
              </div>
              <pre><code>{`operator: Mahesh Solanki
role: Forward Deployment Engineer
mode: active

pipeline:
  source: github.com/twomathematicians-code/*
  ingestion: "repo metadata + language + topic map"
  routing:
    - "GenAI / ML systems"
    - "Data + analytics workflows"
    - "Domain delivery: finance | healthcare | defense | business"
  objective: "ship measurable impact with reliable model operations"`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
