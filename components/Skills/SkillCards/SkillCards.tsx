import SkillCard from './SkillCard'
import { frontEndSkills, backendSkills, devOpsSkills, MAX_YEARS } from './skillItems'

import type { SkillColumnProps } from '@/interfaces/skillsInterfaces.types'

import styles from './styles.module.scss'

function SkillColumn({ title, skills, maxYears }: Readonly<SkillColumnProps>) {
  return (
    <div className={styles.skillColumn}>
      <h3 className={styles.skillColumnTitle}>{title}</h3>
      <div className={styles.skillList}>
        {skills.map((skillObj) => (
          <SkillCard
            key={`${skillObj.skill}__${skillObj.category}`}
            skillObject={skillObj}
            maxYears={maxYears}
          />
        ))}
      </div>
    </div>
  )
}

export default function SkillCards() {
  return (
    <div className={styles.skillCardsGrid}>
      <SkillColumn title='Frontend' skills={frontEndSkills} maxYears={MAX_YEARS} />
      <SkillColumn title='Backend' skills={backendSkills} maxYears={MAX_YEARS} />
      <SkillColumn title='DevOps & Tools' skills={devOpsSkills} maxYears={MAX_YEARS} />
    </div>
  )
}
