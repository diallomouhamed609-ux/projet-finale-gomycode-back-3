import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navebar from './composants/Navebar';
import Footer from './composants/Footer';
import { FaUserPlus, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from './context/AuthContext';

function Inscription() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      await auth.register({ name, email, phone, password, role });
      navigate('/client');
    } catch (err) {
      setError(err.message || 'Impossible de créer le compte');
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
        <FaUserPlus size={60} style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Inscription</h1>
        <p style={{ fontSize: '1.2rem' }}>Créez votre compte KayeDeuk</p>
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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaUser style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Nom complet
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre nom complet"
            style={{ borderRadius: '10px' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaUser style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Numéro de téléphone
          </Form.Label>
          <Form.Control
            type="tel"
            placeholder="Entrez votre numéro de téléphone"
            style={{ borderRadius: '10px' }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Text className="text-muted">Nous utiliserons ce numéro pour vous contacter si nécessaire.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaEnvelope style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            style={{ borderRadius: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">Nous ne partagerons jamais votre adresse e-mail.</Form.Text>
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <FaLock style={{ marginRight: '10px', color: '#3b8ddf' }} />
            Confirmer le mot de passe
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmez le mot de passe"
            style={{ borderRadius: '10px' }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRoleSelect">
          <Form.Label style={{ fontWeight: 'bold' }}>Vous êtes :</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="client">Client</option>
            <option value="agent">Agent immobilier</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="J'accepte les conditions d'utilisation" />
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
          <FaUserPlus style={{ marginRight: '10px' }} />
          S'inscrire
        </Button>
        <div className="text-center mt-4">
          <span>Vous avez déjà un compte ? </span>
          <Link to="/connexion">Connectez-vous</Link>
        </div>
      </Form>
      <Footer />
    </>
  );
}

export default Inscription;
