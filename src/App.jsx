import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import GallerySection from './components/GallerySection'
import EventsSection from './components/EventsSection'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bar-primary">
      <Navigation />
      <Hero />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <ReservationForm />
      <Footer />
    </div>
  )
}

export default App