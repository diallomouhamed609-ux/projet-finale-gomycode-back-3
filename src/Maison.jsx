import { FaLandmark } from 'react-icons/fa';
import PropertyPage from './PropertyPage';

const defaultHouses = [
  {
    id: 1,
    title: 'Maison familiale contemporaine',
    location: 'Sicap, Dakar',
    price: '180 000 CFA',
    type: 'Vente',
    description: 'Maison spacieuse avec jardin, terrasse et espaces de vie lumineux.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 2,
    title: 'Villa moderne avec piscine',
    location: 'Mermoz, Dakar',
    price: '220 000 CFA',
    type: 'Vente',
    description: 'Villa haut standing, proche commerces et écoles, avec piscine privée.',
    image: '/images/maison1.jpg',
  },
  {
    id: 3,
    title: 'Maison de caractère',
    location: 'Ngor, Dakar',
    price: '145 000 CFA',
    type: 'Vente',
    description: 'Maison traditionnelle rénovée, idéale pour une famille nombreuse.',
    image: '/images/bien-immeuble.jpeg',
  },
];

function Maison() {
  return (
    <PropertyPage
      title="Nos Maisons"
      subtitle="Découvrez des maisons de standing et des logements familiaux validés par l’administrateur."
      defaultProperties={defaultHouses}
      category="Maison"
      icon={FaLandmark}
    />
  );
}

export default Maison;
