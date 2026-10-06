import HeroTitle from '../ui/text/HeroTitle'
import Subtitle from '../ui/text/Subtitle'
import Avatar from './Avatar/Avatar'
import HeroLinks from './HeroLinks/HeroLinks'
import ScrollDown from './ScrollDown'

import styles from './styles.module.scss'

export default function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <Avatar />
      <div className={styles.textSection}>
        <HeroTitle />
        <Subtitle title='Full-Stack Software Engineer' />
        <p>
          Working as a developer since 2018, I’m curious about all things software and have worked
          across the full stack, from frontend to backend and DevOps.
        </p>
        <p>
          This is where I showcase that experience: the{' '}
          <a href='#experience-header'>roles I&apos;ve held</a> and what I learned in each, the{' '}
          <a href='#skills-header'>skills</a> I&apos;ve built up along the way and the{' '}
          <a href='#projects-header'>projects</a> I&apos;ve worked on. If you&apos;d like to
          collaborate or just want to reach out, the <a href='#contact-header'>contact form</a> is
          the quickest way to get in touch.
        </p>
        <HeroLinks />
      </div>
      <ScrollDown />
    </section>
  )
}
