import { Badge } from "@/components/ui/badge";
import type { SkillLevel } from "@/data/skills";

interface SkillBadgeProps {
  name: string;
  level: SkillLevel;
}

const levelColors: Record<SkillLevel, string> = {
  Beginner: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  Intermediate: "bg-primary/10 text-primary border-primary/20",
  Advanced: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  Expert: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
};

export const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <Badge variant="outline" className={`${levelColors[level]} font-medium`}>
        {name}
      </Badge>
      <span className="text-xs text-muted-foreground">{level}</span>
    </div>
  );
};
