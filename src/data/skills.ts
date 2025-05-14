import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiExpress,
  SiSpringboot,
  SiTailwindcss,
  SiGit,
  SiGitlab,
  SiGithub,
  SiTypescript,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nextjs',
          icon: SiNextdotjs,
        },
        {
          skill: 'express',
          icon: SiExpress,
        },
        {
          skill: 'springboot',
          icon: SiSpringboot,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
    {
      field: 'Tools',
      skills: [
        {
          skill: 'git',
          icon: SiGit,
        },
        {
          skill: 'github',
          icon: SiGithub,
        },
        {
          skill: 'gitlab',
          icon: SiGitlab,
        },
      ],
    },
  ]

export default SKILLS
