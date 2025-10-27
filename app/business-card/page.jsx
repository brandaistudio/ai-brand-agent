'use client';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function BusinessCardPage() {
  const [name, setName] = useState('NovaBrand');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  const downloadPDF = () => {
    const pdf = new jsPDF({ orientation: 'landscape' });
    const canvas = document.getElementById('card-canvas');
    pdf.addImage(canvas.toDataURL(), 'PNG', 0, 0, 210, 100);
    pdf.save('business-card.pdf');
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Brand Name" className="p-2 border rounded"/>
      <Stage width={500} height={300} id="card-canvas">
        <Layer>
          <Rect width={500} height={300} fill={bgColor}/>
          <Text text={name} x={50} y={50} fontSize={24} fill={textColor}/>
        </Layer>
      </Stage>
      <button onClick={downloadPDF} className="bg-blue-600 text-white p-2 rounded">Download PDF</button>
    </div>
  );
}
