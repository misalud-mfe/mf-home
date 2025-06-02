import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const navLinkStyle = {
  display: 'block',
  padding: '10px 18px',
  borderRadius: '6px',
  color: '#234',
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'background 0.2s, color 0.2s'
};

const activeStyle = {
  background: '#e0f2fe',
  color: '#0077b6',
  fontWeight: 700
};


const Sidebar = ({dato}) => (
 <aside
    style={{
      width: 240,
      background: 'linear-gradient(180deg,rgb(185, 215, 245) 80%,rgb(5, 121, 199) 100%)',
      padding: 28,
      height: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '2px 0 12px 0 rgba(0,0,0,0.07)',
      borderRight: '1px solidrgb(163, 176, 248)'
    }}
  >
    <img
      src="http://10.10.102.136:4061/apwEmergencia/logo.png"
      alt="Logo Misalud"
      style={{
        width: '90px',
        height: '90px',
        marginBottom: 18,
        objectFit: 'contain',
        boxShadow: '0 2px 8px #b6e0fe55'
      }}
    />
    <h2 style={{
      marginBottom: 28,
      color: '#0077b6',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: 1,
      textShadow: '0 1px 0rgb(255, 255, 255)'
    }}>
      MISALUD
    </h2>
      {dato && <div style={{paddingBottom:12}}>Usuario: {dato.numdocidentidad}</div>}
    <nav style={{ width: '100%' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: 10 }}>
          <NavLink
            to="/atendidos"
            style={({ isActive }) =>
              isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
            }
          >
            Atendidos
          </NavLink>
        </li>
        <li style={{ marginBottom: 10 }}>
          <NavLink
            to="/pendientes"
            style={({ isActive }) =>
              isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
            }
          >
            Pendientes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transferencias"
            style={({ isActive }) =>
              isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
            }
          >
            Transferencias
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar