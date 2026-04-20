import { FaMapMarkerAlt } from 'react-icons/fa';
import PropertyPage from './PropertyPage';

const defaultTerrains = [
  {
    id: 1,
    title: 'Terrain constructible',
    location: 'Mbour',
    price: '55 000 CFA',
    type: 'Vente',
    description: 'Terrain plat prêt à bâtir, idéal pour un projet résidentiel ou commercial.',
    image: '/images/bien-immeuble.jpeg',
  },
  {
    id: 2,
    title: 'Terrain vue mer',
    location: 'La Somone',
    price: '72 000 CFA',
    type: 'Vente',
    description: 'Parcelle avec vue dégagée sur l’océan et accès facile aux routes principales.',
    image: '/images/appback.jpg',
  },
  {
    id: 3,
    title: 'Terrain agricole',
    location: 'Thiès',
    price: '30 000 CFA',
    type: 'Vente',
    description: 'Terrain fertile, parfait pour un projet agricole ou un potager familial.',
    image: '/images/bien-immeuble.jpeg',
  },
];

function Terrain() {
  return (
    <PropertyPage
      title="Nos Terrains"
      subtitle="Trouvez des terrains validés par l’administrateur pour vos projets de construction."
      defaultProperties={defaultTerrains}
      category="Terrain"
      icon={FaMapMarkerAlt}
    />
  );
}

export default Terrain;
