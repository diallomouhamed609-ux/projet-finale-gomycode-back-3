import Navebar from "./composants/Navebar";
import Footer from "./composants/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaShieldAlt, FaHandshake } from 'react-icons/fa';

function Services() {
    return (
        <>
        <Navebar />
        <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #3b8ddf 0%, #5a9bd4 100%)',
            color: 'white',
            borderRadius: '20px',
            margin: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
            <FaCog size={60} style={{ marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Nos Services</h1>
        </div>

        <Container>
            <Row className="justify-content-center">
                <Col md={10} lg={8} style={{
                    background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
                    color:'black',
                    padding:'40px',
                    margin:'70px 0',
                    borderRadius:'20px',
                    textAlign:'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    border: '2px solid #3b8ddf'
                }}>
                    <FaShieldAlt size={50} color="#3b8ddf" style={{ marginBottom: '20px' }} />
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Vous cherchez un logement confortable et sécurisé ? <br/>
                        Notre entreprise immobilière vous propose la location et la vente d'appartements, de studios et de <br/>
                        chambres adaptés à tous les budgets. Nous mettons à votre disposition des logements bien situés, propres et accessibles.
                        <br/>
                        <br/>
                        Grâce à notre expérience, nous vous accompagnons dans toutes les étapes afin de vous aider à trouver <br/>
                        rapidement le logement idéal ou à réaliser un bon investissement immobilier.
                        <br/>
                        <br/>
                        <FaHandshake size={30} color="#3b8ddf" style={{ margin: '20px 0' }} />
                        Professionnalisme, confiance et satisfaction client sont au cœur de nos services. Contactez-nous <br/>
                        dès aujourd'hui pour plus d'informations et trouvez votre prochain logement avec nous.
                    </p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
     );
}

export default Services;