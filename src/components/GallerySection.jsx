import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    'https://source.unsplash.com/800x600/?bar,cocktail',
    'https://source.unsplash.com/800x600/?bar,interior',
    'https://source.unsplash.com/800x600/?bar,night',
    'https://source.unsplash.com/800x600/?bar,drinks'
  ]

  return (
    <section id="gallery" className="section-padding bg-bar-primary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center text-bar-accent mb-12">
          Галерея
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={40} />
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GallerySection