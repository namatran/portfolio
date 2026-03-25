import { Metadata } from 'next'
import { use } from 'react'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'

import { ProjectNav } from '@/components/ProjectNav'
import { TagList } from '@/components/Taglist'
import { Links } from '@/components/Links'
import { Gallery } from '@/components/Gallery'

type Props = { params: Promise<{ slug: string }> }
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)
 
    if (!project) return { title: 'Project Not Found' }
 
    return {
        title: project.title,
        description: project.description,
    }
}

export function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = projects.find(p => p.slug === slug)

    if (!project) notFound()

    return (
        <main className="py-12">
            <ProjectNav />

            <h1 className="page-title mb-6">{project.title}</h1>      

            { /* <div className="w-full h-136 bg-gradient-to-tr from-emerald-600/[0.1] to-yellow-500/[0.1] rounded-lg flex items-center justify-center text-[120px] mb-12">
                {project.image} 
            </div> */}

            <div className="w-full rounded-xl overflow-hidden mb-12">
                <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                />
            </div>

            <hr className="divider mb-12" />

            <div className="mx-2 mt-8">
                
                {project.sections.map((section, i) => (
                    <section key={i} className="mb-8">
                        <p className="section-label">{section.label}</p>
                        <p className="section-text">{section.content}</p>
                    </section>
                ))}

                <section className="mb-8">
                    <p className="section-label">Tools & Skills</p>
                        <TagList tags={project.tags}/>
                </section>

                <section className='mb-8'>
                    <p className="section-label">Links</p>
                    <Links links={project.links}/>
                </section>

                {project.images && project.images.length > 0 && (
                    <section className="mb-8">
                        <p className="section-label">Gallery</p>
                        <Gallery images={project.images} />
                    </section>
                )}
            </div>

        </main>
    )
}