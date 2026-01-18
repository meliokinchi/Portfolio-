import { siteData } from "../data/siteData";

export default function Portfolio() {
  return (
    <>
      <div className="page-banner" style={{ backgroundImage: "url(/assets/banner.jpg)" }} />

      <section className="container py-5 text-center">
        <h1 className="fw-bold">Portfolio</h1>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <div className="section-bar mx-auto" />
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          {siteData.projects.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.title}>
              <div className="card project-card h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body text-center">
                  <h2 className="h5 mb-1">{p.title}</h2>
                  <p className="text-muted mb-2">{p.subtitle}</p>

                  <a className="btn btn-primary btn-sm project-btn" href="#" onClick={(e) => e.preventDefault()}>
                    Voir le site
                  </a>

                  <p className="text-muted mt-3 mb-0 small">Site réalisé avec {p.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
