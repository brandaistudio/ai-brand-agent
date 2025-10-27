'use client';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <button onClick={toggleLang} className="px-2 py-1 border rounded">
      {lang === 'en' ? 'EN' : 'AR'}
    </button>
  );
}