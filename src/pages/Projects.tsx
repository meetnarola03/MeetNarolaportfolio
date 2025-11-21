import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          A collection of full-stack applications demonstrating expertise in web and mobile development,
          real-time communication, and scalable architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
