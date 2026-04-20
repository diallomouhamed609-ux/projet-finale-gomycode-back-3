import { FaHome } from 'react-icons/fa';
import PropertyPage from './PropertyPage';

const studios = [
  {
    id: 1,
    title: 'Studio Cosy Centre Ville',
    location: 'Plateau, Dakar',
    price: '420 CFA',
    description: 'Studio lumineux, entièrement équipé, idéal pour étudiants.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 2,
    title: 'Studio Moderne Vue Mer',
    location: 'Médina, Dakar',
    price: '500 CFA',
    description: 'Studio contemporain avec petite terrasse vue océan.',
    image: '/images/appback.jpg',
  },
  {
    id: 3,
    title: 'Studio Meublé Prêt à Habiter',
    location: 'Point E, Dakar',
    price: '380 CFA',
    description: 'Studio complètement aménagé, prêt immédiatement.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 4,
    title: 'Studio Business Plateau',
    location: 'Plateau, Dakar',
    price: '450 CFA',
    description: 'Studio professionnel dans quartier d\'affaires.',
    image: '/images/appback.jpg',
  },
  {
    id: 5,
    title: 'Studio Étudiant Abordable',
    location: 'Liberté 5, Dakar',
    price: '350 CFA',
    description: 'Studio petit budget à proximité université.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 6,
    title: 'Studio Design Moder et Chic',
    location: 'Ngor, Dakar',
    price: '550 CFA',
    description: 'Studio design avec cuisine intégrée, très moderne.',
    image: '/images/appback.jpg',
  }
];

function Studios() {
  return (
    <PropertyPage
      title="Nos Studios"
      subtitle="Des studios modernes et abordables, avec toutes les annonces validées clairement affichées."
      defaultProperties={studios}
      category="Studio"
      icon={FaHome}
    />
  );
}

export default Studios;
