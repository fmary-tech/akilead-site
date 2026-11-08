# akilead.com — site statique

Site de la société Akilead SAS, servi tel quel par GitHub Pages (branche `main`, dossier `/`).
Mêmes adresses, mêmes textes et même apparence que l'ancien site WordPress.

## Contenu
- Une page = un dossier avec son `index.html` (liens relatifs, aucune étape de construction).
- `CNAME` : domaine personnalisé `akilead.com`. `.nojekyll` : fichiers servis sans traitement.
- `sitemap.xml` (URL absolues), `robots.txt`, `feed.xml` (flux RSS des articles), `favicon.ico`, `404.html`.
- Anciennes adresses WordPress (`/feed/`, `/…/feed/`, `/wp-json/`, `/wp-admin/`, sitemaps Yoast) :
  pages de redirection immédiate (`meta refresh` + `rel=canonical`).
- `assets/cookieconsent/3.3.0/` : bandeau cookies vanilla-cookieconsent 3.3.0 (licence MIT, hébergé ici,
  aucun CDN). `assets/js/akilead-consent.js` : textes du bandeau et Google Analytics 4 (G-J78SE0CE98),
  chargé uniquement après « Tout accepter » (Consent Mode v2, publicité refusée).
  `assets/css/akilead.css` : correctifs d'affichage et d'accessibilité.

## Règles
- Dépôt public : n'y mettre ni notes internes, ni secrets, ni exports de données.
- Mettre à jour les mentions légales et la politique de confidentialité à chaque changement
  de mesure d'audience, de cookies ou de coordonnées.

## Vérifier en local
    python3 -m http.server 8080   # puis ouvrir http://localhost:8080/
