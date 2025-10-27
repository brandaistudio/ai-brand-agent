import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold text-center">NovaBrand</h1>
      <p className="text-center max-w-xl">
        Your AI-powered Personal Brand Generator. Create brand names, logos, slogans, and business cards in minutes.
      </p>
      <Link href="/project-specs">
        <button className="bg-primary px-6 py-3 rounded-lg text-white">Start Your Brand</button>
      </Link>
    </div>
  );
}
