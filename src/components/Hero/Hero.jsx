import "./Hero.css";
import dogImage1 from "../../assets/images/dog-image1.png";
import dogImage2 from "../../assets/images/dog-image2.png";
import dogImage3 from "../../assets/images/dog-image3.png";
import discountImage from "../../assets/images/discount-badge.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="top-hero">
          <img className="dog-image1" src={dogImage1} alt="Dog Image" />
          <h1>
            Where happy pets <br />
            meet expert care!
          </h1>
          <img className="discount-image" src={discountImage} alt="Dog Image" />
        </div>
        <div className="middle-hero">
          <img src={dogImage3} alt="Dog Image" />
          <div>
            <p>
              Every pet deserves the best care, combining gentle grooming with
              expert pampering. Our dedicated team ensures each furry friend
              feels comfortable, loved, and cared for.
            </p>
            <a href="#" className="btn btn-book-call">
              Schedule a call
            </a>
          </div>
          <img src={dogImage2} alt="Dog Image" />
        </div>
        <div className="bottom-hero"></div>
      </div>
    </section>
  );
}

export default Hero;
