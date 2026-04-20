
import { FaUsers } from 'react-icons/fa';

function Jumbotron() {
  return (<div style={{
    textAlign: 'center',
    background: 'linear-gradient(135deg, #e7ebee 0%, #d1ecf1 100%)',
    color: '#3b8ddf',
    padding: '60px 20px',
    borderBottom:' 2px solid #3b8ddf',
    borderTop:' 2px solid #3b8ddf',
    height: 'auto',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <FaUsers size={60} style={{ marginBottom: '20px', color: '#3b8ddf' }} />
    <h1 className="display-4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>Rejoignez notre communauté</h1>
    <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Inscrivez-vous pour recevoir nos offres exclusives et découvrir<br/>
     nos nouvelles collections immobilières.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="/inscription" role="button" style={{
        backgroundColor: '#3b8ddf',
        borderColor: '#3b8ddf',
        borderRadius: '25px',
        padding: '12px 30px',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease'
      }}>S'inscrire maintenant</a>
    </p>
  </div>

 );
}

export default Jumbotron;