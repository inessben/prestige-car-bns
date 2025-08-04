import React from 'react';

function Flotte() {
  return (
    <main>
      <section className="hero-fleet">
        <div className="hero-content">
          <h1>Nos Véhicules Premium</h1>
          <p>Des véhicules d'exception pour un transport de luxe incomparable</p>
        </div>
      </section>

      <section className="fleet-intro">
        <div className="container">
          <h2>Excellence et Confort</h2>
          <p>
            Notre flotte se compose uniquement de véhicules haut de gamme, récents et parfaitement entretenus.
            Chaque véhicule est sélectionné pour son confort, sa fiabilité et son prestige,
            garantissant une expérience de transport exceptionnelle.
          </p>
        </div>
      </section>

      <section className="fleet-vehicles">
        <div className="container">
          <div className="vehicle-grid">
            <div className="vehicle-card">
              <div className="vehicle-image">
                <img src="/images/vehicule-1.jpg" alt="Mercedes Classe C" />
              </div>
              <div className="vehicle-info">
                <h3>Mercedes Classe C</h3>
                <p className="vehicle-subtitle">Élégance et confort allemand</p>
                <div className="vehicle-specs">
                  <div className="spec">
                    <span className="spec-label">👥 Passagers</span>
                    <span className="spec-value">3 personnes</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">🧳 Bagages</span>
                    <span className="spec-value">2 valises</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">🛡️ Sécurité</span>
                    <span className="spec-value">5 étoiles</span>
                  </div>
                </div>
                <div className="vehicle-features">
                  <span className="feature">✓ Sièges chauffants</span>
                  <span className="feature">✓ Climatisation zones</span>
                  <span className="feature">✓ Système audio premium</span>
                  <span className="feature">✓ Sellerie cuir</span>
                </div>
                <p className="vehicle-description">
                  Véhicule emblématique de notre flotte, la Mercedes Classe C offre un confort optimal
                  avec ses sièges en cuir chauffants, son système de divertissement de qualité
                  et son isolation phonique soignée.
                </p>
              </div>
            </div>

            <div className="vehicle-card unavailable">
              <div className="vehicle-image">
                <img src="/images/vehicule-2.jpg" alt="BMW Série 7" />
                <div className="unavailable-overlay">
                  <span>Indisponible</span>
                </div>
              </div>
              <div className="vehicle-info">
                <h3>BMW Série 7</h3>
                <p className="vehicle-subtitle">Technologie et raffinement</p>
                <div className="vehicle-specs">
                  <div className="spec">
                    <span className="spec-label">👥 Passagers</span>
                    <span className="spec-value">3 personnes</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">🧳 Bagages</span>
                    <span className="spec-value">2 valises</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">🔋 Hybride</span>
                    <span className="spec-value">Disponible</span>
                  </div>
                </div>
                <div className="vehicle-features">
                  <span className="feature">✓ Écrans arrière</span>
                  <span className="feature">✓ Toit panoramique</span>
                  <span className="feature">✓ Système Harman Kardon</span>
                  <span className="feature">✓ Accès 4G</span>
                </div>
                <p className="vehicle-description">
                  La BMW Série 7 combine innovation technologique et luxe traditionnel. Ses écrans
                  tactiles arrière, son toit panoramique étoilé et ses assistances de conduite avancées en
                  font un choix privilégié pour les voyages d'affaires.
                </p>
              </div>
            </div>

            <div className="vehicle-card unavailable">
              <div className="vehicle-image">
                <img src="/images/vehicule-3.jpg" alt="Audi A8" />
                <div className="unavailable-overlay">
                  <span>Indisponible</span>
                </div>
              </div>
              <div className="vehicle-info">
                <h3>Audi A8</h3>
                <p className="vehicle-subtitle">Innovation et élégance</p>
                <div className="vehicle-specs">
                  <div className="spec">
                    <span className="spec-label">👥 Passagers</span>
                    <span className="spec-value">3 personnes</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">🧳 Bagages</span>
                    <span className="spec-value">2 valises</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">⚡ Quattro</span>
                    <span className="spec-value">Intégral</span>
                  </div>
                </div>
                <div className="vehicle-features">
                  <span className="feature">✓ Suspension pneumatique</span>
                  <span className="feature">✓ Matrix LED</span>
                  <span className="feature">✓ Bang & Olufsen</span>
                  <span className="feature">✓ Assistant virtuel</span>
                </div>
                <p className="vehicle-description">
                  L'Audi A8 représente l'avant-garde technologique avec sa suspension pneumatique adaptative,
                  ses phares Matrix LED et son système d'infodivertissement intuitif. Parfaite pour allier
                  performance et confort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Flotte;
