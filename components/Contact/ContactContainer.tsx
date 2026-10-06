import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import styles from './styles.module.scss'

export default function ContactContainer() {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle} id='contact-header'>
          Get In <span>Touch</span>
        </h2>
        <div className={styles.titleUnderline} />
        <p className={styles.contactSubtitle}>
          Whether it&apos;s a role, a project you&apos;d like to collaborate on or a question about
          something you&apos;ve seen here, I&apos;m always happy to hear from people. Send me a
          message and I&apos;ll get back to you.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}
