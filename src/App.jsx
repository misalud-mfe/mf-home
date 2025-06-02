import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Loading from './components/loading/Loading';
import Navbar from './components/navbar/Navbar';

const Atendidos = lazy(() => import("atendidos/Atendidos"));
const Pendientes = lazy(() => import("pendientes/Pendientes"));
const Transferencias = lazy(() => import("transferencias/Transferencias"));

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: 20 }}>
          <Navbar />
          <h1>Misalud Historia Clinica</h1>
          <Suspense fallback={<Loading />}>
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