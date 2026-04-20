import { FaBuilding } from 'react-icons/fa';
import PropertyPage from './PropertyPage';

const apartments = [
  {
    id: 1,
    title: 'Appartement 2 Chambres Lumineux',
    location: 'Plateau, Dakar',
    price: '650 CFA',
    description: 'Appartement moderne avec 2 chambres, cuisine équipée et balcon.',
    image: '/images/appartement1.jpg',
  },
  {
    id: 2,
    title: 'Appartement 3 Chambres Vue Mer',
    location: 'Médina, Dakar',
    price: '750 CFA',
    description: 'Magnifique appartement avec vue panoramique sur l\'océan.',
    image: '/images/appartement2.jpg',
  },
  {
    id: 3,
    title: 'Appartement T2 Centre Ville',
    location: 'Point E, Dakar',
    price: '550 CFA',
    description: 'Petit appartement pratique pour couple ou couple étudiant.',
    image: '/images/appback.jpg',
  },
  {
    id: 4,
    title: 'Appartement Duplex Pieds dans l\'Eau',
    location: 'Ngor, Dakar',
    price: '900 CFA',
    description: 'Luxueux duplex avec accès direct à la plage.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 5,
    title: 'Appartement 4 Chambres Familial',
    location: 'Liberté 6, Dakar',
    price: '820 CFA',
    description: 'Spacieux appartement pour famille nombreuse.',
    image: '/images/appback.jpg',
  },
  {
    id: 6,
    title: 'Appartement Meublé Business',
    location: 'Plateau, Dakar',
    price: '600 CFA',
    description: 'Appartement meublé prêt à habiter, très bien situé.',
    image: '/images/bien-immeuble.jpeg',
  }
];

function Appartement() {
  return (
    <PropertyPage
      title="Nos Appartements"
      subtitle="Des appartements modernes et confortables pour tous les budgets."
      defaultProperties={apartments}
      category="Appartement"
      icon={FaBuilding}
    />
  );
}

export default Appartement;
