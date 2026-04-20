import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { FaBuilding, FaHome, FaBed, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

function Dashboard() {
  return (
    <>
    <Navebar />
    <Container className="mt-5" style={{ padding: '20px' }}>
      <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, #3b8ddf 0%, #5a9bd4 100%)',
          color: 'white',
          borderRadius: '20px',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
          <FaChartLine size={60} style={{ marginBottom: '20px' }} />
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Dashboard</h1>
          <p style={{ fontSize: '1.2rem' }}>Bienvenue dans votre tableau de bord KayeDeuk</p>
      </div>
      <Row>
        <Col md={4}>
          <Card className="text-center hover-card" style={{
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '2px solid #3b8ddf',
              transition: 'all 0.3s ease'
          }}>
            <Card.Body style={{ padding: '30px' }}>
              <FaBuilding size={40} color="#3b8ddf" style={{ marginBottom: '15px' }} />
              <Card.Title style={{ color: '#3b8ddf', fontWeight: 'bold' }}>Appartements</Card.Title>
              <Card.Text className="display-4" style={{ color: '#3b8ddf', fontWeight: 'bold' }}>15</Card.Text>
              <Card.Text>Disponibles</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center hover-card" style={{
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '2px solid #3b8ddf',
              transition: 'all 0.3s ease'
          }}>
            <Card.Body style={{ padding: '30px' }}>
              <FaHome size={40} color="#3b8ddf" style={{ marginBottom: '15px' }} />
              <Card.Title style={{ color: '#3b8ddf', fontWeight: 'bold' }}>Studios</Card.Title>
              <Card.Text className="display-4" style={{ color: '#3b8ddf', fontWeight: 'bold' }}>8</Card.Text>
              <Card.Text>Disponibles</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center hover-card" style={{
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '2px solid #3b8ddf',
              transition: 'all 0.3s ease'
          }}>
            <Card.Body style={{ padding: '30px' }}>
              <FaBed size={40} color="#3b8ddf" style={{ marginBottom: '15px' }} />
              <Card.Title style={{ color: '#3b8ddf', fontWeight: 'bold' }}>Chambres</Card.Title>
              <Card.Text className="display-4" style={{ color: '#3b8ddf', fontWeight: 'bold' }}>22</Card.Text>
              <Card.Text>Disponibles</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card style={{
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '2px solid #3b8ddf'
          }}>
            <Card.Body style={{ padding: '30px' }}>
              <Card.Title style={{ display: 'flex', alignItems: 'center', color: '#3b8ddf', fontWeight: 'bold' }}>
                <FaCalendarAlt style={{ marginRight: '10px' }} />
                Réservations Récentes
              </Card.Title>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Réservation #123 - Appartement</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Réservation #124 - Studio</li>
                <li style={{ padding: '10px 0' }}>Réservation #125 - Chambre</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '2px solid #3b8ddf'
          }}>
            <Card.Body style={{ padding: '30px' }}>
              <Card.Title style={{ display: 'flex', alignItems: 'center', color: '#3b8ddf', fontWeight: 'bold' }}>
                <FaChartLine style={{ marginRight: '10px' }} />
                Statistiques Mensuelles
              </Card.Title>
              <p style={{ fontSize: '1.2rem', margin: '15px 0' }}>Revenus : <strong>5000 CFA</strong></p>
              <p style={{ fontSize: '1.2rem', margin: '15px 0' }}>Nouveaux clients : <strong>45</strong></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default Dashboard;