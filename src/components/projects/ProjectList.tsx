import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }: any) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project: any) => (
          <ProjectSummary project={project} key={project.id} />
        ))}
    </div>
  );
};

export default ProjectList;
