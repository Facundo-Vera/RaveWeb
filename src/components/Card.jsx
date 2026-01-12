import "../css/Card.css";

const Card = ({ data }) => {
  const {
    title,
    description,
    buttonText,
    imageSrc,
    imageAlt,
    isReversed,
    buttonUrl,
  } = data;

  const rowClass = isReversed ? "flex-lg-row-reverse" : "";

  return (
    <div className={`row g-4 align-items-center mb-5 pb-5 ${rowClass}`}>
      <div className="col-12 col-lg-6 order-2 order-lg-1  text-animate">
        <h2 className="text-white fw-normal display-6 mb-3">{title}</h2>
        <p className="text-secondary mb-4">{description}</p>

        {buttonText && (
          <a
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light rounded-pill px-4 py-2 mt-2"
          >
            {buttonText}
          </a>
        )}
      </div>

      <div className="col-12 col-lg-6 order-1 order-lg-2">
        <div
          className={`image-wrapper animate-on-scroll ${
            isReversed ? "animate-right" : "animate-left"
          } rounded-3 overflow-hidden shadow-lg`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-100 d-block"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
