import { siteData } from "../data/siteData";

export default function Services() {
  return (
    <>
      <div className="page-banner" style={{ backgroundImage: "url(/assets/banner.jpg)" }} />
      <section className="container py-5 text-center">
        <h1 className="fw-bold">Mon offre de services</h1>
        <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="section-bar mx-auto" />
      </section>

      <section className="container pb-5">
        <div className="row g-4 justify-content-center">
          {siteData.services.map((s) => (
            <div className="col-12 col-md-6 col-lg-4" key={s.title}>
              <div className="card service-card h-100 text-center">
                <div className="card-body p-4">
                  <i className={`bi ${s.icon} fs-1 text-primary`} />
                  <h2 className="h4 mt-3">{s.title}</h2>
                  <p className="text-muted mb-0">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
