import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { FaCheck, FaTimes, FaClipboardList } from 'react-icons/fa';

function AdminAnnonceValidation() {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem('ads') || '[]');
    setAds(storedAds);
  }, []);

  const updateStatus = (id, status) => {
    const updatedAds = ads.map((ad) => (ad.id === id ? { ...ad, status } : ad));
    localStorage.setItem('ads', JSON.stringify(updatedAds));
    setAds(updatedAds);
  };

  const statusVariant = (status) => {
    switch (status) {
      case 'Validée':
        return 'success';
      case 'Refusée':
        return 'danger';
      case 'En attente':
      default:
        return 'warning';
    }
  };

  return (
    <>
      <Navebar />
      <Container fluid className="py-5" style={{ background: '#f2f6fb', minHeight: '100vh' }}>
        <Row className="justify-content-center">
          <Col xl={10} lg={11}>
            <Card className="shadow-sm rounded-4 border-0 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                  <div>
                    <h2>Validation des annonces</h2>
                    <p className="text-muted">Toutes les annonces créées par les clients apparaissent ici. Validez ou refusez chaque proposition.</p>
                  </div>
                  <Button variant="outline-secondary" onClick={() => navigate('/superadmin')}>
                    Retour au panneau admin
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h4 className="mb-1">Annonces à valider</h4>
                    <p className="text-muted mb-0">Les nouvelles annonces sont marquées « En attente ». Sélectionnez une action pour changer leur statut.</p>
                  </div>
                  <Badge bg="info" pill>
                    {ads.length} annonces
                  </Badge>
                </div>

                <Table responsive hover className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Titre</th>
                      <th>Type</th>
                      <th>Localisation</th>
                      <th>Prix</th>
                      <th>Auteur</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ads.map((ad) => (
                      <tr key={ad.id}>
                        <td>{ad.id}</td>
                        <td>{ad.title}</td>
                        <td>{ad.type}</td>
                        <td>{ad.location}</td>
                        <td>{ad.price}</td>
                        <td>{ad.owner}</td>
                        <td>
                          <Badge bg={statusVariant(ad.status)}>{ad.status}</Badge>
                        </td>
                        <td>
                          <Button
                            size="sm"
                            variant="success"
                            className="me-2"
                            disabled={ad.status === 'Validée'}
                            onClick={() => updateStatus(ad.id, 'Validée')}
                          >
                            <FaCheck className="me-1" /> Valider
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            disabled={ad.status === 'Refusée'}
                            onClick={() => updateStatus(ad.id, 'Refusée')}
                          >
                            <FaTimes className="me-1" /> Refuser
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {ads.length === 0 && (
                      <tr>
                        <td colSpan="8" className="text-center text-muted py-4">
                          Aucune annonce en attente. Les annonces validées ou refusées apparaîtront ici après création.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AdminAnnonceValidation;
