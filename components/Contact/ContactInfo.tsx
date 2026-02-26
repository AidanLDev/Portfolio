import Image from 'next/image'
import styles from './styles.module.scss'
import { contactDetails } from './contactDetails'

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.contactInfoTitle}>Contact Information</h3>

      <div className={styles.contactDetails}>
        {contactDetails.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.contactItem}>
            <Image alt={`${label} icon`} src={icon} width={24} height={24} />
            <div>
              <p className={styles.contactLabel}>{label}</p>
              {href ? (
                <a href={href} className={styles.contactValue}>
                  {value}
                </a>
              ) : (
                <p className={styles.contactValue}>{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactMessage}>
        <p>
          Whether you have a project in mind, want to collaborate, or just want to say hello,
          I&apos;d love to hear from you. Let&apos;s create something amazing together!
        </p>
      </div>
    </div>
  )
}
