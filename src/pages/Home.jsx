import { siteData } from "../data/siteData";

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${siteData.hero.bg})` }}
      >
        <div className="hero-overlay">
          <div className="container text-center">
            <h1 className="text-white fw-bold">{`Bonjour, je suis ${siteData.fullName}`}</h1>
            <h2 className="text-white fw-semibold">{siteData.jobTitle}</h2>

            <button
              type="button"
              className="btn btn-danger mt-3"
              data-bs-toggle="modal"
              data-bs-target="#githubModal"
            >
              {siteData.hero.cta}
            </button>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="section-h3">A propos</h3>
                <div className="section-bar mb-3" />
                <img className="img-fluid rounded mb-3" src="/assets/john-doe-about.jpg" alt="Photo à propos" />
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore
                  perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque aut?
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="section-h3">Mes compétences</h3>
                <div className="section-bar mb-3" />

                {siteData.skills.map((s) => (
                  <div key={s.label} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span className="fw-semibold">{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label={s.label} aria-valuenow={s.value} aria-valuemin="0" aria-valuemax="100">
                      <div className={`progress-bar bg-${s.color}`} style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
