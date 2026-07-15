import React, { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa';
import './Projects.css';

const GITHUB_USER = 'twomathematicians-code';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fallbackProjects = [
    {
      name: 'CausalInference-Toolkit',
      description: 'Causal inference workflows for experimentation and policy decisions.',
      html_url: 'https://github.com/twomathematicians-code/CausalInference-Toolkit',
      language: 'Python',
      topics: ['causal-inference', 'machine-learning'],
      stargazers_count: 0,
      forks_count: 0,
      domain: 'Gen AI / ML'
    },
    {
      name: 'BiasCorrection-SEM',
      description: 'Bias reduction methods for structural equation modelling in applied domains.',
      html_url: 'https://github.com/twomathematicians-code/BiasCorrection-SEM',
      language: 'R',
      topics: ['statistics', 'sem', 'data-science'],
      stargazers_count: 0,
      forks_count: 0,
      domain: 'Data Engineering'
    },
    {
      name: 'FinancialRisk-QuantLib',
      description: 'Quant analytics for risk modelling, forecasting, and simulation.',
      html_url: 'https://github.com/twomathematicians-code/FinancialRisk-QuantLib',
      language: 'Python',
      topics: ['finance', 'forecasting', 'ml'],
      stargazers_count: 0,
      forks_count: 0,
      domain: 'Applied Domain Systems'
    }
  ];

  const inferDomain = (repo) => {
    const text = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')} ${repo.language || ''}`.toLowerCase();
    if (/genai|llm|machine|ml|deep|neural|pytorch|tensorflow/.test(text)) return 'Gen AI / ML';
    if (/data|etl|analytics|sql|pandas|warehouse|sem|statistics/.test(text)) return 'Data Engineering';
    if (/compute|infrastructure|docker|kubernetes|cloud|deploy|devops/.test(text)) return 'Compute Systems';
    if (/finance|health|defense|business|risk|causal/.test(text)) return 'Applied Domain Systems';
    return 'Technology Systems';
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data = await response.json();
        const publicRepos = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({ ...repo, domain: inferDomain(repo) }))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepositories(publicRepos.slice(0, 9));
      } catch (fetchError) {
        setError('Unable to load live repository feed. Showing curated projects.');
        setRepositories(fallbackProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const summary = useMemo(() => {
    const stars = repositories.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);
    const domains = new Set(repositories.map((repo) => repo.domain)).size;
    return { totalRepos: repositories.length, totalStars: stars, activeDomains: domains };
  }, [repositories]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Repository Intelligence</h2>
        <p className="projects-subtitle">
          Live GitHub-synced project objects mapped across data, compute, and technology delivery.
        </p>

        {!isLoading && (
          <div className="projects-summary">
            <div><strong>{summary.totalRepos}</strong> repositories tracked</div>
            <div><strong>{summary.totalStars}</strong> total stars</div>
            <div><strong>{summary.activeDomains}</strong> active system domains</div>
          </div>
        )}

        {isLoading && <p className="projects-status">Loading live repository feed...</p>}
        {error && <p className="projects-status">{error}</p>}

        <div className="projects-grid">
          {repositories.map((project) => (
            <div key={project.id || project.name} className="project-card card">
              <div className="project-header">
                <div className="project-domain">
                  <span className="domain-icon">■</span>
                  <span className="domain-name">{project.domain}</span>
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              
              <p className="project-description">
                {project.description || 'Live repository with deployment-ready engineering assets.'}
              </p>

              <div className="project-metrics">
                <span><FaStar /> {project.stargazers_count || 0}</span>
                <span><FaCodeBranch /> {project.forks_count || 0}</span>
                {project.language && <span>{project.language}</span>}
              </div>

              <div className="tech-stack">
                {(project.topics && project.topics.length > 0 ? project.topics.slice(0, 4) : ['repo-object']).map((tech, idx) => (
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
