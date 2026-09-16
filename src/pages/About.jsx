import CTASection from '../components/global/CTASection'
import FeatureCard from '../components/global/FeatureCard'
import PageHero from '../components/global/PageHero'
import SectionTitle from '../components/global/SectionTitle'
import { aboutValues } from '../data/content'
import { logoMark } from '../assets/logos'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Business technology that stays practical."
        description="iKeySuite is a web-based platform that helps organizations simplify operations through affordable, scalable, and customizable business applications."
      />

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src={logoMark} alt="iKeySuite emblem" className="about-mark" />
          </div>
          <div className="split__copy">
            <SectionTitle
              align="left"
              eyebrow="What we are"
              title="A focused platform for everyday business operations."
              description="iKeySuite exists to make reliable business systems more accessible. We design and configure web applications that help teams manage people, processes, and records with less friction."
            />
            <p className="prose">
              The purpose is simple: give growing organizations a practical way
              to run their operations online — without locking them into rigid
              software that does not match how they work.
            </p>
            <p className="prose">
              Whether you need a focused module or a broader set of connected
              solutions, we start with your requirements and shape the system
              around them.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionTitle
            eyebrow="Our focus"
            title="Affordable, scalable, and built to simplify."
            description="We concentrate on the fundamentals that matter to real operations — clarity, flexibility, and room to grow."
          />
          <div className="card-grid">
            {aboutValues.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s talk about what your business needs."
        description="Share your current processes and we will help you see how iKeySuite can support them."
      />
    </>
  )
}
