
export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  achievements?: string[];
  skills?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  title: string;
  provider: string;
  description: string;
  link: string;
}

export interface Skill {
  name: string;
  percentage: number;
}
