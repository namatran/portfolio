import { use } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

import { ProjectNav } from '@/components/ProjectNav'
import { TagList } from '@/components/Taglist'
import { ProjectLinks } from '@/components/ProjectLinks'


export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = projects.find(p => p.slug === slug)

    if (!project) notFound()

    return (
        <main className="py-12">
            <ProjectNav />

            <h1 className="page-title mb-6">{project.title}</h1>                

            <div className="w-full h-136 bg-gradient-to-tr from-emerald-600/[0.1] to-yellow-500/[0.1] rounded-lg flex items-center justify-center text-[120px] mb-12">
                {project.image} 
            </div>   

            <hr className="divider mb-12" />

            {/* max-w-2xl */}
            <div className="mx-2 mt-8">
                
                {project.sections.map((section, i) => (
                    <section key={i} className="mb-8">
                        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--light-text-secondary)' }}>{section.label}</p>
                        <p className="text-sm leading-relaxed">{section.content}</p>
                    </section>
                ))}

                <section className="mb-8">
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--light-text-secondary)' }}>Tools & Skills</p>
                        <TagList tags={project.tags}/>
                </section>

                <section>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--light-text-secondary)' }}>Links</p>
                    <ProjectLinks links={project.links}/>
                </section>
            </div>

        </main>
    )
}