import textStyles from '../ui/text/styles.module.scss'

import styles from './styles.module.scss'

export default function ExperienceTimelineTitle() {
  return (
    <h2 className={styles.experienceTimelineTitle} id='experience-header'>
      <span className={textStyles.primary}>Work</span>{' '}
      <span className={textStyles.secondary}>Experience</span>
    </h2>
  )
}
