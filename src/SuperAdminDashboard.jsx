import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Table, Badge, ProgressBar, Form } from 'react-bootstrap';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import {
  FaUsers,
  FaHome,
  FaClipboardList,
  FaCoins,
  FaShieldAlt,
  FaBell,
  FaChartLine,
  FaUserCheck,
  FaCheckCircle,
  FaExchangeAlt,
  FaTools,
  FaEnvelopeOpenText,
} from 'react-icons/fa';

const dashboardMetrics = [
  { title: 'Utilisateurs', value: '1 482', icon: FaUsers, color: '#4c6ef5' },
  { title: 'Biens', value: '324', icon: FaHome, color: '#20c997' },
  { title: 'Demandes', value: '76', icon: FaClipboardList, color: '#f59f00' },
  { title: 'Revenus', value: '124 300 CFA', icon: FaCoins, color: '#f03e3e' },
];

const users = [
  { id: 1, name: 'Amina Diop', email: 'amina@example.com', role: 'Client', status: 'Active', verified: true },
  { id: 2, name: 'Karim Fall', email: 'karim@example.com', role: 'Agent', status: 'Inactive', verified: false },
  { id: 3, name: 'Sophie Martin', email: 'sophie@example.com', role: 'Admin', status: 'Active', verified: true },
];

const properties = [
  { id: 1, title: 'Appartement 3 pièces', type: 'Appartement', status: 'Publiée', location: 'Dakar', price: '65 000 CFA' },
  { id: 2, title: 'Maison familiale', type: 'Maison', status: 'En attente', location: 'Thies', price: '130 000 CFA' },
  { id: 3, title: 'Terrain constructible', type: 'Terrain', status: 'Validée', location: 'Mbour', price: '25 000 CFA' },
];

const requests = [
  { id: 101, client: 'Amina Diop', property: 'Appartement 3 pièces', status: 'En attente', agent: 'Karim Fall' },
  { id: 102, client: 'Jean Dupont', property: 'Maison familiale', status: 'Validée', agent: 'Sophie Martin' },
  { id: 103, client: 'Fatou Ndiaye', property: 'Terrain constructible', status: 'Refusée', agent: 'Non assigné' },
];

const transactions = [
  { id: 'TX-4587', client: 'Amina Diop', amount: '1 200 CFA', status: 'Validé', date: '08/04/2026' },
  { id: 'TX-4591', client: 'Karim Fall', amount: '850 CFA', status: 'En attente', date: '09/04/2026' },
  { id: 'TX-4599', client: 'Sophie Martin', amount: '2 400 CFA', status: 'Remboursé', date: '10/04/2026' },
];

const adminLogs = [
  { id: 1, action: 'Compte utilisateur désactivé', actor: 'Super Admin', timestamp: '13/04/2026 11:20' },
  { id: 2, action: 'Annonce validée', actor: 'Super Admin', timestamp: '13/04/2026 10:45' },
  { id: 3, action: 'Demande de location assignée à un agent', actor: 'Super Admin', timestamp: '12/04/2026 18:05' },
];

function statusBadge(status) {
  const variants = {
    Active: 'success',
    Inactive: 'secondary',
    Publiée: 'success',
    'En attente': 'warning',
    Validée: 'success',
    Refusée: 'danger',
    Validé: 'success',
    Remboursé: 'info',
  };
  return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
}

function SuperAdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navebar />
      <Container fluid className="px-4 py-5" style={{ background: '#f5f7fb', minHeight: '100vh' }}>
        <div
          style={{
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1c7ed6 0%, #339af0 100%)',
            color: 'white',
            padding: '40px 30px',
            marginBottom: '30px',
            boxShadow: '0 25px 60px rgba(15, 23, 42, 0.12)',
          }}
        >
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '10px' }}>Super Admin Dashboard</h1>
              <p style={{ fontSize: '1.05rem', opacity: 0.88, lineHeight: 1.7 }}>
                Contrôlez les utilisateurs, les biens, les demandes, les paiements et les paramètres de sécurité depuis une seule interface moderne.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <Button variant="light" className="me-2" style={{ minWidth: '150px' }}>
                <FaShieldAlt className="me-2" /> Sécurité
              </Button>
              <Button variant="outline-light" className="me-2" style={{ minWidth: '150px' }} onClick={() => navigate('/admin/validation-annonces')}>
                <FaClipboardList className="me-2" /> Valider annonces
              </Button>
              <Button variant="outline-light" style={{ minWidth: '150px' }}>
                <FaBell className="me-2" /> Notifications
              </Button>
            </Col>
          </Row>
        </div>

        <Row className="g-4 mb-4">
          {dashboardMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Col xl={3} md={6} key={metric.title}>
                <Card className="shadow-sm rounded-4 border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <Card.Title className="mb-1" style={{ fontSize: '1rem', fontWeight: 700, color: '#495057' }}>
                          {metric.title}
                        </Card.Title>
                        <h2 className="mb-0" style={{ fontSize: '2rem', color: '#1f2937' }}>{metric.value}</h2>
                      </div>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '18px',
                          background: `${metric.color}20`,
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <Icon size={24} color={metric.color} />
                      </div>
                    </div>
                    <ProgressBar now={Math.min(95, Math.random() * 100)} variant="primary" />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row className="g-4">
          <Col xl={8}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Gestion des utilisateurs</Card.Title>
                    <Card.Text className="text-muted">Afficher, modifier les rôles, vérifier ou désactiver les comptes.</Card.Text>
                  </div>
                  <Button variant="primary">
                    <FaUserCheck className="me-2" /> Ajouter un utilisateur
                  </Button>
                </div>
                <Table responsive hover className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Rôle</th>
                      <th>Statut</th>
                      <th>Vérifié</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{statusBadge(user.status)}</td>
                        <td>
                          {user.verified ? <Badge bg="success">Oui</Badge> : <Badge bg="warning text-dark">Non</Badge>}
                        </td>
                        <td>
                          <Button size="sm" variant="outline-primary" className="me-2">
                            Modifier
                          </Button>
                          <Button size="sm" variant={user.status === 'Active' ? 'outline-danger' : 'outline-success'}>
                            {user.status === 'Active' ? 'Désactiver' : 'Activer'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Paramètres rapides</Card.Title>
                <div className="d-grid gap-3 mt-4">
                  <Button variant="outline-secondary" className="text-start">
                    <FaTools className="me-2" /> Gérer catégories
                  </Button>
                  <Button variant="outline-secondary" className="text-start">
                    <FaExchangeAlt className="me-2" /> Configurer commissions
                  </Button>
                  <Button variant="outline-secondary" className="text-start">
                    <FaEnvelopeOpenText className="me-2" /> Paramètres notifications
                  </Button>
                  <Button variant="outline-secondary" className="text-start">
                    <FaShieldAlt className="me-2" /> Permissions & sécurité
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col xl={8}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Gestion des biens immobiliers</Card.Title>
                    <Card.Text className="text-muted">Valider, modifier, supprimer ou marquer comme vendu/loué.</Card.Text>
                  </div>
                  <Button variant="success">
                    <FaCheckCircle className="me-2" /> Nouvel avis
                  </Button>
                </div>
                <Table responsive hover className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Bien</th>
                      <th>Type</th>
                      <th>Localisation</th>
                      <th>Prix</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <tr key={property.id}>
                        <td>{property.id}</td>
                        <td>{property.title}</td>
                        <td>{property.type}</td>
                        <td>{property.location}</td>
                        <td>{property.price}</td>
                        <td>{statusBadge(property.status)}</td>
                        <td>
                          <Button size="sm" variant="outline-primary" className="me-2">
                            Voir
                          </Button>
                          <Button size="sm" variant="outline-danger">
                            Supprimer
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Support & tickets</Card.Title>
                    <Card.Text className="text-muted">Gérez les réclamations et messages des utilisateurs.</Card.Text>
                  </div>
                  <Badge bg="primary" style={{ fontSize: '0.95rem' }}>6 tickets ouverts</Badge>
                </div>
                <div className="mb-3">
                  <strong>Dernière réclamation</strong>
                  <p className="mb-0 text-muted">Problème de validation de document KYC pour M. Diallo.</p>
                </div>
                <Button variant="outline-primary" className="w-100">
                  Voir historique des tickets
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col xl={6}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Demandes clients</Card.Title>
                    <Card.Text className="text-muted">Suivez les demandes de location et d’achat.</Card.Text>
                  </div>
                  <Badge bg="warning" className="text-dark">
                    {requests.filter((req) => req.status === 'En attente').length} en attente
                  </Badge>
                </div>
                <Table responsive hover className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Client</th>
                      <th>Bien</th>
                      <th>Statut</th>
                      <th>Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.id}</td>
                        <td>{request.client}</td>
                        <td>{request.property}</td>
                        <td>{statusBadge(request.status)}</td>
                        <td>{request.agent}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Transactions</Card.Title>
                    <Card.Text className="text-muted">Validez les paiements et gérez les remboursements.</Card.Text>
                  </div>
                  <Badge bg="success">3 nouvelles</Badge>
                </div>
                <Table responsive hover className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Montant</th>
                      <th>Statut</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.client}</td>
                        <td>{transaction.amount}</td>
                        <td>{statusBadge(transaction.status)}</td>
                        <td>{transaction.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col xl={8}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Statistiques & tendances</Card.Title>
                <div className="mt-4">
                  <strong>Trafic et croissance</strong>
                  <ProgressBar now={75} label="Ventes +25%" className="my-3" />
                  <strong>Bookings</strong>
                  <ProgressBar now={60} label="Locations +15%" className="my-3" />
                  <strong>Conversion agent</strong>
                  <ProgressBar now={82} label="Agents +10%" className="my-3" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Journal des actions</Card.Title>
                <div style={{ maxHeight: '340px', overflowY: 'auto' }}>
                  {adminLogs.map((log) => (
                    <div key={log.id} style={{ marginBottom: '18px' }}>
                      <p className="mb-1" style={{ fontWeight: 700 }}>{log.action}</p>
                      <p className="mb-1 text-muted" style={{ fontSize: '0.95rem' }}>{log.actor}</p>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>{log.timestamp}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col xl={12}>
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700 }}>Vérification & sécurité</Card.Title>
                    <Card.Text className="text-muted">Suivez les comptes KYC et détectez les activités suspectes.</Card.Text>
                  </div>
                  <Badge bg="danger">Actif</Badge>
                </div>
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label>Mode d'authentification</Form.Label>
                      <Form.Select>
                        <option>2FA activé</option>
                        <option>2FA désactivé</option>
                        <option>E-mail uniquement</option>
                      </Form.Select>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Notification de sécurité</Form.Label>
                      <Form.Select>
                        <option>Emails + SMS</option>
                        <option>Emails seulement</option>
                        <option>SMS seulement</option>
                      </Form.Select>
                    </Col>
                    <Col md={12} className="d-flex gap-2">
                      <Button variant="primary">Sauvegarder</Button>
                      <Button variant="outline-secondary">Réinitialiser</Button>
                    </Col>
                  </Row>
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

export default SuperAdminDashboard;
