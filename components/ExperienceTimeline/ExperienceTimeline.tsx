import ExperienceCards from './ExperienceCards/ExperienceCards'
import ExperienceTimelineTitle from './ExperienceTimelineTitle'

import styles from './styles.module.scss'

export default function ExperienceTimeline() {
  return (
    <div className={styles.experienceTimelineContainer}>
      <ExperienceTimelineTitle />
      <ExperienceCards />
    </div>
  )
}
