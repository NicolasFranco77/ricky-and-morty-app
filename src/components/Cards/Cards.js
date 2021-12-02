import { Link } from "react-router-dom";

import styles from "./Cards.module.scss";

function Cards({ results, page }) {
  let display;

  if (results) {
    display = results.map((x) => (
      <Link
        style={{ textDecoration: "none" }}
        to={`${page}${x.id}`}
        key={x.id}
        className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
      >
        <div className={`${styles.cards} d-flex flex-column justify-content-center `}>
          <img
            src={x.image}
            alt={x.name}
            className={`${styles.img} img-fluid`}
          />
          <div className="content" style={{ padding: "10px" }}>
            <div className="fs-4 fw-bold mb-4">{x.name}</div>
            <div className="fs-6">Last location</div>
            <div className="fs-5">{x.location.name}</div>
          </div>
        </div>
        {(() => {
          if (x.status === "Dead") {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-danger`}
              >
                {x.status}
              </div>
            );
          } else if (x.status === "Alive") {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
                {x.status}
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-secondary`}
              >
                {x.status}
              </div>
            );
          }
        })()}
      </Link>
    ));
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
}

export default Cards;
