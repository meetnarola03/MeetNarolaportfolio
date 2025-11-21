import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "@/components/SkillBadge";
import { getSkillsByCategory } from "@/data/skills";

export default function About() {
  const skillsByCategory = getSkillsByCategory();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h1>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Full-stack developer with a BSc(IT) degree, specializing in building scalable 
              web and mobile applications. Experienced in the MERN stack, real-time communication 
              technologies, and cross-platform mobile development.
            </p>
            <p>
              I've worked on diverse projects ranging from car rental systems to real-time 
              screen sharing applications, consistently delivering robust solutions that solve 
              real-world problems.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill) => (
                    <SkillBadge
                      key={skill.id}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Bachelor of Science (IT)</h3>
              <p className="text-muted-foreground">
                Focused on software development, database management, and web technologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
