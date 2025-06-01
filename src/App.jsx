import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Loading from './components/loading/Loading';
import { bus } from "common-utils";

const Atendidos = lazy(() => import("atendidos/Atendidos"));
const Pendientes = lazy(() => import("pendientes/Pendientes"));
const Transferencias = lazy(() => import("transferencias/Transferencias"));
const Login = lazy(() => import("login/Login"));


const App = () => {
  const [dato, setDato] = useState(null)

  useEffect(() => {
  const suscription = bus.subscribe((msg) => {
    if (msg.type === 'LOGIN_SUCCESS') {
      setDato(msg.payload);
      console.log('Dato recibido:', msg.payload);
    }
  });
  return () => {
    suscription.unsubscribe();
    console.log('Unsubscribed from bus');
  };
}, []);
  
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: 20 }}>
          <h1>Misalud Historia Clinica</h1>
          
        {dato && <div>Usuario: {JSON.stringify(dato.numdocidentidad)}</div>}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
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