"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductGallery from '@/components/product-gallery'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import { useTheme, themes } from '@/context/ThemeContext'

const productInfo = {
  name: "Café de especialidad - Fermentación inducida anaerobica",
  image: "/gabo.jpg", 
  materials: [
    "asd",
    "asd",
    "Sasd"
  ],
  description: "asd",
  gallery: [
    "/gabo.jpg",
    "/gabo.jpg",
    "/gabo.jpg",
    "/gabo.jpg"
  ]
}

export default function ProductInfo() {
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.primary}] to-[${colors.secondary}] text-[${colors.text}]`}>
      <ThemeSwitch />
      <main className="container mx-auto px-4 py-8">
        <Card className={`bg-[${colors.cardBg}] border-[${colors.border}] border-2 shadow-lg shadow-[${colors.border}]/20 animate-fadeIn`}>
          <CardHeader>
            <CardTitle className={`text-3xl font-bold text-center text-[${colors.accent}] animate-slideDown`}>
              {productInfo.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative w-full h-64 animate-scaleIn">
              <Image
                src={productInfo.image}
                alt={productInfo.name}
                fill
                style={{objectFit: "contain"}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="animate-slideUp text-center">
              <h2 className={`text-2xl font-semibold mb-2 text-[${colors.accent}]`}>Description:</h2>
              <p className={`text-[${colors.text}]`}>{productInfo.description}</p>
            </div>
            <div className="animate-slideUp text-center">
              <h2 className={`text-2xl font-semibold mb-2 text-[${colors.accent}]`}>Características:</h2>
              <ul className="list-none">
                {productInfo.materials.map((material, index) => (
                  <li key={index} className={`text-[${colors.text}]`}>{material}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <ProductGallery images={productInfo.gallery} />
      </main>
      
      <Footer />
    </div>
  )
}

