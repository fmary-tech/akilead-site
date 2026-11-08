/* akilead.com : bandeau cookies (vanilla-cookieconsent 3.3.0, auto-hébergé) + Google Analytics 4
   Google Analytics n'est chargé qu'après « Tout accepter » (Consent Mode v2, publicité toujours refusée). */
(function () {
  'use strict';
  var GA_ID = 'G-J78SE0CE98';
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/assets\/js\/akilead-consent\.js.*$/, '') : '/';
  var PRIVACY = ROOT + 'politique-de-confidentialite-rgpd/';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', functionality_storage: 'denied',
    personalization_storage: 'denied', security_storage: 'granted'
  });

  var loaded = false;
  function loadGA() {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    if (loaded) return;
    loaded = true;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      cookie_expires: 33696000,                 /* 390 jours, < 13 mois */
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  function clearGA() {
    var host = location.hostname, parts = host.split('.'), doms = ['', host, '.' + host];
    if (parts.length > 2) { var main = parts.slice(-2).join('.'); doms.push(main, '.' + main); }
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga/.test(name)) {
        doms.forEach(function (d) {
          document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
        });
      }
    });
  }
  function apply() {
    if (CookieConsent.acceptedCategory('analytics')) { loadGA(); }
    else { gtag('consent', 'update', { analytics_storage: 'denied' }); clearGA(); if (loaded) { location.reload(); } }
  }

  function start() { CookieConsent.run({
    cookie: { name: 'cc_cookie', expiresAfterDays: 182, sameSite: 'Lax' },
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom center', equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false }
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { autoClear: { cookies: [{ name: /^_ga/ }] } }
    },
    onConsent: apply,
    onChange: apply,
    language: {
      default: 'fr',
      translations: {
        fr: {
          consentModal: {
            title: 'Cookies et mesure d’audience',
            description: 'Avec votre accord, nous utilisons Google Analytics pour mesurer la fréquentation du site (cookies de mesure d’audience, 13 mois maximum). Aucun cookie publicitaire. Vous pouvez changer d’avis à tout moment via le lien « Gérer les cookies » en bas de page.',
            acceptAllBtn: 'Tout accepter',
            acceptNecessaryBtn: 'Tout refuser',
            showPreferencesBtn: 'Personnaliser',
            footer: '<a href="' + PRIVACY + '">Politique de confidentialité</a>'
          },
          preferencesModal: {
            title: 'Gérer les cookies',
            acceptAllBtn: 'Tout accepter',
            acceptNecessaryBtn: 'Tout refuser',
            savePreferencesBtn: 'Enregistrer mes choix',
            closeIconLabel: 'Fermer',
            sections: [
              { description: 'Vous choisissez ici les cookies déposés sur akilead.com. Votre choix est conservé 6 mois.' },
              { title: 'Cookies nécessaires', description: 'Un seul cookie (cc_cookie) enregistre vos choix. Il est indispensable et ne sert pas à vous suivre.', linkedCategory: 'necessary' },
              { title: 'Mesure d’audience (Google Analytics)', description: 'Cookies _ga et _ga_J78SE0CE98 de Google Analytics 4 (Google Ireland Ltd / Google LLC) : nombre de visites, pages vues, liens sortants et téléchargements. Durée de vie : 13 mois maximum. Données transférées aux États-Unis (Data Privacy Framework).', linkedCategory: 'analytics' },
              { title: 'En savoir plus', description: 'Consultez notre <a href="' + PRIVACY + '">politique de confidentialité</a>.' }
            ]
          }
        }
      }
    }
  }); }

  /* feuille de style du bandeau chargée sans bloquer l'affichage de la page */
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = ROOT + 'assets/cookieconsent/3.3.0/cookieconsent.css';
  css.onload = css.onerror = start;
  document.head.appendChild(css);
})();
