import { Cards } from '../Cards';
import './style.css';

export function About() {
  return (
    <section className="about" id="about">
      <div>
        <h2>O que é a Skål?</h2>
        <p>O projeto visa desenvolver um sistema para venda e controle de ingressos tokenizados, aproveitando todo o aparato criptográfico que os blockchains disponibilizam, conseguindo solucionar dores como burocracia na compra de ingressos, falsificações e também redução de custos, além de gerar vantagens exclusivas e royalties à medida que as NFTs se tornam cobráveis ​​e com maior valor de mercado.</p>
        <Cards />
      </div>
    </section>
  )
}