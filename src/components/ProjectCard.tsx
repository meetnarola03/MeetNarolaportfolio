import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="card-elevated h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {project.shortDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.longDescription}
        </p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to={`/projects/${project.id}`} className="flex-1">
          <Button variant="default" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
