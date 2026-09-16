import { logoStacked } from '../assets/logos'
import Button from '../components/global/Button'
import CTASection from '../components/global/CTASection'
import FeatureCard from '../components/global/FeatureCard'
import PricingCard from '../components/global/PricingCard'
import SectionTitle from '../components/global/SectionTitle'
import SolutionCard from '../components/global/SolutionCard'
import {
  benefits,
  howItWorks,
  pricingFactors,
  solutions,
} from '../data/content'

function HeroVisual() {
  const chips = ['Inventory', 'Attendance', 'Payroll', 'Workflows']

  return (
    <div className="hero__visual">
      <div className="hero__panel">
        <img src={logoStacked} alt="" className="hero__logo" />
        <div className="hero__chips">
          {chips.map((chip) => (
            <span key={chip} className="hero__chip">
              {chip}
            </span>
          ))}
        </div>
        <p>Web-based business systems, configured around your operations.</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">iKeySuite</p>
            <h1>Smart Business Solutions, Built Around Your Needs.</h1>
            <p className="hero__lead">
              iKeySuite provides scalable, customizable web-based business
              solutions designed to simplify operations — so your team can work
              with clarity, not complexity.
            </p>
            <div className="hero__actions">
              <Button to="/contact">Get Started</Button>
              <Button to="/solutions" variant="outline">
                Explore Solutions
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why iKeySuite"
            title="Business systems that stay simple as you grow."
            description="A practical platform for organizations that need reliable tools without unnecessary complexity."
          />
          <div className="card-grid">
            {benefits.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionTitle
            eyebrow="Solutions"
            title="Configured for the way your business works."
            description="From inventory to payroll and custom workflows, each solution can be tailored to your requirements."
          />
          <div className="card-grid card-grid--solutions">
            {solutions.map((item) => (
              <SolutionCard key={item.slug} {...item} to="/solutions" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="How it works"
            title="A clear path from need to working system."
            description="We keep the process straightforward so you can move from conversation to a usable solution with confidence."
          />
          <ol className="steps">
            {howItWorks.map((item) => (
              <li key={item.step} className="steps__item">
                <span className="steps__number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionTitle
            eyebrow="Subscription"
            title="Flexible Plans for Growing Businesses"
            description="iKeySuite uses a subscription-based model. Solutions are configured according to your selected modules, users, and business requirements."
          />
          <div className="card-grid card-grid--pricing">
            {pricingFactors.slice(0, 3).map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>
          <div className="section__action">
            <Button to="/pricing" variant="outline">
              View Pricing Approach
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
