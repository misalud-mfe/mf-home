import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

const Atendidos = lazy(() => import("atendidos/Atendidos"));
const Pendientes = lazy(() => import("pendientes/Pendientes"));
const Transferencias = lazy(() => import("transferencias/Transferencias"));

const Sidebar = () => (
  <div
    style={{
      width: 220,
      background: '#f0f0f0',
      padding: 20,
      height: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
    }}
  >
  
    <img
      src="http://10.10.102.136:4061/apwEmergencia/logo.png"
      alt="Logo Misalud"
      style={{
        width: '120px',
        height: 'auto',
        marginBottom: 4,
        borderRadius: 8,
        objectFit: 'contain',
        maxWidth: '100%',
        display: 'block'
    
      }}
    />
    <h2 style={{ marginBottom: 16 }}>MI SALUD</h2>
    <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
      <li style={{ marginBottom: 12 }}>
        <Link to="/atendidos" style={{ textDecoration: 'none', color: '#333' }}>Atendidos</Link>
      </li>
      <li style={{ marginBottom: 12 }}>
        <Link to="/pendientes" style={{ textDecoration: 'none', color: '#333' }}>Pendientes</Link>
      </li>
      <li>
        <Link to="/transferencias" style={{ textDecoration: 'none', color: '#333' }}>Transferencias</Link>
      </li>
    </ul>
  </div>
);

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: 20 }}>
          <h1>Misalud Home</h1>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/atendidos" element={<Atendidos />} />
              <Route path="/pendientes" element={<Pendientes />} />
              <Route path="/transferencias" element={<Transferencias />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App