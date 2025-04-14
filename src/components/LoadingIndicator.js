import React from 'react';

const LoadingIndicator = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#552583',
        marginBottom: '1rem'
      }}>
        LeBron is thinking...
      </div>
      
      <div style={{
        fontSize: '1rem',
        color: '#6b7280',
        marginBottom: '1rem'
      }}>
        Creating your personalized video response
      </div>
      
      <div style={{
        width: '100%',
        height: '0.5rem',
        backgroundColor: '#e5e7eb',
        borderRadius: '9999px',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '75%',
          height: '100%',
          backgroundColor: '#FDB927',
          borderRadius: '9999px',
          animation: 'pulse 2s infinite'
        }} />
      </div>
      
      <div style={{
        fontSize: '0.875rem',
        color: '#9ca3af',
        fontStyle: 'italic'
      }}>
        This usually takes 15-30 seconds
      </div>
    </div>
  );
};

export default LoadingIndicator;