import React from 'react';
import Sidebar from './Sidebar';

function Layout({ titulo, children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ marginLeft: '250px', width: '100%', backgroundColor: '#f4f5f7', minHeight: '100vh' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 30px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <h2 style={{ margin: 0, fontWeight: '600' }}>{titulo}</h2>
          <span style={{
            backgroundColor: '#17a2b8',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '13px'
          }}>
            Año Académico 2026
          </span>
        </div>

        <div style={{ padding: '30px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;