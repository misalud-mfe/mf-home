import React from 'react'

const spinnerStyle = {
  width: 40,
  height: 40,
  border: '4px solid #e0f2fe',
  borderTop: '4px solid #0077b6',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '0 auto 12px auto'
}

const Loading = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <div style={spinnerStyle} />
    <span style={{ color: '#0077b6', fontWeight: 500 }}>Cargando...</span>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
    </style>
  </div>
)

export default Loading