import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Alert } from 'react-bootstrap';
import { FaCoins } from 'react-icons/fa';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { useAuth } from './context/AuthContext';

function PropertyPage({ title, subtitle, defaultProperties, category, icon: Icon }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [validatedAds, setValidatedAds] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem('ads') || '[]');
    setValidatedAds(
      storedAds.filter((ad) => ad.status === 'Validée' && ad.type === category)
    );
  }, [category]);

  const properties = useMemo(() => {
    const validatedCards = validatedAds.map((ad) => ({
      id: ad.id,
      title: ad.title,
      location: ad.location || 'Localisation non renseignée',
      description: ad.description || 'Aucune description fournie.',
      price: ad.price || 'À définir',
      type: ad.type || category,
      image: ad.image || '/images/bien-immeuble.jpeg',
      isValidatedAd: true,
    }));

    return [...defaultProperties, ...validatedCards];
  }, [validatedAds, defaultProperties, category]);

  const formatPrice = (price) => {
    const text = String(price).trim();
    if (!text) return 'Prix non renseigné';
    return /CFA/i.test(text) ? text : `${text} CFA`;
  };

  const getActionLabel = (property) => {
    const type = (property.type || category || '').toLowerCase();
    return type === 'vente' || type === 'achat' ? 'Acheter' : 'Réserver';
  };

  const getActionType = (property) => {
    const type = (property.type || category || '').toLowerCase();
    return type === 'vente' || type === 'achat' ? 'Achat' : 'Réservation';
  };

  const handleActionClick = (property) => {
    if (!auth.isAuthenticated) {
      navigate('/connexion');
      return;
    }
    setSelectedProperty(property);
    setShowModal(true);
    setFeedback('');
  };

  const confirmAction = () => {
    if (!selectedProperty) return;

    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const booking = {
      id: Date.now(),
      propertyId: selectedProperty.id,
      title: selectedProperty.title,
      type: getActionType(selectedProperty),
      price: formatPrice(selectedProperty.price),
      location: selectedProperty.location,
      date: new Date().toLocaleDateString('fr-FR'),
      user: auth.user?.name || 'Utilisateur',
    };

    localStorage.setItem('bookings', JSON.stringify([booking, ...storedBookings]));
    setFeedback(`Votre ${booking.type.toLowerCase()} pour "${booking.title}" a bien été enregistrée.`);
    setShowModal(false);
    setSelectedProperty(null);
  };

  return (
    <>
      <Navebar />
      <div
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #3b8ddf 0%, #5a9bd4 100%)',
          color: 'white',
          borderRadius: '20px',
          margin: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}
      >
        <Icon size={60} style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{title}</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{subtitle}</p>
        {validatedAds.length > 0 && (
          <div
            style={{
              marginTop: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255,255,255,0.14)',
              padding: '12px 20px',
              borderRadius: '999px',
              fontWeight: 600,
            }}
          >
            <FaCoins /> {validatedAds.length} annonce(s) validée(s) affichée(s)
          </div>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          padding: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {feedback && (
          <div style={{ gridColumn: '1 / -1' }}>
            <Alert variant="success">{feedback}</Alert>
          </div>
        )}
        {properties.map((property) => (
          <div
            key={property.id}
            className="hover-card"
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '2px solid #3b8ddf',
            }}
          >
            <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
              <img
                src={property.image}
                alt={property.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#3b8ddf', marginBottom: '10px', fontSize: '1.3rem' }}>{property.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#666', marginBottom: '15px' }}>
                <span style={{ fontWeight: 600 }}>{property.location}</span>
              </div>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '15px', lineHeight: '1.5' }}>
                {property.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: '#3b8ddf', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <FaCoins size={20} style={{ marginRight: '5px' }} />
                  {formatPrice(property.price)}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#495057' }}>{property.isValidatedAd ? 'Annonce validée' : 'Annonce de démonstration'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" onClick={() => handleActionClick(property)}>
                  {getActionLabel(property)}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProperty ? getActionLabel(selectedProperty) : 'Confirmation'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProperty ? (
            <>
              <p>
                Vous êtes sur le point de <strong>{getActionLabel(selectedProperty).toLowerCase()}</strong> :
              </p>
              <p>
                <strong>{selectedProperty.title}</strong>
                <br />
                {selectedProperty.location}
                <br />
                Prix : {formatPrice(selectedProperty.price)}
              </p>
              <p>Confirmez pour enregistrer votre demande dans votre espace.</p>
            </>
          ) : (
            <p>Chargement...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={confirmAction}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}

export default PropertyPage;
