import React from 'react'

import styles from './styles.module.scss'
import SkillBox from './SkillBox'

const skills = [
  {
    name: 'AWS',
    logo: '/images/Tech/AWSLogo.png',
  },
  {
    name: 'JavaScript',
    logo: '/images/Tech/JavaScriptLogo.png',
  },
  {
    name: 'TypeScript',
    logo: '/images/Tech/TypeScript.png',
  },
  {
    name: 'React',
    logo: '/images/Tech/ReactLogo.png',
  },
  {
    name: 'Node',
    logo: '/images/Tech/Node.png',
  },
  {
    name: 'MySQL',
    logo: '/images/Tech/mySQLLogo.png',
  },
  {
    name: 'SASS',
    logo: '/images/Tech/sassLogo.png',
  },
  {
    name: 'Tailwind',
    logo: '/images/Tech/Tailwind.png',
  },
  {
    name: 'Angular',
    logo: '/images/Tech/AngularLogo.png',
  },
  {
    name: 'Astro',
    logo: '/images/Tech/astro.png',
  },
  {
    name: 'Next',
    logo: '/images/Tech/Next.png',
  },
  {
    name: 'GIT',
    logo: '/images/Tech/GitLogo.png',
  },
]

export default function Skills() {
  return (
    <div className={styles.skillsList}>
      {/* AWS JS TS          */}
      {skills.map((skill, idx) => (
        <SkillBox
          key={`${idx}__${skill.name}`}
          logo={skill.logo}
          name={skill.name}
        />
      ))}
    </div>
  )
}
