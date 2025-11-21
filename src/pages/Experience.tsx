import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Luxsvara",
    website: "luxsvara.com",
    period: "May 2025 - Oct 2025",
    description: "Contributed to full-stack development projects, building scalable web applications and implementing modern development practices.",
    highlights: [
      "Developed responsive web applications using React and modern JavaScript",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and maintained code quality standards",
      "Optimized application performance and user interface components",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
  },
  {
    title: "Full-Stack Developer",
    company: "Various Projects",
    period: "2024 - 2025",
    description: "Developed and deployed multiple full-stack applications across web and mobile platforms.",
    highlights: [
      "Built 5+ production-ready applications with real-world impact",
      "Implemented real-time features using Socket.io and WebRTC",
      "Developed cross-platform mobile apps with Flutter and Firebase",
      "Integrated payment gateways and third-party APIs",
      "Optimized application performance and user experience",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Flutter", "Firebase", "Socket.io"],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Professional <span className="gradient-text">Experience</span>
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elevated">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
