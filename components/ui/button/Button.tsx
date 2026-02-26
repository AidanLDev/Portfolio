import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className ?? ''}`} {...props}>
      {children}
    </button>
  )
}
