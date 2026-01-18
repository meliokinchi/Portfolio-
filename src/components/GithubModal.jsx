import { useEffect, useState } from "react";

export default function GithubModal() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((r) => {
        if (!r.ok) throw new Error("Erreur API GitHub");
        return r.json();
      })
      .then(setData)
      .catch(() => setError("Impossible de charger le profil GitHub."));
  }, []);

  return (
    <div className="modal fade" id="githubModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fermer" />
          </div>

          <div className="modal-body">
            {error && <p className="mb-0">{error}</p>}

            {data && (
              <div className="row g-4 align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img className="img-fluid rounded" src={data.avatar_url} alt={`Avatar GitHub de ${data.login}`} />
                </div>
                <div className="col-12 col-md-7">
                  <p className="mb-2">
                    <i className="bi bi-person me-2" />
                    <a className="text-white" href={data.html_url} target="_blank" rel="nofollow noopener noreferrer">
                      {data.name || data.login}
                    </a>
                  </p>
                  <p className="mb-2"><i className="bi bi-geo-alt me-2" />{data.location || "—"}</p>
                  <p className="mb-2"><i className="bi bi-card-text me-2" />{data.bio || "—"}</p>
                  <p className="mb-2"><i className="bi bi-box me-2" />Repositories : {data.public_repos}</p>
                  <p className="mb-0"><i className="bi bi-people me-2" />Followers : {data.followers} | Following : {data.following}</p>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer border-secondary">
            <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
