import React, { lazy } from 'react'

const Atendidos = lazy(() => import("atendidos/Atendidos"));
const Pendientes = lazy(() => import("pendientes/Pendientes"));
const Transferencias = lazy(() => import("transferencias/Transferencias"));
const App = () => {
  return (
    <div>App
      <Atendidos />
      <Pendientes />
      <Transferencias />
      <h1>Misalud Home</h1>
    </div>
  )
}

export default App