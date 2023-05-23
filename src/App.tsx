import React, { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const [valorQr, setValorQr] = useState<string>('');


  return (
    <div className="container">
      <QRCode 
      value={valorQr}
      />
      <input 
      className='input'
      placeholder='digite oque você quiser' 
      onChange={(valor) => 
        setValorQr(valor.target.value)}
      />
    </div>
  );
}

export default App;
