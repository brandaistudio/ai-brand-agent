'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BrandNames() {
  const [names, setNames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const specs = JSON.parse(localStorage.getItem('projectSpecs') || '{}');
    if (!specs.brandIndustry) router.push('/project-specs');

    const fetchNames = async () => {
      const res = await fetch('/api/generate-names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(specs)
      });
      const data = await res.json();
      setNames(data.names || []);
    };

    fetchNames();
  }, []);

  const selectName = (name) => {
    localStorage.setItem('selectedBrandName', name);
    router.push('/generate-logo');
  };

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Choose Your Brand Name</h2>
      {names.length === 0 ? <p>Loading...</p> : (
        <div className="flex flex-col gap-2">
          {names.map((n, i) => (
            <button key={i} onClick={() => selectName(n)} className="bg-primary px-4 py-2 rounded text-white">{n}</button>
          ))}
        </div>
      )}
    </div>
  );
}
