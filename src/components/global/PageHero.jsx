export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="page-hero__text">{description}</p> : null}
      </div>
    </section>
  )
}
