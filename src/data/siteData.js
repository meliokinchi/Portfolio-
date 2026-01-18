export const siteData = {
  brand: "JOHN DOE",
  fullName: "John Doe",
  jobTitle: "Développeur web full stack",

  contact: {
    address: ["40 rue Laure Diebold", "69009 Lyon, France"],
    phone: "10 20 30 40 50",
    email: "john.doe@gmail.com",
    github: "https://github.com/github-john-doe",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    mapEmbedUrl: "https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed",
  },

  hero: {
    bg: "/assets/hero-bg.jpg",
    cta: "En savoir plus",
  },

  skills: [
    { label: "HTML5", value: 90, color: "danger" },
    { label: "CSS3", value: 80, color: "info" },
    { label: "JAVASCRIPT", value: 70, color: "warning" },
    { label: "PHP", value: 60, color: "success" },
    { label: "REACT", value: 50, color: "primary" },
  ],

  services: [
    {
      title: "UX Design",
      icon: "bi-pencil",
      text:
        "L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations.",
    },
    {
      title: "Développement web",
      icon: "bi-code-slash",
      text:
        "Le développement de sites web consiste à créer des sites internet en utilisant des langages (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    },
    {
      title: "Référencement",
      icon: "bi-search",
      text:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche.",
    },
  ],

  projects: [
    { title: "Fresh Food", img: "/assets/fresh-food.jpg", subtitle: "Site de vente de produits frais en ligne", tech: "PHP & MySQL" },
    { title: "Restaurant Akira", img: "/assets/restaurant-japonais.jpg", subtitle: "Site de vente de produits frais en ligne", tech: "WordPress" },
    { title: "Espace bien-être", img: "/assets/espace-bien-etre.jpg", subtitle: "Site de vente de produits frais en ligne", tech: "LARAVEL" },
    { title: "SEO", img: "/assets/seo.jpg", subtitle: "Amélioration du référencement d’un site e-commerce", tech: "Outils SEO" },
    { title: "Création d’une API", img: "/assets/coder.jpg", subtitle: "Création d’une API RESTFULL publique", tech: "PHP - SYMFONY" },
    { title: "Maquette d’un site web", img: "/assets/banner.jpg", subtitle: "Création du prototype d’un site", tech: "FIGMA" },
  ],
};
