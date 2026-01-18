import { siteData } from "../data/siteData";

export default function Contact() {
  const { contact } = siteData;

  return (
    <>
      <div className="page-banner" style={{ backgroundImage: "url(/assets/banner.jpg)" }} />

      <section className="container py-5 text-center">
        <h1 className="fw-bold">Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="section-bar mx-auto" />
      </section>

      <section className="container pb-5">
        <div className="card shadow-sm">
          <div className="card-body p-4 p-lg-5">
            <div className="row g-4">
              <div className="col-12 col-lg-6">
                <h2 className="h4">Formulaire de contact</h2>
                <div className="section-bar mb-4" />

                <form onSubmit={(e) => e.preventDefault()}>
                  <input className="form-control mb-3" placeholder="Votre nom" required />
                  <input className="form-control mb-3" type="email" placeholder="Votre adresse email" required />
                  <input className="form-control mb-3" type="tel" placeholder="Votre numéro de téléphone" required />
                  <input className="form-control mb-3" placeholder="Sujet" required />
                  <textarea className="form-control mb-3" rows="6" placeholder="Votre message" required />
                  <button className="btn btn-primary" type="submit">Envoyer</button>
                </form>
              </div>

              <div className="col-12 col-lg-6">
                <h2 className="h4">Mes coordonnées</h2>
                <div className="section-bar mb-4" />

                <p className="mb-1 fw-semibold">{siteData.fullName}</p>
                <p className="mb-1">{contact.address[0]}</p>
                <p className="mb-1">{contact.address[1]}</p>
                <p className="mb-1">{contact.phone}</p>
                <p className="mb-3">{contact.email}</p>

                <div className="map-wrap">
                  <iframe
                    title="Google Map"
                    src={contact.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
