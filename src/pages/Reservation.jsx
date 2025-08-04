import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Reservation() {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    email: '',
    phone: '',
    pickup_address: '',
    destination_address: '',
    datetime: '',
    vehicle: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialiser EmailJS
  useEffect(() => {
    console.log('🔧 Initialisation EmailJS...');
    try {
      emailjs.init("6z4k8osJ7ICb5XBmH"); // Votre clé publique EmailJS
      console.log('✅ EmailJS initialisé avec succès');
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation EmailJS:', error);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Début de soumission du formulaire');
    console.log('📋 Données du formulaire:', formData);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Vérification que tous les champs requis sont remplis
      if (!formData.surname || !formData.name || !formData.email || !formData.phone ||
        !formData.pickup_address || !formData.destination_address || !formData.datetime || !formData.vehicle) {
        throw new Error('Tous les champs obligatoires doivent être remplis');
      }

      // Préparation des données pour EmailJS - CORRESPONDANT AU TEMPLATE
      const templateParams = {
        name: formData.name,
        surname: formData.surname,
        number: formData.phone,
        departure_address: formData.pickup_address,
        destination_address: formData.destination_address,
        datetime: formData.datetime,
        vehicle: formData.vehicle,
        details: formData.details || 'Aucun détail supplémentaire'
      };

      console.log('📧 Paramètres du template (corrigés):', templateParams);
      console.log('🔑 Configuration EmailJS:', {
        serviceId: 'service_8l8yw94',
        templateId: 'template_9shl8al'
      });

      console.log('📤 Envoi en cours avec paramètres corrigés...');

      const result = await emailjs.send(
        'service_8l8yw94',
        'template_9shl8al',
        templateParams
      );

      console.log('✅ Email envoyé avec succès:', result);
      setSubmitStatus('success');

      // Réinitialiser le formulaire
      setFormData({
        surname: '',
        name: '',
        email: '',
        phone: '',
        pickup_address: '',
        destination_address: '',
        datetime: '',
        vehicle: '',
        details: ''
      });

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      console.error('📄 Détails de l\'erreur:', {
        name: error.name,
        message: error.message,
        status: error.status,
        text: error.text
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      console.log('🏁 Fin de soumission du formulaire');
    }
  };

  return (
    <main>
      <section className="hero-reservation">
        <div className="hero-content">
          <h1>Réservez Votre Transport</h1>
          <p>Un service de luxe à votre disposition en quelques clics</p>
        </div>
      </section>

      <section className="reservation-intro">
        <div className="container">
          <h2>Réservation Simple et Rapide</h2>
          <p>
            Planifiez votre trajet avec notre Mercedes CLA disponible. Remplissez le formulaire ci-dessous
            et nous vous confirmerons votre réservation dans les plus brefs délais.
          </p>
        </div>
      </section>

      <section className="reservation-form-section">
        <div className="container">
          <div className="reservation-content">
            <div className="form-section">
              <h2>Formulaire de Réservation</h2>
              <form id="reservation-form" className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <h3>👤 Informations personnelles</h3>
                  <div className="form-row">
                    <input
                      type="text"
                      name="surname"
                      placeholder="Nom *"
                      required
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Prénom *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <h3>🚗 Détails du trajet</h3>
                  <div className="form-row">
                    <input
                      type="text"
                      name="pickup_address"
                      placeholder="Adresse de départ *"
                      required
                      value={formData.pickup_address}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="destination_address"
                      placeholder="Adresse de destination *"
                      required
                      value={formData.destination_address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <h3>🕐 Date et heure</h3>
                  <div className="form-row">
                    <input
                      type="datetime-local"
                      name="datetime"
                      required
                      value={formData.datetime}
                      onChange={handleChange}
                    />
                    <select
                      name="vehicle"
                      required
                      value={formData.vehicle}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionner un véhicule</option>
                      <option value="mercedes-cla">Mercedes CLA - Disponible</option>
                      <option value="bmw-7" disabled>BMW Série 7 - Indisponible</option>
                      <option value="audi-a8" disabled>Audi A8 - Indisponible</option>
                      <option value="mercedes-v" disabled>Mercedes Classe V - Indisponible</option>
                      <option value="tesla-s" disabled>Tesla Model S - Indisponible</option>
                      <option value="range-rover" disabled>Range Rover - Indisponible</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <h3>📝 Informations complémentaires</h3>
                  <textarea
                    name="details"
                    placeholder="Détails supplémentaires, demandes spéciales..."
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="success-message" style={{ color: 'green', marginBottom: '1rem', padding: '1rem', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '5px' }}>
                    ✓ Votre réservation a été envoyée avec succès ! Nous vous contacterons rapidement.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message" style={{ color: 'red', marginBottom: '1rem', padding: '1rem', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
                    ✗ <strong>Erreur de configuration EmailJS</strong><br />
                    Le Service ID 'service_q6kk4mp' n'est pas valide.<br />
                    Pour corriger cela :<br />
                    1. Allez sur <a href="https://dashboard.emailjs.com/admin" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>dashboard.emailjs.com/admin</a><br />
                    2. Connectez-vous à votre compte<br />
                    3. Copiez le bon Service ID depuis votre dashboard<br />
                    4. Remplacez 'service_q6kk4mp' dans le code<br />
                    <br />
                    <strong>Ou contactez-nous directement via WhatsApp.</strong>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary btn-large"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer ma Réservation'}
                </button>
              </form>
            </div>

            <div className="reservation-info">
              <h2>Votre Véhicule</h2>
              <div className="selected-vehicle">
                <div className="vehicle-image-preview">
                  <img src="/images/vehicule-1.jpg" alt="Mercedes CLA" />
                </div>
                <div className="vehicle-details">
                  <h3>Mercedes CLA</h3>
                  <p className="vehicle-subtitle">Élégance et confort allemand</p>
                  <div className="vehicle-features-list">
                    <div className="feature-item">
                      <span className="feature-icon">👥</span>
                      <span>3 passagers</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🧳</span>
                      <span>2 valises</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">✨</span>
                      <span>Sièges chauffants</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🎵</span>
                      <span>Système audio premium</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reservation-benefits">
                <h3>Pourquoi nous choisir ?</h3>
                <ul>
                  <li>✓ Service disponible 24h/24, 7j/7</li>
                  <li>✓ Chauffeurs professionnels expérimentés</li>
                  <li>✓ Véhicules entretenus aux plus hauts standards</li>
                  <li>✓ Ponctualité garantie</li>
                  <li>✓ Tarifs transparents sans surprise</li>
                  <li>✓ Annulation gratuite jusqu'à 2h avant</li>
                </ul>
              </div>

              <div className="contact-urgent">
                <h3>Réservation urgente ?</h3>
                <p>Contactez-nous directement pour une réservation immédiate :</p>
                <div className="urgent-contacts">
                  <a href="https://wa.me/33767076156" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservation;
