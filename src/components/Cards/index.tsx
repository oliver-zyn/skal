import { Money, Ticket, Wallet } from 'phosphor-react'
import './style.css'

export function Cards() {
  return (
    <section className="cards">
        <div className="card">
          <Money size={40} weight="duotone" />
          <div>
            <h3>Compre NFT's em real</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div className="card">
          <Ticket size={40} weight="duotone" />
          <div>
            <h3>Revenda os seus ingressos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div className="card">
          <Wallet size={40} weight="duotone" />
          <div>
            <h3>Colecione os seus ingressos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
    </section>
  )
}