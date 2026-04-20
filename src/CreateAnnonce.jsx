import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { useAuth } from './context/AuthContext';

function CreateAnnonce() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Appartement');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [adminNote, setAdminNote] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !location || !price || !description) {
      setError('Veuillez remplir tous les champs requis.');
      setSuccess('');
      return;
    }

    const existingAds = JSON.parse(localStorage.getItem('ads') || '[]');
    const newAd = {
      id: Date.now(),
      title,
      type,
      location,
      price,
      description,
      note: adminNote,
      status: 'En attente',
      owner: auth.user?.name || 'Utilisateur',
      email: auth.user?.email || '',
      createdAt: new Date().toLocaleDateString('fr-FR'),
    };

    existingAds.unshift(newAd);
    localStorage.setItem('ads', JSON.stringify(existingAds));

    setTitle('');
    setType('Appartement');
    setLocation('');
    setPrice('');
    setDescription('');
    setAdminNote('');
    setSuccess('Votre annonce a bien été créée. Elle est en attente de validation par l’administrateur.');
    setError('');
  };

  return (
    <>
      <Navebar />
      <Container fluid className="py-5" style={{ background: '#f2f6fb', minHeight: '100vh' }}>
        <Row className="justify-content-center">
          <Col xl={8} lg={10}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body className="p-4">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3 mb-4">
                  <div>
                    <h2>Créer une annonce</h2>
                    <p className="text-muted">Renseignez les détails de votre bien. L’annonce sera visible côté client et le super admin pourra la valider ou la refuser.</p>
                  </div>
                  <Button variant="outline-secondary" onClick={() => navigate('/client')}>
                    Retour au portail client
                  </Button>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formTitle">
                        <Form.Label>Titre de l’annonce</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Appartement neuf centre-ville"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formType">
                        <Form.Label>Type de bien</Form.Label>
                        <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                          <option>Appartement</option>
                          <option>Maison</option>
                          <option>Terrain</option>
                          <option>Studio</option>
                          <option>Chambre</option>
                          <option>Local commercial</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-3 mt-3">
                    <Col md={6}>
                      <Form.Group controlId="formLocation">
                        <Form.Label>Localisation</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ville ou quartier"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formPrice">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: 120 000 CFA"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Décrivez le bien, ses caractéristiques et les points forts."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mt-3" controlId="formNote">
                    <Form.Label>Message interne (optionnel)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Ajouter une note pour l’administrateur"
                      value={adminNote}
                      onChange={(e) => setAdminNote(e.target.value)}
                    />
                  </Form.Group>

                  <div className="mt-4">
                    <Button type="submit" variant="primary" className="me-2">
                      Envoyer pour validation
                    </Button>
                    <Button variant="outline-secondary" onClick={() => navigate('/client')}>
                      Annuler
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CreateAnnonce;
