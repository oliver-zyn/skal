import skalLogoImg from '../../assets/logo.png'

import './style.css'

export function Header() {
  return (
    <header>
      <div>
        <div className="logo">
          <img src={skalLogoImg} alt="logo skal" />
        </div>
        <nav>
          <a href="#" className='active'>Home</a>
          <a href="#">About</a>
          <a href="#">RoadMap</a>
          <a href="#">Team</a>
        </nav>
        <div>
          <button className='btn-connect'>Connect Wallet</button>
        </div>
      </div>
    </header>
  )
}