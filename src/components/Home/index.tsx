import { Carousel } from 'react-responsive-carousel';

import home01Img from '../../assets/home-01.png';
import home02Img from '../../assets/home-02.jpg';
import home03Img from '../../assets/home-03.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

export function Home() {
  return (
    <section className="home" id="home">
      <div>
        <div className="title">
          <h1>
            Tenha mais controle, segurança e liberdade na hora de criar os seus{" "}
            <span className="text-effect">eventos</span>
          </h1>
          <p>Crie seus eventos usando ingressos tokenizados</p>
        </div>
        <div className="carousel">
          <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false}>
            <div>
              <img src={home01Img} />
            </div>
            <div>
              <img src={home02Img} />
            </div>
            <div>
              <img src={home03Img} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
