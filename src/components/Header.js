import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#552583', 
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ 
          color: '#FDB927', 
          fontSize: '1.5rem',
          marginRight: '0.5rem' 
        }}>🏀</span>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Ask LeBron AI</h1>
      </div>
      <div style={{
        backgroundColor: '#FDB927',
        color: '#552583',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontWeight: 'bold',
        fontSize: '0.875rem'
      }}>
        Powered by AI
      </div>
    </header>
  );
};

export default Header;