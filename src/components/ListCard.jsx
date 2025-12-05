import Card from "./Card";
import { sections } from "../db/data";

const ListCard = () => {
  return (
    <section className="alternating-content py-5" id="trabajos">
      <div className="container">
        <h2 className="fw-bold display-6 mb-5">
          Trabajos
        </h2>

        {sections.map((sec) => (
          <Card key={sec.id} data={sec} />
        ))}
      </div>
    </section>
  );
};

export default ListCard;
