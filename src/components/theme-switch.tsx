"use client"

import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 px-4 py-2 rounded-full
        transition-all duration-300 ease-in-out
        ${theme === 'wine' 
          ? 'bg-[#3D0C0C] text-[#E6D5B8] hover:bg-[#4A0404]' 
          : 'bg-[#2C1810] text-[#F5E6D3] hover:bg-[#3C2A21]'
        }
        border-2
        ${theme === 'wine' ? 'border-[#8B4513]' : 'border-[#C8A27C]'}
      `}
    >
      {theme === 'wine' ? '🍷' : '☕'} Cambiar Tema
    </button>
  );
} 