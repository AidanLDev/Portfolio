import SkillCards from './SkillCards/SkillCards'
import SkillsTitle from './SkillsTitle'
import styles from './styles.module.scss'

export default function SkillsContainer() {
  return (
    <div className={styles.skillsContainer}>
      <SkillsTitle />
      <SkillCards />
    </div>
  )
}
