// Project Card - Contains image, content, and tags. Screw CSS I spend 2 hours on that
'use client'

import Link from 'next/link'
import { Project } from "@/lib/projects";
import styles from './ProjectCard.module.css'
import { TagList } from './Taglist';
import { useNoteSound } from '@/lib/useNoteSound';
import Image from 'next/image';

export function ProjectCard({ project }: { project: Project }) {
    const { playClick2 } = useNoteSound()

    return (
        <Link
            href={`/work/${project.slug}`}
            onClick={() => playClick2()}
            className={styles.card}
            aria-label={`View project: ${project.title}`}
        >
            <div className={styles.image}>
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    // sizes tells the browser how wide the image will render at each breakpoint
                    // card grid is 1 col on mobile, 2 col on desktop
                    sizes="(max-width: 640px) 100vw, 50vw"
                    // featured cards are above the fold — eager loads them immediately
                    // non-featured cards on /work are below fold but we use eager for
                    // simplicity since the grid is the first thing on that page too
                    loading="eager"
                    className="object-cover"
                />
            </div>
            
            <div className={styles.content}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <TagList tags={project.tags} size="sm" />
            </div>
        </Link>
    )
}