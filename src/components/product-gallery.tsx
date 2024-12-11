import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section className="my-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center text-gold-400 mb-6 animate-slideDown">Product Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="group relative h-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-gold-600/10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-gold-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
            <Image
              src={src}
              alt={`Product image ${index + 1}`}
              fill
              style={{objectFit: "cover"}}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
              <p className="text-sm font-semibold">View Details</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

