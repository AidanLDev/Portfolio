import ExperienceCards from './ExperienceCards/ExperienceCards'
import ExperienceTimelineTitle from './ExperienceTimelineTitle'

import styles from './styles.module.scss'

export default function ExperienceTimeline() {
  return (
    <section className={styles.experienceTimelineContainer} aria-labelledby='experience-header'>
      <ExperienceTimelineTitle />
      <ExperienceCards />
    </section>
  )
}
