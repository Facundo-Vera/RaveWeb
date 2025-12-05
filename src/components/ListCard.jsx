import Card from "./Card";

const ListCard = () => {
  const sections = [
    {
      id: 1,
      title: "Landing Page - Agencia Creativa",
      description:
        "Este proyecto es una Landing Page de alto impacto diseñada específicamente para una Agencia de Diseño y Desarrollo moderna...",
      buttonText: "Ver demo",
      buttonUrl:"https://devbox-recurso.netlify.app/",
      imageSrc:
        "https://d25ltszcjeom5i.cloudfront.net/329462/aqlffuupki/806shots_so.png",
      imageAlt: "Foto proyecto",
      isReversed: false,
    },
    {
      id: 2,
      title: "Dashboard de Administración",
      description:
        "Este proyecto es un Panel de Control (Dashboard) centralizado diseñado para ofrecer a los administradores una visión en tiempo real y resumida del rendimiento de un negocio, aplicación o sistema.",
      buttonText: "Ver demo",
      buttonUrl:"https://devbox-recurso.netlify.app/",
      imageSrc:
        "https://d25ltszcjeom5i.cloudfront.net/329462/tbuiadjrmz/672shots_so.png",
      imageAlt: "Foto proyecto",
      isReversed: true,
    },
  ];

  return (
    <section className="alternating-content py-5" id="trabajos">
      <div className="container">
        <h2 className="fw-bold display-6 mb-5 ">
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
