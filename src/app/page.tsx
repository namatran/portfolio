import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import styles from '@/components/ProjectCard.module.css'
import { CTAButton } from "@/components/CTAButton";
import { ViewAllButton } from '@/components/ViewAllButton';

export default function Home() {
  const featured = projects.filter(p => p.featured)

  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-[13px] leading-[1.1] font-medium uppercase tracking-[0.08em] mb-4 text-[var(--light-text-secondary)]">Creator & Full-stack Developer</div>
        <h1 className="text-5xl font-medium mb-6 max-w-150">
          Building <em style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>real</em> projects
        </h1>
        <p className="text-[16px] leading-[1.6] max-w-125 mb-10 text-[var(--light-text-secondary)]">
          I build real-world web apps and share content around what I'm building.
        </p>

        <CTAButton/>
      </div>

      <section className="max-w-300 mx-auto px-8">
        <h1 className="page-title">Featured Work</h1>
        <p className="page-subtitle mb-6">Some of the projects that showcase what I can build</p>
        
        <hr className="divider mb-6" />

        <div className={styles.grid}>
            {featured.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        <ViewAllButton/>
      </section>
    </main>
  );
}
