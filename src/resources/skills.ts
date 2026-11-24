import type { IconName } from "./icons";

export type SkillItem = { name: string; icon?: IconName };
export type SkillGroup = { id: string; label: string; summary: string; items: SkillItem[] };

// Source: CV (technical skills). Edit freely, the Skills explorer on the home page reads this file.
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    summary: "The languages I use for applications, scripting and coursework.",
    items: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "PHP", icon: "php" },
      { name: "C++", icon: "cpp" },
      { name: "C" },
      { name: "PL/SQL" },
    ],
  },
  {
    id: "web",
    label: "Web",
    summary: "Front-end and back-end stacks used in my internships and projects.",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "Symfony", icon: "symfony" },
      { name: "Jakarta EE" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "REST APIs" },
      { name: "JWT" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    summary: "Native and cross-platform mobile applications.",
    items: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Android", icon: "android" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    id: "data",
    label: "Databases",
    summary: "Relational and document databases.",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "devops",
    label: "DevOps and Cloud",
    summary: "Containerization, CI/CD pipelines and cloud deployment.",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Podman", icon: "podman" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Terraform", icon: "terraform" },
      { name: "AWS", icon: "aws" },
      { name: "Trivy" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    id: "ai",
    label: "AI and Data",
    summary: "Machine learning, LLM integration and big data processing.",
    items: [
      { name: "Machine Learning" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "XGBoost" },
      { name: "Groq API" },
      { name: "Hadoop", icon: "hadoop" },
      { name: "Apache Spark", icon: "spark" },
    ],
  },
  {
    id: "tools",
    label: "Tools and Design",
    summary: "Daily tooling, ERP development and design software.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Odoo", icon: "odoo" },
      { name: "Figma", icon: "figma" },
      { name: "UML" },
      { name: "Agile/Scrum" },
      { name: "Photoshop" },
      { name: "Illustrator" },
    ],
  },
];
