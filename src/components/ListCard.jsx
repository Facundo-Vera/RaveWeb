import "../db/data";
import { trabajosData } from "../db/data";
import { Card } from "./Card";

const ListCard = () => {
  const trabajos = trabajosData.trabajos;

  return (
    <div className="container py-5" id="trabajos">
      <h2 className="fw-bold display-6 mb-4">Trabajos</h2>

      <div className="row g-4">
        {trabajos.map((trabajo, id) => {
          
          let colClass = "col-12 col-md-6 col-lg-4"; // Tamaño por defecto (tercios)
          let cardSize = "small"; // Tamaño por defecto de la tarjeta

          // Lógica para determinar el tamaño y la columna basado en el índice:
          if (id === 0) {
            // El primer elemento (índice 0) ocupa todo el ancho y es "big"
            colClass = "col-12";
            cardSize = "big"; 
          } else if (id === 1 || id === 2) {
            // Los siguientes dos elementos (índices 1 y 2) ocupan la mitad del ancho
            colClass = "col-12 col-md-6";
            // cardSize ya es "small" por defecto
          } else {
            // Todos los demás (índice 3 en adelante)
            // colClass ya es "col-12 col-md-6 col-lg-4" por defecto
            // cardSize ya es "small" por defecto
          }

          return (
            <div key={id} className={colClass}>
              <Card trabajo={trabajo} size={cardSize} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCard;