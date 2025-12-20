import { useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import {
  ProjectNotFound,
  ProjectHero,
  ProjectOverview,
  ProjectTechnologies,
  ProjectFeatures,
  ProjectChallenges,
} from '../components/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16 dark:bg-slate-950">
      <ProjectHero project={project} />

      <div className="mx-auto mt-12 flex max-w-5xl xl:max-w-[80vw] 4xl:max-w-[70vw] flex-col gap-12 px-8 sm:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] border-b border-slate-200 pb-10 dark:border-slate-800">
          {project.detailedDescription && (
            <ProjectOverview detailedDescription={project.detailedDescription} />
          )}

          {project.challenges && (
            <ProjectChallenges challenges={project.challenges} />
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] pb-10">
          {project.technologies && project.technologies.length > 0 && (
            <ProjectTechnologies technologies={project.technologies} />
          )}

          {project.features && project.features.length > 0 && (
            <ProjectFeatures features={project.features} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
