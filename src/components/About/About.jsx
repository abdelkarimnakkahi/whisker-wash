import aboutImage from "../../assets/images/about-image.png";
import "./About.css";

function About() {
  const statList = [
    { number: "290K", name: "Product" },
    { number: "99K", name: "Seller" },
    { number: "2K", name: "Positive review" },
  ];
  return (
    <section className="about">
      <div className="container">
        <div className="about-image">
          <img src={aboutImage} alt="About image" />
        </div>
        <div className="about-content">
          <h2>Passionate Care for Every Paw and Whisker.</h2>
          <p>
            We are dedicated to providing the highest quality care for your
            pets, treating them as our own. With love, attention, and expertise,
            we ensure every paw and whisker receives the care they deserve.
          </p>
          <a className="btn" href="#">
            Read More
          </a>
          <div className="stats-wrapper">
            {statList.map(({ name, number }, Index) => (
              <div className="stat-item">
                <h3>{number}</h3>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
