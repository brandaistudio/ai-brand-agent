'use client';
import { jsPDF } from 'jspdf';
import { useEffect, useState } from 'react';

export default function BusinessCard() {
  const [brandName, setBrandName] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    setBrandName(localStorage.getItem('selectedBrandName') || '');
    setLogo(localStorage.getItem('selectedLogo') || '');
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: 'landscape' });
    doc.setFontSize(22);
    doc.text(brandName, 20, 20);
    if (logo) doc.addImage(logo, 'PNG', 20, 30, 60, 60);
    doc.save(`${brandName}_business_card.pdf`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold">Business Card</h2>
      <p>Brand: {brandName}</p>
      {logo && <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />}
      <button onClick={generatePDF} className="bg-primary px-4 py-2 rounded text-white mt-4">
        Download PDF
      </button>
    </div>
  );
}