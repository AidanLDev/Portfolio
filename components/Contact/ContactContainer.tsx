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
          I&apos;m always open to new opportunities and interesting projects. Feel free to reach
          out!
        </p>
      </div>

      <div className={styles.contactGrid}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}
