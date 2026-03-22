import { use } from 'react'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'

import { ProjectNav } from '@/components/ProjectNav'
import { TagList } from '@/components/Taglist'
import { Links } from '@/components/Links'
import { ProjectGallery } from '@/components/ProjectGallery'

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

            <div className="relative w-full h-136 rounded-xl overflow-hidden mb-12">
                <Image
                    src={project.image}
                    alt="Project image"
                    fill
                    className="object-cover"
                />
            </div>

            <hr className="divider mb-12" />

            {/* max-w-2xl */}
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
                        <ProjectGallery images={project.images} />
                    </section>
                )}
            </div>

        </main>
    )
}