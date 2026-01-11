import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-bar-secondary py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-2xl font-display text-bar-accent mb-4">Urban Bar</h3>
          <p className="text-bar-text">Место, где рождаются незабываемые вечера</p>
        </div>
        <div>
          <h4 className="text-xl text-bar-accent mb-4">Контакты</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-bar-accent" />
              <span>ул. Барная, 42, Город</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-bar-accent" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-bar-accent" />
              <span>hello@urbanbar.com</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-bar-accent mb-4">Часы Работы</h4>
          <div className="text-bar-text">
            <p>Пн-Чт: 18:00 - 00:00</p>
            <p>Пт-Сб: 18:00 - 03:00</p>
            <p>Вс: Выходной</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-4 border-t border-bar-primary">
        © 2024 Urban Bar. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer