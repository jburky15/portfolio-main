import type {Project} from '../types/project';

export const projects: Project[] = [
    {
        id: 'healthcare-operations',
        title: 'Healthcare Operations Platform',
        description: 'A full-stack operations platform designed to manage appointments, providers, workflows and operational metrics',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
        githubUrl: '#',
        liveDemoUrl: '#',
        featured: true,
    },
    {
      id: 'equipment-management',
      title: 'Equipment Management Platform',
      description: 'A full-stack equipment tracking and inventory platform designed around real-world technical operations workflows.',
      technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB',],
      githubUrl: '#',
      liveDemoUrl: '#',
      featured: true,  
    },
    {
        id: 'ai-operations-analyst',
        title: 'AI Operations Analyst',
        description: 'An analytics application that uses operational datasets and generative AI to help identifty trends, patters and actionable insights.',
        technologies: ['React', 'TypeScript', 'Python', 'GenAI', 'REST API',],
        githubUrl: '#',
        liveDemoUrl: '#',
        featured: true,
    },
]