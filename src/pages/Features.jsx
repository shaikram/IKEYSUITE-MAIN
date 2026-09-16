import CTASection from '../components/global/CTASection'
import FeatureCard from '../components/global/FeatureCard'
import PageHero from '../components/global/PageHero'
import SectionTitle from '../components/global/SectionTitle'
import { platformFeatures } from '../data/content'

export default function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Platform capabilities that keep operations organized."
        description="iKeySuite brings together the essentials of a modern business system: users, access, workflows, data, and room to expand."
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Platform"
            title="Everything you need to run a structured system."
            description="These capabilities sit beneath each solution, so your tools stay consistent as you add modules or users."
          />
          <div className="card-grid">
            {platformFeatures.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See how these capabilities fit your business."
        description="Tell us which processes you want to improve and we will map them to the right iKeySuite setup."
      />
    </>
  )
}
