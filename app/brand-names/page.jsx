'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BrandNamesPage() {
  const searchParams = useSearchParams();
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchNames() {
      const res = await fetch('/api/generate-names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: searchParams.get('description'),
          industry: searchParams.get('industry'),
          audience: searchParams.get('audience')
        })
      });
      const data = await res.json();
      setNames(data.names);
    }
    fetchNames();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-2">
      <h2 className="text-xl font-bold">Choose a Brand Name</h2>
      {names.map((name,i)=>(
        <div key={i} className="p-2 border rounded cursor-pointer">{name}</div>
      ))}
    </div>
  );
}
