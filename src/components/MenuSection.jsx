import React from 'react'
import { motion } from 'framer-motion'
import { Cocktail, Wine, Beer } from 'lucide-react'

const MenuSection = () => {
  const menuItems = [
    {
      icon: <Cocktail size={40} className="text-bar-accent" />,
      title: 'Коктейли',
      description: 'Авторские миксы от наших талантливых барменов'
    },
    {
      icon: <Wine size={40} className="text-bar-accent" />,
      title: 'Вина',
      description: 'Лучшие вина со всего мира'
    },
    {
      icon: <Beer size={40} className="text-bar-accent" />,
      title: 'Разливное пиво',
      description: 'Крафтовые сорта от локальных и международных пивоварен'
    }
  ]

  return (
    <section id="menu" className="section-padding bg-bar-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center text-bar-accent mb-12">
          Наше Меню
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-bar-primary p-6 rounded-xl text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl mb-4 text-bar-text">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection