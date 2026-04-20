import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    
    return ( 
        <>
        <div style={{background: 'linear-gradient(135deg, #3b8ddf 0%, #5a9bd4 100%)', width:'auto', color: 'white', textAlign: 'center', overflow: 'hidden',alignItems: 'center', paddingTop: '40px',borderRadius:'20px 20px 0px 0px', position: 'relative' }}>
        <div style = {{textAlign: 'center', marginBottom: '30px'}}>
            <FaHome size={40} style={{ marginBottom: '10px' }} />
            <h5>KayeDeuk</h5>
            <p>Votre destination pour des propriétés immobilières de luxe soigneusement<br/> sélectionnées.
            Qualité et élégance depuis 2024.</p>
        </div>
        <div style = {{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin:'auto', width:'80%',}} >
        <div style = {{textAlign: 'left',}}>
            <h5 style={{ display: 'flex', alignItems: 'center' }}><FaInfoCircle style={{ marginRight: '10px' }} />Navigation</h5>
            <ul style = {{ listStyleType: 'none', color: 'white', padding: 0 }}>
                <li ><a style = {{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}} href="/"><FaHome style={{ marginRight: '8px' }} />Accueil</a></li>
                <li><a style = {{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}} href="/presentation"><FaInfoCircle style={{ marginRight: '8px' }} />Présentation</a></li>
                <li><a style = {{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}} href="/services"><FaCog style={{ marginRight: '8px' }} />Services</a></li>
                <li><a style = {{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}} href="/contact"><FaEnvelope style={{ marginRight: '8px' }} />Contact</a></li>
            </ul>
        </div>
        <div style = {{textAlign: 'left',}}>
            <h5 style={{ display: 'flex', alignItems: 'center' }}><FaEnvelope style={{ marginRight: '10px' }} />Contactez-nous</h5>
           <p style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}><FaEnvelope style={{ marginRight: '8px' }} />Contact@KayeDeuk.sn</p>
           <p style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}><FaPhone style={{ marginRight: '8px' }} />+221 76 220 51 31</p>
            <p style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}><FaMapMarkerAlt style={{ marginRight: '8px' }} />Dakar, Senegal</p>
        </div> 
        </div>
        </div>
        <h6 style = {{fontSize: '15px',backgroundColor: '#3b8ddf', color: 'white', margin: 0, padding: '20px', textAlign:'center',}}> &copy; 2026 KayeDeuk. Tous droits réservés</h6>
        </>
     );
}

export default Footer;