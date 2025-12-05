import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ trabajo }) => {
  const { nombre, imagen, descripcion } = trabajo;

  return (
    <div className="card-wrapper position-relative">
      <div className="card  mt-4 p-0 d-flex flex-column">
        <img
          src={imagen}
          alt={nombre}
          className="w-100"
          style={{ objectFit: "cover", height: "280px" }}
        />

        <div className="p-2  text-white d-flex flex-column flex-grow-1">
          <p className="fw-bold m-0">{nombre}</p>
          <p className="text-secondary mt-1">{descripcion}</p>

          <div className="mt-auto d-flex gap-2 justify-content-end">
            <button className="boton">
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              Ver código
            </button>

            <button className="boton">
              <FontAwesomeIcon icon={faGlobe} className="me-2" />
              Vista previa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
