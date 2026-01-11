import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Calendar, Users } from 'lucide-react'

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 2,
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Бронирование:', formData)
  }

  return (
    <section id="reservation" className="section-padding bg-bar-primary">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-display text-center text-bar-accent mb-12">
          Забронировать Стол
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-bar-secondary p-8 rounded-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-bar-text">Имя</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-bar-primary p-3 rounded-lg text-bar-text"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-bar-text">Телефон</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-bar-primary p-3 rounded-lg text-bar-text"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-bar-text">Дата</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-bar-accent" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-bar-primary p-3 pl-10 rounded-lg text-bar-text"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-bar-text">Гости</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-bar-accent" />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full bg-bar-primary p-3 pl-10 rounded-lg text-bar-text"
                  required
                />
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-bar-accent text-white p-4 rounded-full flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Забронировать</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default ReservationForm