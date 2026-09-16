import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
