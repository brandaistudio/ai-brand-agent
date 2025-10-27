'use client';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <Link href="/" className="font-bold text-xl">NovaBrand</Link>
      <div className="flex gap-4">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}