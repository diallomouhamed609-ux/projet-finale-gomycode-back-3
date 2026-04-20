import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaBuilding, FaHome, FaBed } from 'react-icons/fa';

function carte() {
  return (
    <CardGroup style = {{gap: '20px'}}>
      <Card style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} className="hover-card">
        <Card.Img variant="top" src="/images/appback.jpg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body style={{ textAlign: 'center' }}>
          <FaBuilding size={30} color="#3b8ddf" style={{ marginBottom: '10px' }} />
          <Card.Title>Appartement</Card.Title>
          <Card.Text>
            Appartement moderne et chaleureux
Découvrez ce superbe appartement lumineux avec 2 chambres, cuisine équipée et balcon. Idéalement situé, il offre confort et praticité pour un séjour agréable ou une vie quotidienne conviviale.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} className="hover-card">
        <Card.Img variant="top" src="/images/bien-immeuble.jpeg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body style={{ textAlign: 'center' }}>
          <FaHome size={30} color="#3b8ddf" style={{ marginBottom: '10px' }} />
          <Card.Title>Studios</Card.Title>
          <Card.Text>
            Studio cosy et fonctionnel
Profitez de ce studio lumineux, entièrement équipé, idéal pour une personne ou un séjour professionnel. Emplacement pratique, ambiance chaleureuse et tout le confort nécessaire pour se sentir chez soi.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} className="hover-card">
        <Card.Img variant="top" src="/images/imageschamre.jpg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body style={{ textAlign: 'center' }}>
          <FaBed size={30} color="#3b8ddf" style={{ marginBottom: '10px' }} />
          <Card.Title>Chambre</Card.Title>
          <Card.Text>
            Chambre confortable et lumineuse
Profitez d'une chambre spacieuse et chaleureuse, équipée d'un lit double, d'un bureau et d'une armoire. Idéale pour un séjour agréable au calme, avec toutes les commodités à portée de main.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default carte;