import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Outlet} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Loading from './components/loading/Loading';
import Auth from './components/auth/Auth';
import { bus } from "common-utils";

const Atendidos = lazy(() => import("atendidos/Atendidos"));
const Pendientes = lazy(() => import("pendientes/Pendientes"));
const Transferencias = lazy(() => import("transferencias/Transferencias"));
const Login = lazy(() => import("login/Login"));


const MainLayout = ({ dato }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar dato={dato} />
    <div style={{ flex: 1, padding: 20 }}>
      <h1>Misalud Historia Clinica</h1>
    
      <Outlet />
    </div>
  </div>
);

// Layout para login (sin sidebar)
const LoginLayout = () => (
  <div >
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  </div>
);



const App = () => {
  const [dato, setDato] = useState(null)


 useEffect(() => {
    const subscription = bus.subscribe((msg) => {
      if (msg.topic === "atendidos") {
        console.log("test -------------", msg.data);
      }
    });

    return () => subscription.unsubscribe();
  }, []);
  
  return (
   <Router>
      <Auth setDato={setDato} />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<LoginLayout />} />

          <Route element={<MainLayout dato={dato} />}>
            <Route
              path="/atendidos"
              element={dato ? <Atendidos /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/pendientes"
              element={dato ? <Pendientes /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/transferencias"
              element={dato ? <Transferencias /> : <Navigate to="/login" replace />}
            />
            <Route
              path="*"
              element={<Navigate to={dato ? "/atendidos" : "/login"} replace />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App