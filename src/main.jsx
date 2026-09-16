import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { visiblePartners } from './data/establishments';
import './styles.css';

const steps = [
  { number: '01', title: 'Prenez', icon: '↗', text: 'Payez directement sur le terminal de paiement sans contact. Une batterie se libère automatiquement.' },
  { number: '02', title: 'Emportez', icon: '↻', text: 'Emportez votre batterie et rechargez votre téléphone tout en continuant votre journée ou votre activité.' },
  { number: '03', title: 'Restituez', icon: '↘', text: 'Restituez simplement la batterie dans une borne GoBat.' },
];

const benefits = [
  ['Câbles intégrés', 'USB-C, Lightning et Micro-USB directement intégrés à la batterie.'],
  ['Charge rapide', 'Rechargez efficacement votre téléphone pendant vos déplacements.'],
  ['Paiement simple', 'Réglez directement sur le terminal de paiement de la borne.'],
  ['Vraiment portable', 'Gardez votre téléphone avec vous pendant la recharge.'],
  ['Retour flexible', 'Restituez votre batterie quand vous le souhaitez, dans un délai de 24 heures.'],
];

const customerBenefits = ['Un service supplémentaire pour vos clients', 'Libérez vos prises électriques', 'Soulagez vos équipes des demandes de recharge', 'Améliorez le confort de vos clients'];
const gobatBenefits = ['Fourniture de la borne', 'Installation', 'Locations et retours', 'Maintenance', 'Remplacement du matériel', 'Assistance utilisateur'];

function Logo({ light = false }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="#accueil" aria-label="GoBat, accueil"><span className="logo-go">Go</span><span className="logo-bat">Bat</span></a>;
}

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <Logo />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}><span /><span /></button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#fonctionnement" onClick={closeMenu}>Comment ça marche</a>
          <a href="#tarifs" onClick={closeMenu}>Tarifs</a>
          <a href="#borne" onClick={closeMenu}>Trouver une borne</a>
          <a href="#etablissements" onClick={closeMenu}>Établissements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#borne" onClick={closeMenu}>Trouver une borne <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-light" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Rechargez. Continuez.</p>
            <h1>Plus de<br />batterie ?<br /><span>GoBat</span> prend<br />le relais.</h1>
            <p className="hero-lead">Louez une batterie externe en quelques secondes et restez connecté, où que vous soyez.</p>
            <div className="hero-actions"><a className="button button-primary" href="#borne">Trouver une borne <Arrow /></a><a className="button button-secondary" href="#contact">Je suis un établissement</a></div>
            <div className="hero-notes"><span><i>✓</i> Paiement sans contact</span><span><i>✓</i> Charge rapide</span></div>
          </div>
          <div className="hero-visual" aria-label="Borne GoBat installée dans un établissement">
            <div className="visual-orbit" /><div className="visual-line" />
            <img className="station-photo" src="./65E6B0D7-640E-45F8-8ECD-B7D95B8935A7 (1).PNG" alt="Borne GoBat avec terminal de paiement et batteries externes" />
            
          </div>
        </section>

        <section className="how section-dark" id="fonctionnement">
          <div className="section-intro how-intro"><div><p className="eyebrow eyebrow-green">Comment ça marche ?</p><h2>Votre<br />batterie.<br /><span>Partout.</span></h2></div><p className="section-lead">Simple et rapide : réglez directement sur le terminal de paiement de la borne, récupérez votre batterie et restez mobile pendant la recharge.</p></div>
          <div className="steps">{steps.map((step) => <article className="step" key={step.number}><div className="step-head"><span className="step-number">{step.number}</span><span className="step-icon">{step.icon}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </section>

        <section className="benefits section-light" id="pourquoi">
          <div className="benefits-title"><p className="eyebrow">Pourquoi GoBat ?</p><h2>La recharge<br />qui <span>vous suit.</span></h2></div>
          <div className="benefits-grid">{benefits.map(([title, text], index) => <article className="benefit" key={title}><span className="benefit-index">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className="pricing" id="tarifs"><div className="pricing-main"><p className="eyebrow">Tarifs simples et transparents</p><div className="price">1,90 €</div><h2>pour 1 heure.</h2><p>Vous payez selon la durée,<br />sans abonnement ni frais cachés.</p></div><div className="price-list"><div><span>2 heures</span><strong>2,90 €</strong></div><div><span>Puis</span><strong>+0,70 € <small>/ heure</small></strong></div><div><span>Maximum 24 heures</span><strong>5 €</strong></div><div className="price-warning"><span>Non-restitution après 24 h</span><strong>40 €</strong></div></div></section>

        <section className="find section-light" id="borne"><div className="find-copy"><p className="eyebrow">Trouver une borne</p><h2>Trouvez une borne<br />GoBat <span>près de chez vous.</span></h2></div><div className="map-placeholder"><div className="map-grid" /><div className="map-pin">+</div><p>La carte arrive bientôt.</p></div></section>

        <section className="partners section-light"><p className="eyebrow eyebrow-centered">Ils nous ont fait confiance</p><h2>GoBat est en cours de déploiement.</h2>{visiblePartners.length > 0 && <div className="partner-logos">{visiblePartners.map((partner) => <img key={partner.name} src={partner.logo} alt={partner.name} />)}</div>}</section>

        <section className="for-business section-dark" id="etablissements"><div className="business-main"><p className="eyebrow eyebrow-green">Pour les établissements</p><h2>Vous proposez<br />le service.<br /><span>GoBat s’occupe<br />du reste.</span></h2><p>Offrez à vos clients une solution simple pour rester connectés, sans coût et sans gestion pour votre établissement.</p><div className="free-badge"><strong>0 €</strong><span>Aucun coût pour<br />l’établissement</span></div><a className="button button-primary" href="#contact">Demander une borne gratuitement <Arrow /></a></div><div className="business-list"><div><h3>Pour votre établissement</h3><ul>{customerBenefits.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div><div><h3>Pris en charge par GoBat</h3><ul>{gobatBenefits.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div></div></section>

        <section className="formats section-light"><div className="formats-heading"><p className="eyebrow">Les bornes GoBat</p><h2>Une solution<br />adaptée à votre<br /><span>établissement.</span></h2><p>D’autres modèles arrivent prochainement. Des modèles de plus grande capacité pourront compléter la gamme.</p></div><div className="format-cards"><article className="format-card format-light"><span className="format-label">01 · Format compact</span><h3>Borne comptoir</h3><div className="station-graphic compact"><span className="station-screen" /><span className="station-base" /></div><div className="dimensions"><div><span>Largeur</span><strong>25 cm</strong></div><div><span>Profondeur</span><strong>20 cm</strong></div><div><span>Hauteur</span><strong>35 cm</strong></div></div></article><article className="format-card format-dark"><span className="format-label">02 · Format autonome</span><h3>Borne sur pied</h3><div className="station-graphic standalone"><span className="station-screen" /><span className="station-base" /><span className="station-foot" /></div><div className="dimensions"><div><span>Largeur</span><strong>25 cm</strong></div><div><span>Profondeur</span><strong>20 cm</strong></div><div><span>Hauteur du pied</span><strong>120 cm</strong></div><div><span>Hauteur totale</span><strong>≈ 150 cm</strong></div></div></article></div></section>

        <section className="contact section-light" id="contact"><div className="contact-copy"><p className="eyebrow">Parlons de votre établissement</p><h2>Vous souhaitez<br />une borne <span>GoBat ?</span></h2><p>Présentez-nous votre établissement. Nous vous recontacterons pour échanger sur la meilleure installation.</p><a className="email-link" href="mailto:contact.gobat21@gmail.com">contact.gobat21@gmail.com <Arrow /></a></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><div className="form-row"><label>Nom de l’établissement<input type="text" required /></label><label>Nom / prénom<input type="text" required /></label></div><div className="form-row"><label>Ville<input type="text" required /></label><label>Type d’établissement<input type="text" /></label></div><div className="form-row"><label>Téléphone professionnel<input type="tel" required /></label><label>E-mail<input type="email" required /></label></div><label>Message<textarea rows="4" /></label><button className="button button-primary" type="submit">Demander une borne gratuitement <Arrow /></button></form></section>
      </main>

      <footer className="footer"><div><Logo light /><p>Votre batterie. Partout.</p></div><div className="footer-links"><a href="#fonctionnement">Comment ça marche</a><a href="#tarifs">Tarifs</a><a href="#borne">Trouver une borne</a><a href="#contact">Contact</a></div><div className="footer-contact"><a href="mailto:contact.gobat21@gmail.com">contact.gobat21@gmail.com</a><a href="#mentions">Mentions légales</a></div><div className="legal" id="mentions">
  <p>Mentions légales</p>

  <p>
    Éditeur du site : GoBat – Théo Bellamy, Entrepreneur individuel<br />
    SIREN : 979 969 359<br />
    SIRET : 979 969 359 00012<br />
    TVA intracommunautaire : FR79 979969359<br />
    Adresse : Rue des Normaliens Fusillés et de leur Camarade, 21000 Dijon – France<br />
    E-mail : contact.gobat21@gmail.com
  </p>

  <p>Directeur de la publication : Théo Bellamy</p>

  <p>Hébergement : GitHub Pages – GitHub, Inc.</p>

  <p>
    L’ensemble des contenus présents sur ce site (textes, éléments graphiques, logo et identité visuelle GoBat) est protégé par les dispositions applicables en matière de propriété intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.
  </p>
</div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
