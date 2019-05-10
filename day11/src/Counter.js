import React, { useState } from 'react';
import Number from './Number';

export default function() {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ padding: '50px' }}>
      <Number>{number}</Number>
      <button
        style={{
          marginLeft: '20px',
          backgroundColor: 'tomato',
          color: 'white',
          border: 'none',
          padding: '10px'
        }}
        onClick={() => setNumber(number + 1)}
      >
        Click
      </button>
    </div>
  );
}
