import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    datetime: '',
    service: '',
    details: ''
  });

  const [quoteData, setQuoteData] = useState({
    company: '',
    email: '',
    contact_name: '',
    contact_phone: '',
    service_type: '',
    passengers: '',
    event_date: '',
    budget: '',
    project_details: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteChange = (e) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation rapide:', formData);
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    alert('Votre demande de réservation a été envoyée !');
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Demande de devis:', quoteData);
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    alert('Votre demande de devis a été envoyée !');
  };

  return (
    <main>
      <section className="hero-contact">
        <div className="hero-content">
          <h1>Nous Contacter</h1>
          <p>Un service de luxe accessible 24h/24, 7j/7 pour tous vos besoins de transport</p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponibilité</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2h</div>
              <div className="stat-label">Temps de réponse</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Service premium</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-methods">
        <div className="container">
          <h2>Moyens de Contact</h2>
          <p className="section-subtitle">Choisissez la méthode qui vous convient le mieux pour nous joindre</p>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p><strong>prestigecarbns@gmail.com</strong></p>
              <p>Réponse sous 2h en moyenne</p>
              <p>Parfait pour vos devis détaillés</p>
              <a href="mailto:prestigecarbns@gmail.com" className="contact-btn">Envoyer un email</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p><strong>07 67 07 61 56</strong></p>
              <p>Chat direct avec nos équipes</p>
              <p>Partage de localisation possible</p>
              <a href="https://wa.me/33767076156" className="contact-btn" target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3>Service 24/7</h3>
              <p><strong>24h/24 - 7j/7</strong></p>
              <p>Service d'urgence</p>
              <p>Réservation de dernière minute</p>
              <a href="tel:+33767076156" className="contact-btn">Appeler maintenant</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-forms">
        <div className="container">
          <div className="forms-grid">
            <div className="form-section">
              <h2>Réservation Rapide</h2>
              <form id="quick-booking-form" className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet *"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone *"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="pickup"
                    placeholder="Lieu de prise en charge *"
                    required
                    value={formData.pickup}
                    onChange={handleFormChange}
                  />
                  <input
                    type="text"
                    name="destination"
                    placeholder="Destination *"
                    required
                    value={formData.destination}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="datetime-local"
                    name="datetime"
                    required
                    value={formData.datetime}
                    onChange={handleFormChange}
                  />
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleFormChange}
                  >
                    <option value="">Type de service</option>
                    <option value="airport">Transfert aéroport</option>
                    <option value="business">Événement professionnel</option>
                    <option value="wedding">Mariage</option>
                    <option value="tourism">Visite touristique</option>
                    <option value="vip">Transport VIP</option>
                  </select>
                </div>
                <textarea
                  name="details"
                  placeholder="Détails supplémentaires (optionnel)"
                  rows="3"
                  value={formData.details}
                  onChange={handleFormChange}
                ></textarea>
                <button type="submit" className="btn-primary">Réserver Maintenant</button>
              </form>
            </div>

            <div className="form-section">
              <h2>Demande de Devis</h2>
              <form id="quote-form" className="contact-form" onSubmit={handleQuoteSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="company"
                    placeholder="Nom de l'entreprise"
                    value={quoteData.company}
                    onChange={handleQuoteChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="contact_name"
                    placeholder="Personne de contact *"
                    required
                    value={quoteData.contact_name}
                    onChange={handleQuoteChange}
                  />
                  <input
                    type="tel"
                    name="contact_phone"
                    placeholder="Téléphone *"
                    required
                    value={quoteData.contact_phone}
                    onChange={handleQuoteChange}
                  />
                </div>
                <div className="form-row">
                  <select
                    name="service_type"
                    required
                    value={quoteData.service_type}
                    onChange={handleQuoteChange}
                  >
                    <option value="">Type de service</option>
                    <option value="regular">Service régulier</option>
                    <option value="event">Événement ponctuel</option>
                    <option value="corporate">Contrat entreprise</option>
                    <option value="wedding">Forfait mariage</option>
                  </select>
                  <input
                    type="number"
                    name="passengers"
                    placeholder="Nombre de passagers"
                    min="1"
                    max="20"
                    value={quoteData.passengers}
                    onChange={handleQuoteChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="date"
                    name="event_date"
                    placeholder="Date de l'événement"
                    value={quoteData.event_date}
                    onChange={handleQuoteChange}
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget approximatif"
                    value={quoteData.budget}
                    onChange={handleQuoteChange}
                  />
                </div>
                <textarea
                  name="project_details"
                  placeholder="Décrivez votre projet en détail *"
                  rows="4"
                  required
                  value={quoteData.project_details}
                  onChange={handleQuoteChange}
                ></textarea>
                <button type="submit" className="btn-secondary">Demander un Devis</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Questions Fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>🕐 Quel est votre délai de réservation ?</h3>
              <p>Nous acceptons les réservations jusqu'à 30 minutes avant le départ, sous réserve de disponibilité. Pour les événements spéciaux, nous recommandons de réserver 48h à l'avance.</p>
            </div>
            <div className="faq-item">
              <h3>💳 Quels sont vos moyens de paiement ?</h3>
              <p>Nous acceptons les espèces, cartes bancaires, virements et facturations entreprise. Le paiement peut se faire à bord ou à l'avance selon votre préférence.</p>
            </div>
            <div className="faq-item">
              <h3>🛫 Surveillez-vous les vols en temps réel ?</h3>
              <p>Oui, nous surveillons automatiquement tous les vols pour les transferts aéroport. En cas de retard, votre chauffeur s'adapte sans frais supplémentaires.</p>
            </div>
            <div className="faq-item">
              <h3>👨‍💼 Vos chauffeurs sont-ils formés ?</h3>
              <p>Tous nos chauffeurs sont des professionnels expérimentés, formés au service de luxe, à la conduite défensive et aux protocoles de sécurité VIP.</p>
            </div>
            <div className="faq-item">
              <h3>🚗 Puis-je choisir mon véhicule ?</h3>
              <p>Absolument ! Vous pouvez spécifier vos préférences lors de la réservation. Nous ferons de notre mieux pour répondre à votre demande selon disponibilité.</p>
            </div>
            <div className="faq-item">
              <h3>❌ Quelle est votre politique d'annulation ?</h3>
              <p>Annulation gratuite jusqu'à 2h avant le départ. Pour les événements spéciaux, conditions particulières applicables selon le forfait choisi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-banner">
            <h2>🚨 Service d'Urgence</h2>
            <p>Besoin d'un transport immédiat ? Notre service d'urgence est disponible 24h/24</p>
            <div className="emergency-buttons">
              <a href="https://wa.me/33767076156" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">Appeler Maintenant</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
