import textStyles from '@/components/ui/text/styles.module.scss'

import styles from './styles.module.scss'

export default function SkillsTitle() {
  return (
    <h2 className={styles.skillsTitle} id='skills-header'>
      <span className={textStyles.primary}>Technical</span>{' '}
      <span className={textStyles.secondary}>Skills</span>
    </h2>
  )
}
