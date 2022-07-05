import { RocketLaunch } from 'phosphor-react'
import './style.css'

export function Message() {
  return (
    <section className="message">
      <div>
        <h2>Viajamos no passado para trazer o <span className="text-effect">futuro</span>!</h2>
        <RocketLaunch size={38} weight="duotone" />
      </div>
    </section>
  )
}