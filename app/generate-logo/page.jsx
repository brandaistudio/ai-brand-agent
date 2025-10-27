'use client';
import { useState } from 'react';

export default function GenerateLogoPage() {
  const [logos, setLogos] = useState([]);
  const [brandName, setBrandName] = useState('');

  async function fetchLogos() {
    const res = await fetch('/api/generate-logo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brandName, style: 'modern' })
    });
    const data = await res.json();
    setLogos([data.url]);
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <input value={brandName} onChange={e => setBrandName(e.target.value)} placeholder="Brand Name" className="p-2 border rounded"/>
      <button onClick={fetchLogos} className="bg-blue-600 text-white p-2 rounded">Generate Logo</button>
      {logos.map((logo,i)=><img key={i} src={logo} className="w-48 h-48 object-contain"/> )}
    </div>
  );
}