import SkillCards from './SkillCards/SkillCards'
import SkillsTitle from './SkillsTitle'
import styles from './styles.module.scss'

export default function SkillsContainer() {
  return (
    <section className={styles.skillsContainer} aria-labelledby='skills-header'>
      <SkillsTitle />
      <SkillCards />
    </section>
  )
}
