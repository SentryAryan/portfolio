const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
}[] = [
  {
    company: 'Genpact',
    role: 'Full Stack Developer',
    description:
      'Designed, developed, and maintained internal and client-facing web applications, including a time-sheet system (Next.js) and an e-commerce platform (React, Spring Boot, Node.js)./Implemented UI-UX features such as NavBars, SearchBars (debounced), filters with pagination, complex forms, theming (Tailwind v4, CSS variables), and custom components (Shadcn, Aceternity, 21st.dev) aligned with Figma designs./Built and optimized backend systems with authentication (Clerk, NextAuth and Auth.js, custom token-based),paginated and filtered routes, and database integration (MongoDB, MySQL, PostgreSQL) with models for timesheets, users, carts, subscriptions, and payments.Explored and integrated modern tools and architectures, including serverless, microservices, monorepos, backend-as-aservice platforms (Supabase, Firebase, Appwrite, Convex), and AI-powered routes (Hugging Face, Vercel AI SDK)./Explored and integrated modern tools and architectures, including serverless, microservices, monorepos, backend-as-aservice platforms (Supabase, Firebase, Appwrite, Convex), and AI-powered routes (Hugging Face, Vercel AI SDK)/Collaborated using GitHub, Figma, Eraser io, and Miro, actively participating in team meetings to track progress, solve problems, and share knowledge',
    startDate: 'Oct 2024',
    endDate: 'Sept 2025',
  },
  {
    company: 'Internshala',
    role: 'Web Developer Intern',
    description:
      'Developed responsive UIs from Figma designs using React, Next.js, and custom libraries (shadcn-ui, Aceternity UI),implementing advanced features like debounced search, paginated filters, multi-step forms, and dynamic theming./Built robust authentication systems with Clerk, NextAuth, and custom JWT-based accessand refresh token flows to secure sensitive endpoints and manage user sessions./Engineered scalable REST APIs with Node.js and Express and Spring Boot, handling server-side pagination, data filtering, and optimized database queries./Designed and maintained schemas across SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases, balancing transactional integrity with real-time performance./Delivered end-to-end full-stack projects including Secret Chat App (anonymous encrypted messaging platform with AI-powered message generation using Mistral API), Movie App (feature-rich movie discovery app with search, filtering, and real-time API integration), and Mega Blog App (blogging platform with secure Appwrite backend, rich text editor, and image upload support).',
    startDate: 'Sept 2023',
    endDate: 'Sept 2024',
  },
]

export default PAST_ROLES
