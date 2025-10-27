'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GenerateLogo() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const brandName = localStorage.getItem('selectedBrandName');
    if (!brandName) router.push('/brand-names');

    const fetchLogos = async () => {
      const res = await fetch('/api/generate-logo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName })
      });
      const data = await res.json();
      setLogos(data.logos || []);
      setLoading(false);
    };

    fetchLogos();
  }, []);

  const selectLogo = (url) => {
    localStorage.setItem('selectedLogo', url);
    router.push('/brand-content');
  };

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Choose Your Logo</h2>
      {loading ? <p>Loading logos...</p> : (
        <div className="grid grid-cols-2 gap-4">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Brand Logo"
              className="cursor-pointer border rounded hover:scale-105 transition"
              onClick={() => selectLogo(logo)}
            />
          ))}
        </div>
      )}
    </div>
  );
}