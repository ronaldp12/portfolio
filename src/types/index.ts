export interface Experience {
    id: string;
    position: string;
    company: string;
    period: string;
    description: string;
    icon: string;
}

export interface Skill {
    name: string;
    level?: number;
    category: 'technical' | 'soft';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    stack: string[];
    demoUrl?: string;
    repoUrl?: string;
    screenshots?: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
