"use client";
import { Button } from '@/components/ui/button';
import { Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState('en');

  return (
    <header className="sticky top-0 bg-card shadow-md p-4 flex justify-between items-center z-10">
      <h1 className="text-xl font-bold">Amory Delcampe</h1>
      <nav className="flex gap-2">
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Button variant="outline" size="icon" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
          <Languages />
        </Button>
      </nav>
    </header>
  );
}