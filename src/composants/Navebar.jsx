import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome } from 'react-icons/fa';

function Navebar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ background: 'linear-gradient(90deg, #3b8ddf, #5a9bd4)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '10px' }} />
          KayeDeuk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {auth.isAuthenticated && (
            <Nav className="me-auto nav2">
              <Nav.Link as={Link} to="/" style={{ color: 'white', fontWeight: '500' }}>
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/presentation" style={{ color: 'white', fontWeight: '500' }}>
                Présentation
              </Nav.Link>
              <Nav.Link as={Link} to="/services" style={{ color: 'white', fontWeight: '500' }}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'white', fontWeight: '500' }}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/client" style={{ color: 'white', fontWeight: '500' }}>
                Tableau de bord
              </Nav.Link>
              {auth.user?.role === 'admin' && (
                <>
                  <Nav.Link as={Link} to="/superadmin" style={{ color: 'white', fontWeight: '500' }}>
                    Super Admin
                  </Nav.Link>
                </>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
        <div>
          {auth.isAuthenticated ? (
            <>
              <button className="btn btn-outline-light" style={{ margin: '5px 5px' }} onClick={handleLogout}>
                Déconnexion
              </button>
              <button className="btn btn-light" style={{ margin: '5px 5px', color: '#3b8ddf' }} onClick={() => navigate('/dashboard')}>
                {auth.user?.name || 'Mon compte'}
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" style={{ margin: '5px 5px' }}>
                <Link to="/connexion" style={{ color: 'white', textDecoration: 'none' }}>
                  Connexion
                </Link>
              </button>
              <button className="btn btn-light">
                <Link to="/inscription" style={{ color: '#3b8ddf', textDecoration: 'none' }}>
                  Inscription
                </Link>
              </button>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Navebar;
