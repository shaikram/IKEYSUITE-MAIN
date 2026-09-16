import Icon from './Icon'

export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">
        <Icon name={icon} />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{description}</p>
    </article>
  )
}
