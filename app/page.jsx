import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to NovaBrand</h1>
      <Link href="/project-specs">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Get Started</button>
      </Link>
    </div>
  );
}
