import Header from './components/Header'
import Hero from './components/Hero'
import ArtistsGrid from './components/ArtistsGrid'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <ArtistsGrid />
        <FinalCTA />
      </main>
      <footer className="bg-black text-white/40 text-xs text-center py-10">
        © {new Date().getFullYear()} ReConnect
      </footer>
    </div>
  )
}

export default App
