import styles from "./styles.module.scss";

const EMAIL_ADDRESS = "dev@aidanlowson.com";
const PHONE_NUMBER = "+44 7460 302 161";
const LOCATION = "Oxfordshire, UK";

const contactDetails = [
  {
    icon: "✉",
    label: "Email",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    icon: "📞",
    label: "Phone",
    value: PHONE_NUMBER,
    href: "tel:+447460302161",
  },
  {
    icon: "📍",
    label: "Location",
    value: LOCATION,
  },
];

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.contactInfoTitle}>Contact Information</h3>

      <div className={styles.contactDetails}>
        {contactDetails.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.contactItem}>
            <div className={styles.contactIcon}>{icon}</div>
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
          Whether you have a project in mind, want to collaborate, or just want
          to say hello, I&apos;d love to hear from you. Let&apos;s create
          something amazing together!
        </p>
      </div>
    </div>
  );
}
