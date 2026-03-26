export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    images?: Array<{ src: string; caption?: string }>    
    sections: Array<{ label: string; content: string }>;
    tags: string[];
    links: Array<{ text: string; url: string }>;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'movie-lookup-v2',
        featured: true,
        slug: 'movie-lookup-v2',
        image: '/projects/movie-lookup-v2/movie-detail.png',
        images: [
            { src: '/projects/movie-lookup-v2/home.png', caption: 'Home page with popular movies' },
            { src: '/projects/movie-lookup-v2/search.png', caption: 'Search results' },
            { src: '/projects/movie-lookup-v2/movie-detail.png', caption: 'Movie detail with watchlist button' },
            { src: '/projects/movie-lookup-v2/signup.png', caption: 'Supabase Auth signup flow' },
            { src: '/projects/movie-lookup-v2/watchlist.png', caption: 'Per-user watchlist with RLS' },
        ],
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
        id: 'kleinhacks-whisper',
        featured: true,
        slug: 'kleinhacks-whisper',
        image: '/projects/whisper/home.png',
        images: [
            { src: '/projects/whisper/home.png', caption: 'Landing page' },
            { src: '/projects/whisper/connection.png', caption: 'AI interest matching' },
            { src: '/projects/whisper/chat.png', caption: 'Anonymous chat' },
            { src: '/projects/whisper/loading.png', caption: 'Finding a match' },
        ],
        title: 'Whisper — KleinHacks 2026',
        description: 'Hackathon project: anonymous student chat app with AI interest matching, crisis detection, and content moderation. Built in one day.',
        sections: [
            { label: 'Overview', content: 'An anonymous messaging web app built for KleinHacks 2026. Students sign in with a school email, get matched with someone who shares their interests via AI, and chat anonymously. Includes mental health features: crisis detection, content moderation, and AI-generated icebreakers.' },
            { label: 'How it was built', content: 'Built with Next.js, Socket.io for real-time messaging, and OpenAI for interest matching and moderation. Used v0 by Vercel to prototype the layout quickly, then customized everything from there. Entire project built in 24 hours with a team of 2 (including me).' },
            { label: 'What I learned', content: 'First time using Socket.io for real-time communication and integrating OpenAI into a production feature. Also learned how to work fast to push out a project + vibecoding.' },
        ],
        tags: ['Next.js', 'Socket.io', 'OpenAI', 'TypeScript', 'Real-time'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/kleinhacks-whisper' },
            { text: 'Live Demo', url: 'https://kleinhacks-whisper.vercel.app/' },
        ],
    },
    {
        id: 'movie-lookup-v1',
        featured: true,
        slug: 'movie-lookup-v1',
        image: '/projects/movie-lookup-v1/home.png',
        images: [
            { src: '/projects/movie-lookup-v1/home.png', caption: 'Home page' },
            { src: '/projects/movie-lookup-v1/search.png', caption: 'Search results' },
            { src: '/projects/movie-lookup-v1/movie-detail.png', caption: 'Movie detail page' },
            { src: '/projects/movie-lookup-v1/watchlist.png', caption: 'Shared watchlist' },
        ],
        title: 'Movie Lookup V1',
        description: 'Full-stack capstone: React frontend + Express backend + SQLite + TMDB API proxy. First time deploying a split architecture.',
        sections: [
            { label: 'Overview', content: 'A full-stack movie discovery app with a React/Vite frontend and a separate Express backend. Features include browsing popular movies, search, movie detail pages, and a shared watchlist persisted in SQLite.' },
            { label: 'What I learned', content: 'First time deploying a split frontend/backend architecture — React on Vercel, Express on Railway. Hit real bugs around tmdb_id vs database id conflicts, SQLite boolean storage, and route ordering. This project is what made me want to rebuild it properly as V2.' },
        ],
        tags: ['React', 'Express', 'SQLite', 'Node.js', 'TMDB API', 'Vite'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/movies' },
            { text: 'Live Demo', url: 'https://movies-seven-rosy.vercel.app/' },
        ],
    },
    {
        id: 'pokedex',
        slug: 'pokedex',
        image: '/projects/pokedex/home.png',
        images: [
            { src: '/projects/pokedex/home.png', caption: 'Home page' },
            { src: '/projects/pokedex/list.png', caption: 'Pokémon list' },
            { src: '/projects/pokedex/search.png', caption: 'Search' },
        ],
        title: 'Pokédex',
        description: 'Multi-page React app using PokéAPI with React Router. First time building client-side navigation.',
        sections: [
            { label: 'Overview', content: 'A Pokédex app built with React and React Router that fetches live data from the PokéAPI. Browse Pokémon, view individual detail pages, and navigate between them with client-side routing.' },
            { label: 'What I learned', content: 'First real use of React Router for multi-page navigation without a full page reload. Learned how to structure a React app across multiple routes and how to fetch and display data from a third-party REST API.' },
        ],
        tags: ['React', 'React Router', 'PokéAPI', 'JavaScript'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/pokedex' },
            { text: 'Live Demo', url: 'https://pokedex-one-steel.vercel.app/' },
        ],
    },
    {
        id: 'book-keeper',
        slug: 'book-keeper',
        image: '/projects/book-keeper/get-books.png',
        title: 'Book Keeper',
        images: [
            { src: '/projects/book-keeper/get-books.png', caption: 'Get books info + corresponding author' },
            { src: '/projects/book-keeper/post-books.png', caption: 'Post books info' },
            { src: '/projects/book-keeper/post-authors.png', caption: 'Post author info' },
        ],
        description: 'REST API with multi-table schema, complex JOINs, and advanced SQL queries. Shows backend depth.',
        sections: [
            { label: 'Overview', content: 'A RESTful API built with Express and SQLite featuring a two-table schema with JOINs, complex queries, and a search endpoint.' },
            { label: 'What I learned', content: 'I learned that route ordering matters — specific routes must come before wildcards. Also hit the classic bug of SQLite boolean storage (0/1 vs true/false) and learned how FOREIGN KEY constraints and CASCADE deletes work.' },
        ],
        tags: ['Express', 'SQLite', 'Node.js', 'REST API', 'SQL'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/book-keeper' }
        ]
    },
    {
        id: 'wordle-clone',
        slug: 'wordle-clone',
        image: '/projects/wordle/home.png',
        title: 'Wordle Clone',
        description: 'React rebuild of Wordle. First solo project after learning the fundamentals — state, events, and component logic.',
        sections: [
            { label: 'Overview', content: 'A fully functional Wordle clone built with React. Includes the full game loop: 6 attempts, color-coded feedback for correct/misplaced/wrong letters, and win/loss states.' },
            { label: 'What I learned', content: 'First project where I had to manage non-trivial React state across multiple components. Learned how useState works in practice, how to handle keyboard events, and how to think in components rather than in DOM manipulation.' },
        ],
        tags: ['React', 'JavaScript', 'CSS'],
        links: [
            { text: 'Repository', url: 'https://github.com/namatran/wordle-clone' },
            { text: 'Live Demo', url: 'https://namatran-wordle-clone.vercel.app/' },
        ],
    },
]