"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'wine' | 'coffee';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = {
  wine: {
    primary: '#2C0A0A',
    secondary: '#4A0404',
    accent: '#C87941',
    cardBg: '#3D0C0C',
    border: '#8B4513',
    text: '#E6D5B8',
  },
  coffee: {
    primary: '#1A120B',
    secondary: '#3C2A21',
    accent: '#D4A574',
    cardBg: '#2C1810',
    border: '#C8A27C',
    text: '#F5E6D3',
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('wine');

  const toggleTheme = () => {
    setTheme(prev => prev === 'wine' ? 'coffee' : 'wine');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 