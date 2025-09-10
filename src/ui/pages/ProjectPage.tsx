import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button } from '../components/Button/Button';

import { getProjectById, Project } from '@/api/projects';
import { ProjectCardFull } from '@/ui/components/Project/ProjectCardFull';

export function ProjectPage() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uuid) return;

    const fetchData = async () => {
      try {
        const project = await getProjectById(uuid);
        setProject(project);
      } catch (err) {
        console.error('Error loading project', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [uuid]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!project) {
    return (
      <div className="p-4 text-center">
        <h2 className="heading-2">Project not found</h2>
        <Button
          states={[{ label: 'Back' }, { label: 'Back' }]}
          initialIndex={0}
          onClick={() => navigate(-1)}
          className="mt-4"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 space-y-6">
      {/* Заголовок страницы */}
      <h1 className="heading-2">{project.title}</h1>

      {/* Карточка организации */}
      <ProjectCardFull
        title={project.title}
        description={project.description}
        status={project.status}
        location={project.location}
      />

      {/* Кнопки «Join» и «Back» */}
      <div className="flex space-x-4">
        <Button
          states={[
            { label: 'Back' },
            { label: 'Going back...' },
            { label: 'Backed' },
            { label: 'Back', textClass: 'text-link' },
          ]}
          initialIndex={3}
          transitionMap={{ 3: 1 }}
          className="flex-1"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}
