import { useState } from 'react'
import Button from '../components/global/Button'
import PageHero from '../components/global/PageHero'
import { contactDetails } from '../data/content'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('submitted')
    setForm(initialForm)

    // Ready for Laravel REST API:
    // await api.post('/contact', form)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s configure the right solution."
        description="Tell us a little about your business. We will follow up to discuss the modules, users, and requirements that fit your operations."
      />

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel">
            <h2>Get in touch</h2>
            <p>
              Whether you are exploring a single module or a full operational
              setup, we are ready to help you find a practical starting point.
            </p>
            <ul className="contact-details">
              <li>
                <span>Email</span>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <span>Location</span>
                <p>{contactDetails.location}</p>
              </li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            {status === 'submitted' ? (
              <p className="form-success" role="status">
                Thank you. We have received your details and will follow up
                shortly.
              </p>
            ) : null}
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>
    </>
  )
}
