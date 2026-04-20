import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { FaSignInAlt, FaUser, FaLock } from 'react-icons/fa';
import { useAuth } from './context/AuthContext';

function Connexion() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await auth.login({ email, password });
      if (result.user.role === 'admin') {
        navigate('/superadmin');
      } else {
        navigate('/client');
      }
    } catch (err) {
      setError(err.message || 'Impossible de se connecter');
    }
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
        <FaSignInAlt size={60} style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Connexion</h1>
        <p style={{ fontSize: '1.2rem' }}>Connectez-vous à votre compte immobilier</p>
      </div>
      <Form
        onSubmit={handleSubmit}
        style={{
          padding: '50px',
          background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
          color: 'black',
          width: '60%',
          margin: '35px auto',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          border: '2px solid #3b8ddf',
        }}
      >
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaUser style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            style={{ borderRadius: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Nous ne partagerons jamais votre adresse e-mail.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaLock style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Mot de passe
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
            style={{ borderRadius: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: '#3b8ddf',
            borderColor: '#3b8ddf',
            borderRadius: '25px',
            padding: '10px 30px',
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          <FaSignInAlt style={{ marginRight: '10px' }} />
          Se connecter
        </Button>
        <div className="text-center mt-4">
          <span>Pas encore de compte ? </span>
          <Link to="/inscription">Inscrivez-vous</Link>
        </div>
      </Form>
      <Footer />
    </>
  );
}

export default Connexion;
