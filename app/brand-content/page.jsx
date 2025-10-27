'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BrandContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const brandName = localStorage.getItem('selectedBrandName');
    if (!brandName) router.push('/brand-names');

    const specs = JSON.parse(localStorage.getItem('projectSpecs') || '{}');

    const fetchContent = async () => {
      const res = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brandName,
          industry: specs.brandIndustry,
          audience: specs.targetAudience,
          language: 'en'
        })
      });
      const data = await res.json();
      setContent(data);
      setLoading(false);
    };

    fetchContent();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Brand Content</h2>
      {loading ? <p>Loading content...</p> : (
        <>
          <h3 className="font-semibold">Bio:</h3>
          <p>{content.bio}</p>
          <h3 className="font-semibold">Slogans:</h3>
          <ul className="list-disc pl-5">
            {content.slogans?.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
          <h3 className="font-semibold">Marketing Tips:</h3>
          <ul className="list-disc pl-5">
            {content.tips?.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}