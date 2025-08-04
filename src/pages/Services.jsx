import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <main>
      <section className="hero-services">
        <div className="hero-content">
          <h1>Nos Services Premium</h1>
          <p>Une gamme complète de services de transport de luxe adaptés à tous vos besoins</p>
        </div>
      </section>

      <section className="services-detailed">
        <div className="container">
          <div className="service-detail">
            <div className="service-image">
              <img src="/assets/images/service-1.jpg" alt="Transferts Aéroports & Gares" loading="lazy" />
            </div>
            <div className="service-info">
              <h2>🛫 Transferts Aéroports & Gares</h2>
              <p>
                Voyagez en toute sérénité avec nos transferts vers tous les aéroports et gares de la région. 
                Nos chauffeurs surveillent vos vols en temps réel pour s'adapter aux retards éventuels.
              </p>
              <ul>
                <li>Surveillance des vols en temps réel</li>
                <li>Accueil personnalisé avec panneau nominatif</li>
                <li>Aide avec les bagages</li>
                <li>Véhicules spacieux et confortables</li>
                <li>Service disponible 24h/24</li>
              </ul>
              <div className="service-features">
                <span className="feature">✓ Ponctualité garantie</span>
                <span className="feature">✓ Tarif fixe</span>
                <span className="feature">✓ Tous aéroports</span>
              </div>
            </div>
          </div>

          <div className="service-detail reverse">
            <div className="service-image">
              <img src="/assets/images/service-2.jpg" alt="Événements Professionnels" loading="lazy" />
            </div>
            <div className="service-info">
              <h2>🏢 Événements Professionnels</h2>
              <p>
                Impressionnez vos clients et partenaires avec un service de transport irréprochable. 
                Idéal pour les réunions d'affaires, conférences, séminaires et événements corporatifs.
              </p>
              <ul>
                <li>Chauffeurs en tenue professionnelle</li>
                <li>Véhicules équipés Wi-Fi</li>
                <li>Confidentialité absolue</li>
                <li>Facturation entreprise possible</li>
                <li>Service multi-trajets</li>
              </ul>
              <div className="service-features">
                <span className="feature">✓ Discrétion</span>
                <span className="feature">✓ Facture pro</span>
                <span className="feature">✓ Multi-trajets</span>
              </div>
            </div>
          </div>

          <div className="service-detail">
            <div className="service-image">
              <img src="/assets/images/service-3.jpg" alt="Mariages & Soirées Privées" loading="lazy" />
            </div>
            <div className="service-info">
              <h2>💒 Mariages & Soirées Privées</h2>
              <p>
                Rendez votre jour J inoubliable avec nos services dédiés aux mariages et événements privés. 
                Véhicules décorés sur demande et service personnalisé pour une journée parfaite.
              </p>
              <ul>
                <li>Décoration des véhicules incluse</li>
                <li>Coordination avec vos prestataires</li>
                <li>Plusieurs véhicules disponibles</li>
                <li>Photographe transport disponible</li>
                <li>Forfaits sur-mesure</li>
              </ul>
              <div className="service-features">
                <span className="feature">✓ Décoration incluse</span>
                <span className="feature">✓ Multi-véhicules</span>
                <span className="feature">✓ Sur-mesure</span>
              </div>
            </div>
          </div>

          <div className="service-detail reverse">
            <div className="service-image">
              <img src="/assets/images/service-4.jpg" alt="Visites Touristiques & Excursions" loading="lazy" />
            </div>
            <div className="service-info">
              <h2>🏛️ Visites Touristiques & Excursions</h2>
              <p>
                Découvrez les plus beaux sites touristiques avec le confort d'un chauffeur guide. 
                Circuits personnalisés et recommandations locales pour une expérience authentique.
              </p>
              <ul>
                <li>Chauffeurs guides expérimentés</li>
                <li>Circuits personnalisables</li>
                <li>Recommandations restaurants</li>
                <li>Arrêts photos inclus</li>
                <li>Tarifs journée/demi-journée</li>
              </ul>
              <div className="service-features">
                <span className="feature">✓ Guide local</span>
                <span className="feature">✓ Circuits flex</span>
                <span className="feature">✓ Conseils pro</span>
              </div>
            </div>
          </div>

          <div className="service-detail">
            <div className="service-image">
              <img src="/assets/images/service-5.jpg" alt="Transport VIP & Personnalités" loading="lazy" />
            </div>
            <div className="service-info">
              <h2>⭐ Transport VIP & Personnalités</h2>
              <p>
                Service exclusif pour personnalités, célébrités et clients VIP nécessitant un niveau 
                de service exceptionnel. Discrétion absolue et sécurité renforcée.
              </p>
              <ul>
                <li>Chauffeurs formés sécurité VIP</li>
                <li>Véhicules blindés disponibles</li>
                <li>Escorte de sécurité possible</li>
                <li>Itinéraires sécurisés</li>
                <li>Confidentialité garantie</li>
              </ul>
              <div className="service-features">
                <span className="feature">✓ Sécurité max</span>
                <span className="feature">✓ Discrétion</span>
                <span className="feature">✓ VIP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Prêt à Réserver ?</h2>
          <p>Contactez-nous pour un devis personnalisé ou réservez directement en ligne</p>
          <div className="cta-buttons">
            <Link to="/reservation" className="btn-primary">Réserver Maintenant</Link>
            <Link to="/contact" className="btn-secondary">Demander un Devis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
