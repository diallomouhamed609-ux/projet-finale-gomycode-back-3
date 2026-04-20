
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./composants/Footer";
import Jumbotron from "./composants/Jumbotron";
import Navebar from "./composants/Navebar";
import { FaBuilding, FaHome, FaBed, FaLandmark, FaMap } from "react-icons/fa";

function Acceuil() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const cards = [
        { id: 1, type: "Appartement", img: "/images/appback.jpg", icon: <FaBuilding size={40} color="#3b8ddf" />, path: "/appartement" },
        { id: 2, type: "Studios", img: "/images/bien-immeuble.jpeg", icon: <FaHome size={40} color="#3b8ddf" />, path: "/studios" },
        { id: 3, type: "Chambre", img: "/images/imageschamre.jpg", icon: <FaBed size={40} color="#3b8ddf" />, path: "/chambre" },
        { id: 4, type: "Maison", img: "/images/appback.jpg", icon: <FaLandmark size={40} color="#3b8ddf" />, path: "/maison" },
        { id: 5, type: "Terrain", img: "/images/bien-immeuble.jpeg", icon: <FaMap size={40} color="#3b8ddf" />, path: "/terrain" },
    ];

    const filteredCards = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return cards;
        return cards.filter((card) => card.type.toLowerCase().includes(term));
    }, [search]);

    return ( 
        <>
        <Navebar /> 

        <div style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: '20px',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/pexels-adrien-olichon-1257089-3709339.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '20px',
            boxSizing: 'border-box',
            position: 'relative'
        }}>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 1
            }}></div>

            <div style={{ width: '100%', maxWidth: '1000px', margin: 'auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Bienvenue chez KayeDeuk</h1>
                <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Découvrez nos propriétés immobilières exceptionnelles</p>
                <input
                    type="text"
                    placeholder="Rechercher appartement, chambre, studios..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        padding: '15px 20px',
                        borderRadius: '30px',
                        border: 'none',
                        margin: '0 auto 20px',
                        fontSize: '16px',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                padding: '5px',
                boxSizing: 'border-box',
                position: 'relative',
                zIndex: 2
            }}>
                {filteredCards.length === 0 ? (
                    <div style={{ width: '100%', color: '#fff', textAlign:'center', padding:'15px', fontSize:'18px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '10px', position: 'relative', zIndex: 2 }}>
                        Aucun résultat pour "{search}".
                    </div>
                ) : (
                    filteredCards.map((card) => (
                        <div key={card.id} className="hover-card" style={{
                            backgroundColor:'rgba(255, 255, 255, 0.9)',
                            width:'clamp(220px, 30%, 340px)',
                            minHeight:'350px',
                            borderRadius:'20px',
                            padding:'0',
                            transition:'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor:'pointer',
                            boxShadow:'0 4px 15px rgba(0,0,0,0.2)',
                            overflow:'hidden'
                        }}>
                            <img src={card.img} alt={card.type.toLowerCase()} style={{ width:'100%', height:'200px', objectFit:'cover', borderRadius:'20px 20px 0 0'}} />
                            <div style={{ textAlign:'center', padding:'18px 12px' }}>
                                {card.icon}
                                <h3 style={{ color:'#3b8ddf', margin:'10px 0' }}>{card.type}</h3>
                                <button 
                                    onClick={() => navigate(card.path)}
                                    style={{
                                    display:'block',
                                    margin:'15px auto',
                                    padding:'10px 20px',
                                    backgroundColor:'#3b8ddf',
                                    color:'white',
                                    border:'none',
                                    borderRadius:'25px',
                                    cursor:'pointer',
                                    transition:'background-color 0.3s ease'
                                }}>Voir plus</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>

     <Jumbotron/>
     <Footer/>
        </>
     );
}

export default Acceuil;
