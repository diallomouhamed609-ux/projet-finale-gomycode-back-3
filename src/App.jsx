
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Acceuil from './Acceuil'
import Presentation from './Presentation'
import Services from './Services'
import Contact from './Contact'
import Connexion from './Connexion'
import Inscription from './Inscription'
import Dashboard from './Dashboard'
import SuperAdminDashboard from './SuperAdminDashboard'
import ClientDashboard from './ClientDashboard'
import CreateAnnonce from './CreateAnnonce'
import AdminAnnonceValidation from './AdminAnnonceValidation'
import Appartement from './appartement'
import Studios from './studios'
import Chambre from './chambre'
import Maison from './Maison'
import Terrain from './Terrain'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/superadmin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/validation-annonces"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminAnnonceValidation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/annonce/creer"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <CreateAnnonce />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appartement"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <Appartement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studios"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <Studios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chambre"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <Chambre />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maison"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <Maison />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terrain"
          element={
            <ProtectedRoute allowedRoles={['client', 'agent', 'admin']}>
              <Terrain />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}


export default App
