import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import styles from '@/components/ProjectCard.module.css'

export default function WorksPage() {
    return (
        <main className="py-12">
            <h1 className="page-title mb-1">Work</h1>
            <p className="page-subtitle mb-6">Some of the work that i have been doing!</p>

            <hr className="divider mb-6" />    

            <div className={styles.grid}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    )
}