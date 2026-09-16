export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <header className={`section-title section-title--${align} ${className}`.trim()}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title__heading">{title}</h2>
      {description ? <p className="section-title__text">{description}</p> : null}
    </header>
  )
}
