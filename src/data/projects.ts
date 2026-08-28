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
        category: 'Full-Stack Application',
        problem: 'Healthcare operations involve multiple interconnected workflows, including scheduling, provider management, patient-related information, and operational reporting. The goal of this project is to explore how those workflows could be organized into a single maintainable application.',
        solution: 'Build a centralized web application with a React frontend, API layer and relational database designed around clear models and strong business workflows.',
        architecture: [
            'React + TypeScript Frontend',
            'RESTful backend API',
            'Node.js services',
            'PostgreSQL database',
        ],
        challenge: [
            'Designing a database structure that supports multiple related operational workflows.',
            'Keeping frontend and backend data models consistent.',
            'Designing an interface that remains easy to navigate as functionality grows.',
        ],
        results: [
            'Created a realistic full-stack application arcitecture.',
            'Utilized typed fronted development with TypeScript.',
            'Implemented reusable components and data-driven UI patterns.',
        ],
    },
    {
        id: 'equipment-management',
        title: 'Equipment Management Platform',
        description: 'A full-stack equipment tracking and inventory platform designed around real-world technical operations workflows.',
        technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB',],
        githubUrl: '#',
        liveDemoUrl: '#',
        featured: true,
        category: 'Operations Platform',
        problem:
            'Equipment-heavy organizations need accurate visibility into inventory, equipment status, location, maintenance history, and movement between facilities.',
        solution:
            'Create an application that models equipment as trackable assets and provides operational workflows for inventory management, status tracking, and equipment movement.',
        architecture: [
            'React + TypeScript frontend',
            'Python FastAPI backend',
            'REST API',
            'MongoDB document database',
        ],
        challenge: [
            'Designing flexible equipment records that can support different equipment types.',
            'Tracking equipment movement and status changes.',
            'Creating useful operational views without overwhelming users with information.',
        ],
        results: [
            'Created a practical operations-focused application.',
            'Demonstrated API development using Python.',
            'Applied software design concepts to a real-world operational domain.',
        ],
    },
    {
        id: 'ai-operations-analyst',
        title: 'AI Operations Analyst',
        description: 'An analytics application that uses operational datasets and generative AI to help identifty trends, patters and actionable insights.',
        technologies: ['React', 'TypeScript', 'Python', 'GenAI', 'REST API',],
        githubUrl: '#',
        liveDemoUrl: '#',
        featured: true,
        category: 'AI / Analytics',
        problem:
            'Operational data often contains useful patterns that are difficult to identify quickly when teams rely on manually reviewing spreadsheets and reports.',
        solution:
            'Build an analytics application that combines traditional metrics with generative AI to summarize operational trends and help users investigate potential issues.',
        architecture: [
            'React + TypeScript dashboard',
            'Python analytics service',
            'REST API',
            'Generative AI integration',
        ],
        challenge: [
            'Designing useful prompts and structured AI outputs.',
            'Separating deterministic calculations from AI-generated interpretation.',
            'Considering responsible and transparent use of generative AI.',
        ],
        results: [
            'Demonstrated practical generative AI integration.',
            'Combined traditional analytics with AI-assisted analysis.',
            'Created an application focused on actionable operational insights.',
        ],
    },
]