import styles from './styles.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={styles.input} {...props} />
    </div>
  )
}
