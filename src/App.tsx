import './global.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Message } from './components/Message'
import { About } from './components/About'
import { Roadmap } from './components/Roadmap'
import { Updates } from './components/Updates'

export function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Message />
      <About />
      <Roadmap />
      <Updates />
    </div>
  )
}