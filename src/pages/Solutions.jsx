import Button from '../components/global/Button'
import CTASection from '../components/global/CTASection'
import PageHero from '../components/global/PageHero'
import SectionTitle from '../components/global/SectionTitle'
import SolutionCard from '../components/global/SolutionCard'
import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Business systems configured around your requirements."
        description="iKeySuite offers practical modules for everyday operations. Each solution can be customized so it fits the way your organization already works."
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Available solutions"
            title="A clean set of operational building blocks."
            description="Start with one module or combine several. Custom solutions are available when your process does not fit a standard template."
          />
          <div className="card-grid card-grid--solutions">
            {solutions.map((item) => (
              <SolutionCard key={item.slug} {...item} />
            ))}
          </div>
          <div className="section__action">
            <Button to="/contact">Request a Tailored Setup</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a solution that isn’t listed?"
        description="Custom business systems can be configured according to your workflows, reporting needs, and growth plans."
        actionLabel="Discuss a Custom Solution"
      />
    </>
  )
}
