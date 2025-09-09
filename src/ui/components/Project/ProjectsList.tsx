import { ProjectCardCatalog } from './ProjectCardCatalog';

import type { Project } from '@/api/projects';

interface ProjectsListProps {
  projects: Project[];
}

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  if (!projects?.length) {
    return <div className="text-center text-gray-400 pt-4">No projects found</div>;
  }
  return (
    <div className="w-full space-y-4 pt-4">
      {projects.map((project) => (
        <ProjectCardCatalog
          key={project.uuid}
          uuid={project.uuid}
          title={project.title}
          description={project.description}
          status={project.status}
        />
      ))}
    </div>
  );
}
