import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function SolutionCard({ icon, title, description, to }) {
  const body = (
    <>
      <div className="solution-card__icon">
        <Icon name={icon} />
      </div>
      <h3 className="solution-card__title">{title}</h3>
      <p className="solution-card__text">{description}</p>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="solution-card solution-card--link">
        {body}
      </Link>
    )
  }

  return <article className="solution-card">{body}</article>
}
