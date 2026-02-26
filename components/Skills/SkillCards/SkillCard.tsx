import { ISkillCardProps, DatesUsedRange } from '@/interfaces/skillsInterfaces.types'

import styles from './styles.module.scss'

function calculateTotalYears(datesUsed: DatesUsedRange[]): number {
  const totalMs = datesUsed.reduce((sum, [start, end]) => {
    return sum + (end.getTime() - start.getTime())
  }, 0)
  const years = totalMs / (1000 * 60 * 60 * 24 * 365.25)
  return Math.round(years * 10) / 10
}

export default function SkillCard({ skillObject, maxYears }: Readonly<ISkillCardProps>) {
  const totalYears = calculateTotalYears(skillObject.datesUsed)
  const barPercent = Math.min((totalYears / maxYears) * 100, 100)
  const displayYears = totalYears % 1 === 0 ? totalYears.toFixed(0) : totalYears.toFixed(1)

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skillObject.skill}</span>
        <span className={styles.skillYears}>
          {displayYears} {Number(displayYears) === 1 ? 'yr' : 'yrs'}
        </span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ width: `${barPercent}%` }} />
      </div>
      <div className={styles.tooltip}>
        {skillObject.experienceDetails.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    </div>
  )
}
