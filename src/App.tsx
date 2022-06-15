import './global.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'

export function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
    </div>
  )
}