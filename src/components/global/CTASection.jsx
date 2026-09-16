import Button from './Button'

export default function CTASection({
  title = 'Ready to simplify your operations?',
  description = 'Tell us what your business needs. We will help you configure a solution that fits — and grows with you.',
  actionLabel = 'Get in Touch',
  actionTo = '/contact',
}) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container cta-section__inner">
        <div className="cta-section__copy">
          <h2 id="cta-heading">{title}</h2>
          <p>{description}</p>
        </div>
        <Button to={actionTo} variant="primary">
          {actionLabel}
        </Button>
      </div>
    </section>
  )
}
