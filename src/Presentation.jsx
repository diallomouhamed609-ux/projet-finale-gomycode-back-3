import Navebar from "./composants/Navebar";
import Footer from "./composants/Footer";
import { FaShoppingCart, FaHome, FaCoins } from 'react-icons/fa';

function Presentation() {
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
            <FaHome size={60} style={{ marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Notre Histoire</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Il était une fois KayeDeuk, une entreprise née d'une idée simple : rendre la recherche de logement facile et agréable. De petits studios cosy aux appartements spacieux,<br/>
             chaque logement est pensé pour offrir confort, sécurité et convivialité. Que vous soyez étudiant, professionnel ou en déplacement, KayeDeuk vous aide à trouver le lieu idéal pour vous sentir chez vous, partout où la vie vous mène.</p>
        </div>

    <div style={{
        display:'flex',
        justifyContent:'space-around',
        padding:'45px',
        margin:'20px',
        flexWrap:'wrap',
        minHeight:'auto'
    }}>

        <div className="hover-card" style={{
            background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
            width:'300px',
            minHeight:'300px',
            margin:'40px',
            padding:'25px',
            borderRadius:'20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center',
            border: '2px solid #3b8ddf'
        }}>
            <FaShoppingCart size={50} color="#3b8ddf" style={{ marginBottom: '20px' }} />
            <h1 style={{ color: '#3b8ddf', marginBottom: '15px' }}>Acheter</h1>
            <p>Trouvez l'appartement, le studio ou la chambre de vos rêves parmi nos annonces vérifiées.</p>
        </div>

        <div className="hover-card" style={{
            background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
            width:'300px',
            minHeight:'300px',
            margin:'40px',
            padding:'25px',
            borderRadius:'20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center',
            border: '2px solid #3b8ddf'
        }}>
            <FaHome size={50} color="#3b8ddf" style={{ marginBottom: '20px' }} />
            <h1 style={{ color: '#3b8ddf', marginBottom: '15px' }}>Louer</h1>
            <p>Des emplacements adaptés à tous les budgets, du studio étudiant à l'appartement familial.</p>
        </div>

        <div className="hover-card" style={{
            background: 'linear-gradient(135deg, #e7ebee 0%, #f8f9fa 100%)',
            width:'300px',
            minHeight:'300px',
            margin:'40px',
            padding:'25px',
            borderRadius:'20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center',
            border: '2px solid #3b8ddf'
        }}>
            <FaCoins size={50} color="#3b8ddf" style={{ marginBottom: '20px' }} />
            <h1 style={{ color: '#3b8ddf', marginBottom: '15px' }}>Vendre</h1>
            <p>Publiez votre annonce gratuitement et touchez des milliers d'acheteurs potentiels.</p>
        </div>

    </div>

        <Footer />
        </>
     );
}

export default Presentation;