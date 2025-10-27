'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BrandContentPage() {
  const searchParams = useSearchParams();
  const [content, setContent] = useState({});

  useEffect(()=>{
    async function fetchContent() {
      const res = await fetch('/api/generate-content', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          brandName: searchParams.get('projectName'),
          industry: searchParams.get('industry'),
          audience: searchParams.get('audience'),
          language:'en'
        })
      });
      const data = await res.json();
      setContent(data);
    }
    fetchContent();
  },[]);

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-bold">Brand Bio</h2>
      <p>{content.bio}</p>
      <h2 className="text-xl font-bold">Slogans</h2>
      <p>{content.slogans}</p>
      <h2 className="text-xl font-bold">Marketing Tips</h2>
      <p>{content.tips}</p>
    </div>
  );
}