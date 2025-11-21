export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: string;
}

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", level: "Intermediate", category: "Frontend" },
  { id: "nextjs", name: "Next.js", level: "Intermediate", category: "Frontend" },
  { id: "html-css", name: "HTML/CSS", level: "Intermediate", category: "Frontend" },
  
  // Backend
  { id: "nodejs", name: "Node.js", level: "Intermediate", category: "Backend" },
  { id: "express", name: "Express", level: "Intermediate", category: "Backend" },
  
  // Database
  { id: "mongodb", name: "MongoDB", level: "Intermediate", category: "Database" },
  { id: "mysql", name: "MySQL", level: "Intermediate", category: "Database" },
  { id: "oracle", name: "Oracle DB", level: "Intermediate", category: "Database" },
  
  // Real-time & Communication
  { id: "socketio", name: "Socket.io", level: "Intermediate", category: "Real-time" },
  { id: "websockets", name: "WebSockets", level: "Intermediate", category: "Real-time" },
  
  // Mobile
  { id: "flutter", name: "Flutter", level: "Intermediate", category: "Mobile" },
  { id: "firebase", name: "Firebase", level: "Intermediate", category: "Mobile" },
  { id: "fcm", name: "Push Notifications", level: "Intermediate", category: "Mobile" },
  
  // Full Stack
  { id: "mern", name: "MERN Stack", level: "Intermediate", category: "Full Stack" },
];

export const getSkillsByCategory = () => {
  const categories: { [key: string]: Skill[] } = {};
  
  skills.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });
  
  return categories;
};
