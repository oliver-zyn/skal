import { GithubLogo, Globe, InstagramLogo } from 'phosphor-react';
import './style.css';

export function Footer() {
  return (
    <footer className="footer-page" id="team">
      <div>
        <div className="social-links">
          <a href="#">
            <InstagramLogo size={32} />
          </a>
          <a href="#">
            <GithubLogo size={32} />
          </a>
          <a href="#">
            <Globe size={32} />
          </a>
        </div>
        <p>&copy; 2022 Copyright - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}