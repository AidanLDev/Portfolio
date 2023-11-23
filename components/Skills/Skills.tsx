import React from 'react'
import SkillBox from './SkillBox'
import { skills } from './skillsList'

import styles from './styles.module.scss'

export default function Skills() {
  return (
    <div className={styles.skillsList}>
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
