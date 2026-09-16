import Icon from './Icon'

export default function PricingCard({ icon, title, description }) {
  return (
    <article className="pricing-card">
      <div className="pricing-card__icon">
        <Icon name={icon} />
      </div>
      <h3 className="pricing-card__title">{title}</h3>
      <p className="pricing-card__text">{description}</p>
    </article>
  )
}
