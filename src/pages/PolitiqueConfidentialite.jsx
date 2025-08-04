import React from 'react';

function PolitiqueConfidentialite() {
  return (
    <main>
      <section className="footer-links">
        <div className="container">
          <h1>Politique de confidentialité</h1>
          
          <div className="legal-content">
            <p>
              La protection de vos données personnelles est importante pour nous. Cette politique de confidentialité 
              décrit la manière dont nous collectons, utilisons et protégeons vos informations.
            </p>

            <h3>Collecte de données</h3>
            <p>
              Nous collectons des informations personnelles, telles que votre nom, email et numéro de téléphone 
              lorsque vous remplissez notre formulaire de réservation ou de contact.
            </p>

            <h3>Utilisation des données</h3>
            <p>
              Les informations collectées sont utilisées pour :
            </p>
            <ul>
              <li>Traiter votre réservation</li>
              <li>Vous contacter concernant nos services</li>
              <li>Améliorer la qualité de nos prestations</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
            </ul>

            <h3>Protection des données</h3>
            <p>
              Nous nous engageons à protéger vos informations personnelles. Elles ne sont partagées avec aucun 
              tiers sans votre consentement préalable, sauf dans les cas prévus par la loi.
            </p>

            <h3>Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès aux données vous concernant</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>

            <h3>Contact</h3>
            <p>
              Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles, 
              vous pouvez nous contacter à : ine.benss@gmail.com
            </p>

            <h3>Cookies</h3>
            <p>
              Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
              Aucun cookie de tracking n'est utilisé sans votre consentement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PolitiqueConfidentialite;
