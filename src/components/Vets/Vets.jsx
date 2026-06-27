import "./Vets.css";
import vetImage1 from "../../assets/images/vet1.png";
import vetImage2 from "../../assets/images/vet2.png";
import vetImage3 from "../../assets/images/vet3.png";

function Vets() {
  const vetList = [
    { name: "Fur haven", job: "Pet Care Manager", image: vetImage1 },
    { name: "COrrie orvis", job: "Veterinarian", image: vetImage2 },
    { name: "canine comforts", job: "Dog Trainer", image: vetImage3 },
  ];
  return (
    <section className="vets">
      <div className="container">
        <h2>Honoring Those Who Serve Our Vets, Our Heroes</h2>
        <p>
          “Honoring those who serve with courage and compassion, our vets embody
          true heroism. Their dedication inspires gratitude every day with
          courage and compassion, our vets embody true heroism.
        </p>
        <div className="vets-wrapper">
          {vetList.map((vetItem, index) => (
            <div className="vet-item" key={index}>
              <img src={vetItem.image} alt={vetItem.name} />
              <div>
                <h3>{vetItem.name}</h3>
                <p>{vetItem.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vets;
