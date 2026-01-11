import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Music, Star } from 'lucide-react'

const EventsSection = () => {
  const events = [
    {
      icon: <Music size={40} className="text-bar-accent" />,
      title: 'Live Music',
      date: 'Каждая пятница\'23\'24',
      description: 'Живая музыка от лучших локальных исполнителей'
    },
    {
      icon: <Star size={40} className="text-bar-accent" />,
      title: 'Дегустация Коктейлей',
      date: 'Каждый четверг\'23\'24',
      description: 'Авторские коктейли и мастер-классы от наших барменов'
    },
    {
      icon: <Calendar size={40} className="text-bar-accent" />,
      title: 'Тематические Вечера',
      date: 'По выходным\'23\'24',
      description: 'Уникальные вечеринки с особой атмосферой и развлечениями'
    }
  ]

  return (
    <section id="events" className="section-padding bg-bar-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center text-bar-accent mb-12">
          Наши События
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-bar-primary p-6 rounded-xl text-center"
            >
              <div className="mb-4 flex justify-center">{event.icon}</div>
              <h3 className="text-2xl mb-2 text-bar-text">{event.title}</h3>
              <p className="text-bar-accent mb-4">{event.date}</p>
              <p className="text-gray-400">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection