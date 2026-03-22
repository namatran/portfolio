export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    images?: string[]
    sections: Array<{ label: string; content: string }>;
    tags: string[];
    links: Array<{ text: string; url: string }>;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'movie-lookup',
        featured: true,
        slug: 'movie-lookup',
        image: '/video.png',
        images: [ '/video.png' ],
        title: 'Movie Lookup V2',
        description: 'Full-stack app with user authentication and personalized watchlists. Built with Next.js and Supabase.',
        sections: [
            { label: 'Overview', content: 'A full-stack movie discovery and watchlist app built with Next.js, React, Supabase, and the TMDB API.' },
            { label: 'What I learned', content: 'Building this taught me Next.js 16 App Router and server/client components, basic supabase authentication and database, and responsive design with Tailwind CSS' }
        ],
        tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/movie-watchlist-v2' }, 
            { text: 'Live Demo', url: 'https://movie-watchlist-v2-9pjc.vercel.app/' }
        ],
    },
    {
        id: 'book-keeper',
        slug: 'book-keeper',
        image: '/video.png',
        title: 'Book Keeper',
        description: 'REST API with multi-table schema, complex JOINs, and advanced SQL queries. Shows backend depth.',
        sections: [
            { label: 'Overview', content: 'A RESTful API built with Express and SQLite featuring a two-table schema with JOINs, complex queries, and a search endpoint.' },
            { label: 'What I learned', content: 'I learned that route ordering matters — specific routes must come before wildcards. Also hit the classic bug of SQLite boolean storage (0/1 vs true/false) and learned how FOREIGN KEY constraints and CASCADE deletes work.' },
        ],
        tags: ['Express', 'SQLite', 'Node.js', 'REST API', 'SQL'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/book-keeper' }
        ]
    }
]