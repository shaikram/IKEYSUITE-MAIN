import { Link } from 'react-router-dom'
import { logoMark, logoStacked, logoTitle, logoTitleInverse } from '../../assets/logos'

const sources = {
  title: logoTitle,
  mark: logoMark,
  stacked: logoStacked,
  inverse: logoTitleInverse,
}

export default function Logo({
  variant = 'title',
  to = '/',
  className = '',
  alt = 'iKeySuite',
  onClick,
}) {
  const image = (
    <img
      src={sources[variant] || logoTitle}
      alt={alt}
      className={`logo logo--${variant} ${className}`.trim()}
    />
  )

  if (to) {
    return (
      <Link to={to} className="logo-link" aria-label="iKeySuite home" onClick={onClick}>
        {image}
      </Link>
    )
  }

  return image
}
