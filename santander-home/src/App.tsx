import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { ImportantCards } from './components/ImportantCards.tsx'
import { NavBar } from './components/NavBar.tsx'
import { SelfServiceGrid } from './components/SelfServiceGrid.tsx'
import { ShortcutsCarousel } from './components/ShortcutsCarousel.tsx'

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Hero />
        <ShortcutsCarousel />
        <ImportantCards />
        <SelfServiceGrid />
      </main>
      <Footer />
    </>
  )
}
