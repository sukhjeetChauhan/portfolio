import '../styles/App.css'
import About from './About'
import Footer from './Footer'
import Landing from './Landing'
import Navigation from './Navigation'
import Projects from './Projects'

function App() {
  return (
    <div className="section">
      <Navigation />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
