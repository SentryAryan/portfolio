import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">Aryan Srivastava</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Aryan Srivastava, software engineer based in India.
        </p>

        <br />

        <p>
          This is my portfolio. Check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/SentryAryan"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>

      <Links />
    </div>
  )
}
