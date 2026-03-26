import type { Metadata } from 'next'
import { Links } from "@/components/Links";
import Image from 'next/image'  

export const metadata: Metadata = {
    title: 'About',
    description: '10th grade full-stack developer. Building apps, creating YouTube content, and working toward freelancing.',
}

export default function AboutPage() {

  return (
    <main className="py-12">
        <h1 className="page-title mb-6">About Me</h1>

        <hr className="divider mb-6"></hr>

        <div className="flex items-center gap-8 mb-12 flex-wrap">
            <Image
                src="/nam2.png"
                alt="Nam Tran"
                width={175}
                height={175}
                className="rounded-full object-cover"
            />

            <article>
                <p className="section-text">Hi! I'm <span className="font-semibold text-[var(--accent-primary)]">Nam Tran</span>, a 10th grader. i...</p>

                <ul className="section-text mt-4 ml-6 list-disc">
                    <li className="mb-2">
                        create actual full-stack <a href="https://github.com/namatran" className="border-b-[1.5px] text-[var(--accent-primary)]">apps</a> with my learning and ship them,
                    </li>
                    <li className="mb-2">
                        create <a href="https://www.youtube.com/@naminabush" className="border-b-[1.5px] text-[var(--accent-primary)]">
                        videos</a> documenting my learning + calisthenics progress,
                    </li>
                    <li>and I am working toward running my own products and business (like a web / social media agency).</li>
                </ul>
            </article>
        </div>

        <section className="max-w-700 mx-auto mb-12 ">
            <article className="mb-12">
                <h1 className="section-label">Education</h1>

                <div className="border-l-2 pl-3 pt-2.5 pb-3 border-[var(--light-text-hover)]">
                    <p className="section-text mb-1">STEM coursework focused including all AP Physics, computer science, and AP Math + AP seminar</p>
                    <p className="text-xs uppercase text-[var(--light-text-hover)]">(Houston Klein High School Class of 2026)</p>
                </div>
            </article>

            <article className="mb-12">
                <h1 className="section-label">Currently:</h1>

                <ul className="section-text ml-6 list-disc">
                    <li className="mb-2">focused on fullstack apps and mobile app projects</li>
                    <li className="mb-2">going to build a site for my mom's ao dai sewing</li>
                    <li className="mb-2">working to post long-form videos on youtube about projects and entrepreneurship (I might need to invest in a camera or clear my storage)</li>
                    <li className="mb-2">working towards consistent one arm pull up</li>
                </ul>
            </article>

            <article className="mb-6">
                <h1 className="section-label">Other Interests</h1>

                <ul className="section-text ml-6 list-disc">
                    <li className="mb-2">calisthenics + martial arts (vovinam)</li>
                    <li className="mb-2">anime & manga</li>
                    <li className="mb-2">volleyball w/ friends</li>
                    <li className="mb-2">engineering real projects (robotics, arduino, electronics)</li>
                </ul>
            </article>
        </section>

        <hr className="divider mb-6"></hr>

        <h1 className="section-label">Contact!</h1>
        <p className="section-text mb-4">Interested in collaborating, have questions, or want to talk?</p>
        <Links links={[
            { text: 'Email', url: 'mailto:namatrancontact@gmail.com' },
            { text: 'LinkedIn', url: 'https://www.linkedin.com/in/nam-atran/' }, 
            { text: 'GitHub', url: 'https://github.com/namatran' }
        ]}/>
    </main>
  );
}
