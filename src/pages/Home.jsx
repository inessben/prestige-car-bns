import React from 'react';

function Home() {
  return (
    <main>
      <section id="home" className="home">
        <h1>Voyagez avec Élégance et Confort</h1>
        <p>
          Prestige Car BNS vous offre un service de transport avec chauffeur privé.
          Profitez de nos véhicules haut de gamme pour vos déplacements.
        </p>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Notre Histoire</h2>
            <p>
              Fondée en 2020, Prestige Car BNS est née de la passion pour l'excellence et le service client
              irréprochable. Notre entreprise s'est rapidement imposée comme une référence dans le transport
              de luxe avec chauffeur privé en France.
            </p>
            <p>
              Forte de notre expérience et de notre engagement envers la qualité, nous avons su développer
              une expertise reconnue dans le domaine du transport haut de gamme, répondant aux besoins les
              plus exigeants de notre clientèle.
            </p>
          </div>

          <div className="about-section">
            <h2>Notre Mission</h2>
            <p>
              Offrir un service de transport de luxe exceptionnel, alliant confort, ponctualité et
              professionnalisme. Nous nous engageons à dépasser les attentes de nos clients en proposant
              une expérience de voyage unique et personnalisée.
            </p>
          </div>

          <div className="about-section">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🛡️ Fiabilité</h3>
                <p>Ponctualité garantie et service disponible 24h/24, 7j/7</p>
              </div>
              <div className="value-item">
                <h3>🤝 Proximité</h3>
                <p>Relation client personnalisée et service sur-mesure</p>
              </div>
              <div className="value-item">
                <h3>🔒 Sécurité</h3>
                <p>Véhicules entretenus régulièrement et chauffeurs formés aux normes de sécurité</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Notre Équipe</h2>
            <p>
              Notre équipe de chauffeurs professionnels est sélectionnée avec soin pour leur expérience,
              leur professionnalisme et leur connaissance parfaite de la région. Tous nos chauffeurs
              possèdent les certifications requises et bénéficient d'une formation continue pour garantir
              un service d'excellence.
            </p>
            <p>
              Discrétion, courtoisie et attention aux détails sont les maîtres-mots de notre équipe,
              pour vous offrir une expérience de transport incomparable.
            </p>
          </div>

          <div className="about-section">
            <h2>Nos Engagements</h2>
            <ul className="commitments-list">
              <li>Service disponible 24h/24 et 7j/7</li>
              <li>Véhicules premium entretenus selon les plus hauts standards</li>
              <li>Chauffeurs professionnels et expérimentés</li>
              <li>Tarifs transparents sans surprise</li>
              <li>Respect strict de la confidentialité</li>
              <li>Service client réactif et personnalisé</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
