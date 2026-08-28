export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveDemoUrl?: string
    featured: boolean
    category: string
    problem: string
    solution: string
    architecture: string[]
    challenge: string[]
    results: string[]
}