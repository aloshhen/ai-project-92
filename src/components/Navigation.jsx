import React from 'react'
import { Menu, Phone } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bar-secondary/50 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-display text-bar-accent">Urban Bar</div>
        <div className="flex items-center space-x-4">
          <a href="#menu" className="text-bar-text hover:text-bar-accent transition-colors">
            Меню
          </a>
          <a href="#events" className="text-bar-text hover:text-bar-accent transition-colors">
            События
          </a>
          <button className="bg-bar-accent text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <Phone size={18} />
            <span>Бронь</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation