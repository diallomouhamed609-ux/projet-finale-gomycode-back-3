import Navebar from "./composants/Navebar";
import Footer from "./composants/Footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
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
            <FaEnvelope size={60} style={{ marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Contactez-nous</h1>
            <p style={{ fontSize: '1.2rem' }}>Une question ? N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs <br/>
                 délais</p>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin:'auto',
            padding: '20px'
        }}>

            <div style={{
                alignItems: 'center',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
                color: 'black',
                padding: '70px',
                margin:'70px',
                borderRadius:'20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '2px solid #3b8ddf',
                minWidth: '300px'
            }}>
                <FaMapMarkerAlt size={50} color="#3b8ddf" style={{ marginBottom: '20px' }} />
                <h3 style={{ color: '#3b8ddf', marginBottom: '20px' }}>Informations</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <FaEnvelope style={{ marginRight: '10px' }} />Email : contact@kayedeuk.sn <br/>
                    <FaPhone style={{ marginRight: '10px' }} />Téléphone : +221 76 220 51 31 <br/>
                    <FaMapMarkerAlt style={{ marginRight: '10px' }} />Adresse : Dakar Plateau, Dakar, Senegal
                </p>
            </div>

            <div style={{ minWidth: '400px' }}>
                <Form style={{
                    padding: '50px',
                    background: 'linear-gradient(135deg, #3b8ddf 0%, #5a9bd4 100%)',
                    color: 'white',
                    margin: '20px auto',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }}>

                    <Form.Label>Nom Complet</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre nom complet" style={{ marginBottom: '15px' }} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: '15px' }} />
                    <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control type="text" placeholder="Entrez le sujet de votre message" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Votre message..." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="J'accepte les conditions d'utilisation" />
                  </Form.Group>
                  <Button variant="light" type="submit" style={{
                      backgroundColor: 'white',
                      color: '#3b8ddf',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '10px 30px',
                      fontWeight: 'bold'
                  }}>
                    <FaPaperPlane style={{ marginRight: '10px' }} />
                    Envoyer
                  </Button>
                </Form>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Contact;