import "../css/Hero.css";
import Heropic from "../assets/hero-pic.png";

export const Hero = () => {
  return (
    <div className="contanier">
      <div className="hero">
        <div className="hero-left">
          <p className="font-bold">Welcome to Mega Store</p>
          <h1>Buy the lastest electroncis</h1>
        </div>

        <div className="hero-right">
          <img src={Heropic} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
