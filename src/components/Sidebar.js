import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div style={{
      width: '250px',
      minHeight: '100vh',
      backgroundColor: '#1e2330',
      color: '#fff',
      position: 'fixed',
      padding: '20px 0'
    }}>
      <h4 style={{ color: '#4d8df6', padding: '0 20px', marginBottom: '30px' }}>
        AcademiApp
      </h4>

      <nav>
        <Link
          to="/hojas-vida"
          style={navLinkStyle(isActive('/hojas-vida'))}
        >
          ⁜ Hojas de Vida
        </Link>
        <Link
          to="/calendario"
          style={navLinkStyle(isActive('/calendario'))}
        >
          ⁜ Calendario
        </Link>
        <Link
          to="/muro-digital"
          style={navLinkStyle(isActive('/muro-digital'))}
        >
          ⁜ Muro Digital
        </Link>
        <Link
          to="/mensajeria"
          style={navLinkStyle(isActive('/mensajeria'))}
        >
          ⁜ Mensajería
        </Link>
      </nav>

      <Link to="/" style={{ ...navLinkStyle(false), color: '#e57373' }}>
        ⁐ Cerrar Sesión
      </Link>
    </div>
  );
}

function navLinkStyle(active) {
  return {
    display: 'block',
    padding: '12px 20px',
    color: active ? '#fff' : '#b0b4bd',
    backgroundColor: active ? '#2a3142' : 'transparent',
    textDecoration: 'none',
    fontSize: '15px'
  };
}

export default Sidebar;