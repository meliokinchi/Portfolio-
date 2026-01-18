import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Footer() {
  const { contact } = siteData;

  return (
    <footer className="footer-dark mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="mb-3">{siteData.fullName}</h5>
            <p className="mb-1">{contact.address[0]}</p>
            <p className="mb-1">{contact.address[1]}</p>
            <p className="mb-1">{contact.phone}</p>
            <p className="mb-3">{contact.email}</p>

            <div className="d-flex gap-3">
              <a className="social-link" href={contact.github} target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a className="social-link" href={contact.twitter} target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter" />
              </a>
              <a className="social-link" href={contact.linkedin} target="_blank" rel="nofollow noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled footer-links">
              {siteData.projects.map((p) => (
                <li key={p.title}>
                  <Link to="/portfolio">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
