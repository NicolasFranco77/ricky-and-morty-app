import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

function Filters({ setStatus, setGender, setPageNumber, setSpecies }) {
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center mb-4 text-primary text-decoration-underline"
        onClick={() => {
          setPageNumber(1);
          setStatus("");
          setGender("");
          setSpecies("");
          window.location.reload(false)
        }}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

export default Filters;
