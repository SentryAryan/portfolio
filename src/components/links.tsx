import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiX,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:aryansri200119@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/SentryAryan',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/aryan-srivastava-261974208/',
    },
    {
      icon: SiMedium,
      href: 'https://accvsref.hashnode.dev/',
    },
    {
      icon: SiX,
      href: 'https://x.com/Aryansr38439504',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
