import "../css/Offers.css";
import offerPic from "../assets/Offers-img.png";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <img src={offerPic} alt="offers" />
      </div>
      <div className="offers-right">
        <h1>Exclusive Offers</h1>
        <p>Up to sell</p>
        <h1>50% off</h1>
        <Link className="offers-link" to="product">
          Check Now
        </Link>
      </div>
    </div>
  );
};
export default Offers;
