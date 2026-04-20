import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import { FaBriefcase, FaHome, FaSearch, FaStar, FaUserAlt, FaWallet, FaClipboardList, FaUserCircle } from 'react-icons/fa';
import { useAuth } from './context/AuthContext';
import Navebar from './composants/Navebar';
import Sidebar from './composants/Sidebar';

const clientMetrics = [
  { title: 'Annonces publiées', value: '12', icon: FaHome, color: '#20c997' },
  { title: 'Demandes actives', value: '9', icon: FaClipboardList, color: '#4c6ef5' },
  { title: 'Paiements', value: '5', icon: FaWallet, color: '#f59f00' },
  { title: 'Profil complet', value: '88%', icon: FaUserCircle, color: '#f03e3e' },
];

const properties = [
  { id: 1, title: 'Maison familiale', type: 'Maison', status: 'Disponible', price: '120 000 CFA', location: 'Dakar' },
  { id: 2, title: 'Appartement 2 pièces', type: 'Appartement', status: 'Loué', price: '65 000 CFA', location: 'Mbour' },
  { id: 3, title: 'Terrain urbain', type: 'Terrain', status: 'Disponible', price: '42 000 CFA', location: 'Thies' },
];

const requests = [
  { id: 201, property: 'Maison familiale', type: 'Achat', status: 'En attente', date: '10/04/2026' },
  { id: 202, property: 'Appartement 2 pièces', type: 'Location', status: 'Acceptée', date: '08/04/2026' },
];

const payments = [
  { id: 301, item: 'Frais de publication', amount: '120 CFA', status: 'Payé', date: '03/04/2026' },
  { id: 302, item: 'Commission', amount: '350 CFA', status: 'En attente', date: '11/04/2026' },
];

function ClientDashboard() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tableau');
  const [filter, setFilter] = useState('');

  const filteredProperties = useMemo(() => {
    const query = filter.toLowerCase();
    return properties.filter(
      (property) =>
        property.title.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query)
    );
  }, [filter]);

  const sidebarItems = [
    { path: '/dashboard', label: 'Tableau' },
    { path: '/client', label: 'Mes annonces' },
    { path: '/client', label: 'Mes demandes' },
    { path: '/client', label: 'Paiements' },
    { path: '/client', label: 'Compte' },
  ];

  return (
    <>
      <Navebar />
      <div className="dashboard-layout client-dashboard">
        <Sidebar title="Portail client" items={sidebarItems} />
        <main className="dashboard-main">
          <Container fluid className="p-4">
          <div className="dashboard-hero rounded-4 p-4 mb-4 shadow-sm">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
              <div>
                <h1 className="dashboard-title">Portail client</h1>
                <p className="dashboard-subtitle">Bienvenue {auth.user?.name || 'sur votre espace client'}, gérez vos annonces, demandes et paiements depuis un tableau de bord moderne.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap">
                <Button variant="light" className="dashboard-hero-btn" onClick={() => navigate('/annonce/creer')}>
                  Créer une annonce
                </Button>
                <Button variant="primary" className="dashboard-hero-btn" onClick={() => setActiveTab('Mes demandes')}>
                  Voir mes demandes
                </Button>
              </div>
            </div>
          </div>

          <div className="dashboard-tabs mb-4 rounded-4 shadow-sm bg-white p-3">
            {['Tableau', 'Mes annonces', 'Mes demandes', 'Paiements', 'Compte'].map((tab) => (
              <button
                key={tab}
                className={`dashboard-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Tableau' && (
            <>
              <Row className="g-4 mb-4">
                {clientMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <Col lg={3} md={6} key={metric.title}>
                      <Card className="dashboard-card h-100 border-0 shadow-sm rounded-4">
                        <Card.Body>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                              <Card.Title className="mb-1 text-secondary" style={{ fontSize: '0.95rem' }}>{metric.title}</Card.Title>
                              <h3>{metric.value}</h3>
                            </div>
                            <div className="dashboard-icon" style={{ background: `${metric.color}15`, color: metric.color }}>
                              <Icon />
                            </div>
                          </div>
                          <ProgressBar now={Math.random() * 60 + 30} variant="info" />
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>

              <Row className="g-4">
                <Col xl={8}>
                  <Card className="dashboard-card border-0 shadow-sm rounded-4">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <Card.Title>Mes annonces</Card.Title>
                          <Card.Text className="text-muted">Suivez vos annonces publiées et filtrez-les rapidement.</Card.Text>
                        </div>
                        <Form className="d-flex align-items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                          <Form.Control
                            type="search"
                            placeholder="Rechercher"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            style={{ minWidth: '220px' }}
                          />
                          <Button variant="outline-secondary">
                            <FaSearch />
                          </Button>
                        </Form>
                      </div>
                      <Table responsive hover className="align-middle mb-0">
                        <thead>
                          <tr>
                            <th>Bien</th>
                            <th>Type</th>
                            <th>Localisation</th>
                            <th>Statut</th>
                            <th>Prix</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProperties.map((property) => (
                            <tr key={property.id}>
                              <td>{property.title}</td>
                              <td>{property.type}</td>
                              <td>{property.location}</td>
                              <td>{property.status}</td>
                              <td>{property.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={4}>
                  <Card className="dashboard-card border-0 shadow-sm rounded-4">
                    <Card.Body>
                      <Card.Title>Demandes & services</Card.Title>
                      <div className="mb-4">
                        <h6>Demandes récentes</h6>
                        {requests.map((request) => (
                          <div key={request.id} className="mb-3">
                            <strong>{request.type}</strong> • {request.property}
                            <div className="text-muted small">{request.status} • {request.date}</div>
                          </div>
                        ))}
                      </div>
                      <h6>Services réservés</h6>
                      {payments.slice(0, 2).map((payment) => (
                        <div key={payment.id} className="mb-3">
                          <strong>{payment.item}</strong>
                          <div className="text-muted small">{payment.amount} • {payment.status}</div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {activeTab === 'Mes annonces' && (
            <Row className="g-4">
              <Col>
                <Card className="dashboard-card border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <Card.Title>Mes annonces</Card.Title>
                    <p className="text-muted">Toutes vos annonces sont visibles ici, avec statut et options d’édition.</p>
                    <Table responsive hover className="align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Bien</th>
                          <th>Type</th>
                          <th>Statut</th>
                          <th>Prix</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map((property) => (
                          <tr key={property.id}>
                            <td>{property.title}</td>
                            <td>{property.type}</td>
                            <td>{property.status}</td>
                            <td>{property.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {activeTab === 'Mes demandes' && (
            <Row className="g-4">
              <Col>
                <Card className="dashboard-card border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <Card.Title>Mes demandes</Card.Title>
                    <p className="text-muted">Suivez l’avancement de chaque demande et répondez rapidement aux acheteurs ou locataires.</p>
                    {requests.map((request) => (
                      <div key={request.id} className="request-card rounded-4 p-3 mb-3 border">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="mb-0">{request.property}</h6>
                          <span className="badge bg-warning text-dark">{request.status}</span>
                        </div>
                        <p className="mb-1 text-muted">Type : {request.type}</p>
                        <small className="text-muted">Date : {request.date}</small>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {activeTab === 'Paiements' && (
            <Row className="g-4">
              <Col>
                <Card className="dashboard-card border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <Card.Title>Paiements</Card.Title>
                    <p className="text-muted">Consultez l’historique de vos paiements et gérez vos factures facilement.</p>
                    <Table responsive hover className="align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Service</th>
                          <th>Montant</th>
                          <th>Statut</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td>{payment.item}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.status}</td>
                            <td>{payment.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {activeTab === 'Compte' && (
            <Row className="g-4">
              <Col lg={5}>
                <Card className="dashboard-card border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <Card.Title>Mon compte</Card.Title>
                    <div className="profile-card p-3 rounded-4 bg-light">
                      <FaUserAlt size={36} className="mb-3 text-primary" />
                      <h5>{auth.user?.name}</h5>
                      <p className="text-muted mb-1">{auth.user?.email}</p>
                      <p className="text-muted">Rôle : {auth.user?.role}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={7}>
                <Card className="dashboard-card border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <Card.Title>Préférences du compte</Card.Title>
                    <div className="d-flex flex-column gap-3 mt-3">
                      <div className="p-3 rounded-4 bg-white border">Paramètres de sécurité</div>
                      <div className="p-3 rounded-4 bg-white border">Notifications</div>
                      <div className="p-3 rounded-4 bg-white border">Informations de facturation</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </main>
    </div>
    </>
  );
}

export default ClientDashboard;
