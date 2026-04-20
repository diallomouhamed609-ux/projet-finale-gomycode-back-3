import { FaBed } from 'react-icons/fa';
import PropertyPage from './PropertyPage';

const chambres = [
  {
    id: 1,
    title: 'Chambre Meublée Confortable',
    location: 'Plateau, Dakar',
    price: '280 CFA',
    description: 'Chambre spacieuse avec lit double, bureau et armoire.',
    image: '/images/imageschamre.jpg',
  },
  {
    id: 2,
    title: 'Chambre Lumineuse avec Balcon',
    location: 'Médina, Dakar',
    price: '320 CFA',
    description: 'Belle chambre avec balcon privé et vue sur la ville.',
    image: '/images/chambre1.jpg',
  },
  {
    id: 3,
    title: 'Chambre Calme Quartier Résidentiel',
    location: 'Point E, Dakar',
    price: '250 CFA',
    description: 'Chambre tranquille dans quartier peaceful et sûr.',
    image: '/images/chambre2.jpg',
  },
  {
    id: 4,
    title: 'Chambre Premium Vue Panoramique',
    location: 'Ngor, Dakar',
    price: '400 CFA',
    description: 'Chambre haut standing avec vue spectaculaire.',
    image: '/images/chambre6.jpg',
  },
  {
    id: 5,
    title: 'Chambre Étudiante Pratique',
    location: 'Liberté 5, Dakar',
    price: '200 CFA',
    description: 'Chambre simple et fonctionnelle à proximité fac.',
    image: '/images/chambre4.jpg',
  },
  {
    id: 6,
    title: 'Chambre VIP avec Salle d\'eau',
    location: 'Plateau, Dakar',
    price: '350 CFA',
    description: 'Chambre luxe avec salle d\'eau privée intégrée.',
    image: '/images/chambre5.jpg',
  }
];

function Chambre() {
  return (
    <PropertyPage
      title="Nos Chambres"
      subtitle="Chambres meublées et confortables, avec vos annonces validées bien en évidence."
      defaultProperties={chambres}
      category="Chambre"
      icon={FaBed}
    />
  );
}

export default Chambre;
