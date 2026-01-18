import { Helmet } from "@dr.pogodin/react-helmet";
import { siteData } from "../data/siteData";

export default function MentionsLegales() {
  return (
    <section className="container py-5">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions légales</title>
      </Helmet>

      <h1 className="fw-bold">Mentions légales</h1>

      <div className="accordion mt-4" id="legalAccordion">
        {/* Editeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditor"
              aria-expanded="true"
              aria-controls="collapseEditor"
            >
              Editeur du site
            </button>
          </h2>

          <div
            id="collapseEditor"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEditor"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p className="mb-1 fw-semibold">{siteData.fullName}</p>
              <p className="mb-1">{siteData.contact.address[0]}</p>
              <p className="mb-1">{siteData.contact.address[1]}</p>
              <p className="mb-1">{siteData.contact.phone}</p>
              <p className="mb-0">{siteData.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Hebergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHost">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHost"
              aria-expanded="false"
              aria-controls="collapseHost"
            >
              Hébergeur
            </button>
          </h2>

          <div
            id="collapseHost"
            className="accordion-collapse collapse"
            aria-labelledby="headingHost"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p className="mb-0">
                <strong>alwaysdata</strong>
                <br />
                91 Rue du Faubourg Saint-Honoré, 75008 Paris
                <br />
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              Crédits
            </button>
          </h2>

          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p className="mb-2">
                Les images utilisées sur ce site sont libres de droits et proviennent de{" "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>
              <p className="mb-0">
                Le favicon provient de{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Flaticon
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
