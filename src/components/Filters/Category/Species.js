//components
import FilterBtn from "../FilterBtn";

function Species({ setPageNumber, setSpecies }) {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterBtn
              task={setSpecies}
              setPageNumber={setPageNumber}
              items={items}
              name="especies"
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Species;
