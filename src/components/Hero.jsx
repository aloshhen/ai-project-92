import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-bar-primary via-bar-secondary to-black opacity-80"></div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-display text-bar-accent mb-6">
          Urban Bar
        </h1>
        <p className="text-xl md:text-2xl text-bar-text mb-8">
          Место, где каждый коктейль - это искусство, а каждый вечер - незабываемое приключение
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-bar-accent text-white px-6 py-3 rounded-full flex items-center space-x-2"
          >
            <span>Забронировать</span>
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-bar-accent text-bar-accent px-6 py-3 rounded-full"
          >
            Посмотреть меню
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero