import React, { useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(10000);
  const [log, setLog] = useState([]);
  const [leverage, setLeverage] = useState(3);

  const handleTrade = (type) => {
    const pnl = Math.floor(Math.random() * 200 - 100); // -100 ile +100 arası
    setBalance(balance + pnl);
    setLog([...log, `${type.toUpperCase()} işlemi | PnL: ${pnl} USDT`]);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>MertX AI Bot Panel PRO 🚀</h1>

      <div style={{ marginBottom: 20 }}>
        <h3>Cüzdan Bakiyesi: <strong>{balance} USDT</strong></h3>
        <label>Kaldıraç: </label>
        <select value={leverage} onChange={e => setLeverage(e.target.value)}>
          <option>3</option><option>5</option><option>10</option><option>20</option>
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => handleTrade('long')} style={{ marginRight: 10 }}>📈 Long Aç</button>
        <button onClick={() => handleTrade('short')}>📉 Short Aç</button>
      </div>

      <div>
        <h3>İşlem Geçmişi:</h3>
        <ul>
          {log.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
