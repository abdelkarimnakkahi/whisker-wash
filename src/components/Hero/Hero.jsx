import "./Hero.css";
import dogImage1 from "../../assets/images/dog-image1.png";
import dogImage2 from "../../assets/images/dog-image2.png";
import dogImage3 from "../../assets/images/dog-image3.png";
import discountImage from "../../assets/images/discount-badge.png";
import dogFood from "../../assets/images/dog-food.png";
import dogHumanHands from "../../assets/images/dog-human-hands.png";
import authorAvatar from "../../assets/images/author-image.png";
import signature from "../../assets/images/signature.svg";

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
        <div className="bottom-hero">
          <div>
            <img src={dogHumanHands} alt="Dog and human hands" />
          </div>
          <div className="author-content">
            <h2>A pet is an animal kept mainly for companionship.</h2>
            <div className="author-info">
              <div className="author-detail">
                <img
                  className="author-avatar"
                  src={authorAvatar}
                  alt="Author avatar"
                />
                <div>
                  <p className="author-name">Frank D. Hyden</p>
                  <img src={signature} alt="Author signature" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={dogFood} alt="Dog food" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
