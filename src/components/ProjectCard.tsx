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
        <Link href={`/work/${project.slug}`} onClick={() => playClick2()} className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={project.image}
                    alt="Project image"
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <TagList tags={project.tags} size="sm" />
            </div>
        </Link>
    )
}