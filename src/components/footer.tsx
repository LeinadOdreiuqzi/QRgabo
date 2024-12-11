"use client"

import { useTheme, themes } from '@/context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <footer className={`bg-[${colors.cardBg}] text-[${colors.text}] py-8 animate-fadeIn`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slideUp">
            <h3 className="text-2xl font-semibold text-[#C87941] mb-4">Ubicaciones</h3>
            <ul className="space-y-2">
              <li>New York: 123 Broadway, NY 10001</li>
              <li>Los Angeles: 456 Hollywood Blvd, CA 90028</li>
              <li>Chicago: 789 Michigan Ave, IL 60611</li>
            </ul>
          </div>
          <div className="animate-slideUp">
            <h3 className="text-2xl font-semibold text-[#C87941] mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li>Email: info@cafegabo.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>
                <a href="#" className="hover:text-[#8B4513] transition-colors duration-300">
                  Facebook
                </a>
                {' | '}
                <a href="#" className="hover:text-[#C8A27C] transition-colors duration-300">
                  Twitter
                </a>
                {' | '}
                <a href="#" className="hover:text-[#C8A27C] transition-colors duration-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-[#8B4513] animate-fadeIn">
          © 2024 Café Gabo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

