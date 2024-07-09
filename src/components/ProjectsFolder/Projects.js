import './Projects.css';
import { useState } from 'react';
import projects from './ProjectsData.js';

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalProject.image} alt={modalProject.title} />
            <h3>{modalProject.title}</h3>
            <p>{modalProject.description}</p>
            <a href={modalProject.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;