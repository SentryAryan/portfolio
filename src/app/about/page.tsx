import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a software engineer with a passion for building scalable and
          efficient web applications. I have a strong foundation in computer
          science and software engineering principles, with Next.js, React,
          Express, and Node.js being my strongest points.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
