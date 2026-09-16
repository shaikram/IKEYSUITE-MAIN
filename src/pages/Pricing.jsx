import Button from '../components/global/Button'
import CTASection from '../components/global/CTASection'
import PageHero from '../components/global/PageHero'
import PricingCard from '../components/global/PricingCard'
import SectionTitle from '../components/global/SectionTitle'
import { pricingFactors } from '../data/content'

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible Plans for Growing Businesses"
        description="iKeySuite uses a subscription-based model. Pricing is based on what you need — not a rigid package that ignores how your business actually operates."
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="How pricing works"
            title="A quotation shaped around your setup."
            description="Instead of locking every organization into the same tier, we review the scope of your system and prepare a quotation that reflects it."
          />
          <div className="card-grid card-grid--pricing">
            {pricingFactors.map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>
          <div className="quote-panel">
            <div>
              <h2>Request a quotation</h2>
              <p>
                Share the modules you are considering, the size of your team,
                and any custom requirements. We will prepare a clear subscription
                proposal based on your needs.
              </p>
            </div>
            <Button to="/contact">Request a Quotation</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        description="Start with a conversation. We will help you identify a practical first setup and a path to grow from there."
      />
    </>
  )
}
